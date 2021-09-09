import { ColumnModel } from "../../../columns/columnModel";
import { Autowired } from "../../../context/context";
import { Column } from "../../../entities/column";
import { IHeaderColumn } from "../../../entities/iHeaderColumn";
import { Events } from "../../../eventKeys";
import { HeaderRowCtrl } from "../../row/headerRowCtrl";
import { AbstractHeaderCellCtrl, IAbstractHeaderCellComp } from "../abstractCell/abstractHeaderCellCtrl";
import { ResizeFeature } from "./resizeFeature";
export interface IHeaderCellComp extends IAbstractHeaderCellComp {
    focus(): void;
    setWidth(width: string): void;
    addOrRemoveCssClass(cssClassName: string, on: boolean): void;
    setResizeDisplayed(displayed: boolean): void;

    // temp
    refreshHeaderComp(): void;
}

export class HeaderCellCtrl extends AbstractHeaderCellCtrl {

    @Autowired('columnModel') private columnModel: ColumnModel;

    private eGui: HTMLElement;

    private colDefVersion: number;

    private comp: IHeaderCellComp;

    private column: Column;

    private refreshFunctions: (() => void)[] = [];

    private sortable: boolean | null | undefined;
    private displayName: string | null;
    private draggable: boolean;

    constructor(columnGroupChild: IHeaderColumn, parentRowCtrl: HeaderRowCtrl, column: Column) {
        super(columnGroupChild, parentRowCtrl);
        this.column = column;
    }

    public setComp(comp: IHeaderCellComp, eGui: HTMLElement, eResize: HTMLElement): void {
        super.setAbstractComp(comp);
        this.comp = comp;
        this.eGui = eGui;

        this.colDefVersion = this.columnModel.getColDefVersion();

        this.updateState();
        this.setupWidth();
        this.setupMovingCss();

        this.addManagedListener(this.eventService, Events.EVENT_NEW_COLUMNS_LOADED, this.onNewColumnsLoaded.bind(this));
        this.addManagedListener(this.eventService, Events.EVENT_COLUMN_VALUE_CHANGED, this.onColumnValueChanged.bind(this));
        this.addManagedListener(this.eventService, Events.EVENT_COLUMN_ROW_GROUP_CHANGED, this.onColumnRowGroupChanged.bind(this));
        this.addManagedListener(this.eventService, Events.EVENT_COLUMN_PIVOT_CHANGED, this.onColumnPivotChanged.bind(this));

        this.createManagedBean(new ResizeFeature(this.getPinned(), this.column, eResize, comp, this));
    }

    public temp_isDraggable(): boolean {
        return this.draggable;
    }

    public temp_isSortable(): boolean | null | undefined {
        return this.sortable;
    }

    public temp_getDisplayName(): string | null {
        return this.displayName;
    }

    public getGui(): HTMLElement {
        return this.eGui;
    }

    private onNewColumnsLoaded(): void {
        const colDefVersionNow = this.columnModel.getColDefVersion();
        if (colDefVersionNow != this.colDefVersion) {
            this.colDefVersion = colDefVersionNow;
            this.refresh();
        }
    }

    private updateState(): void {
        const colDef = this.column.getColDef();
        this.sortable = colDef.sortable;
        this.displayName = this.calculateDisplayName();
        this.draggable = this.workOutDraggable();
    }

    public temp_addRefreshFunction(func: ()=>void): void {
        this.refreshFunctions.push(func);
    }

    private refresh(): void {
        this.updateState();
        this.comp.refreshHeaderComp();
        this.refreshFunctions.forEach(f => f());
    }

    private calculateDisplayName(): string | null {
        return this.columnModel.getDisplayNameForColumn(this.column, 'header', true);
    }

    private checkDisplayName(): void {
        // display name can change if aggFunc different, eg sum(Gold) is now max(Gold)
        if (this.displayName !== this.calculateDisplayName()) {
            this.refresh();
        }
    }

    private workOutDraggable(): boolean {
        const colDef = this.column.getColDef();
        const isSuppressMovableColumns = this.gridOptionsWrapper.isSuppressMovableColumns();

        const colCanMove = !isSuppressMovableColumns && !colDef.suppressMovable && !colDef.lockPosition;

        // we should still be allowed drag the column, even if it can't be moved, if the column
        // can be dragged to a rowGroup or pivot drop zone
        return !!colCanMove || !!colDef.enableRowGroup || !!colDef.enablePivot;
    }

    private onColumnRowGroupChanged(): void {
        this.checkDisplayName();
    }

    private onColumnPivotChanged(): void {
        this.checkDisplayName();
    }

    private onColumnValueChanged(): void {
        this.checkDisplayName();
    }

    private setupWidth(): void {
        const listener = () => {
            this.comp.setWidth(this.column.getActualWidth() + 'px');
        };
    
        this.addManagedListener(this.column, Column.EVENT_WIDTH_CHANGED, listener);
        listener();
    }

    private setupMovingCss(): void {
        const listener = ()=> {
            // this is what makes the header go dark when it is been moved (gives impression to
            // user that the column was picked up).
            this.comp.addOrRemoveCssClass('ag-header-cell-moving', this.column.isMoving());
        };

        this.addManagedListener(this.column, Column.EVENT_MOVING_CHANGED, listener);
        listener();
    }

    

}
