import { Beans } from "../../rendering/beans";
import { Column } from "../../entities/column";
import { ColDef } from "../../entities/colDef";
import { AbstractHeaderWrapper } from "./abstractHeaderWrapper";
import { ITooltipParams } from "../../rendering/tooltipComponent";
export declare class HeaderWrapperComp extends AbstractHeaderWrapper {
    private static TEMPLATE;
    private dragAndDropService;
    private columnController;
    private horizontalResizeService;
    private menuFactory;
    private gridApi;
    private columnApi;
    private sortController;
    private userComponentFactory;
    private columnHoverService;
    protected beans: Beans;
    private eResize;
    private cbSelectAll;
    protected readonly column: Column;
    protected readonly pinned: string | null;
    private headerComp;
    private headerCompGui;
    private headerCompVersion;
    private resizeStartWidth;
    private resizeWithShiftKey;
    private sortable;
    private menuEnabled;
    private colDefVersion;
    private refreshFunctions;
    private moveDragSource;
    private displayName;
    private draggable;
    private colDefHeaderComponent?;
    private colDefHeaderComponentFramework?;
    constructor(column: Column, pinned: string | null);
    protected postConstruct(): void;
    private onColumnRowGroupChanged;
    private onColumnPivotChanged;
    private onColumnValueChanged;
    private checkDisplayName;
    private updateState;
    private calculateDisplayName;
    private onNewColumnsLoaded;
    private refresh;
    private refreshHeaderComp;
    private destroyHeaderComp;
    private removeMoveDragSource;
    attemptHeaderCompRefresh(): boolean;
    private addActiveHeaderMouseListeners;
    private setActiveHeader;
    protected onFocusIn(e: FocusEvent): void;
    protected onFocusOut(e: FocusEvent): void;
    protected handleKeyDown(e: KeyboardEvent): void;
    protected onTabKeyDown(): void;
    getComponentHolder(): ColDef;
    private addColumnHoverListener;
    private onColumnHover;
    private setupSortableClass;
    private onFilterChanged;
    private appendHeaderComp;
    private createParams;
    private afterHeaderCompCreated;
    private onColumnMovingChanged;
    private workOutDraggable;
    private attachDraggingToHeaderComp;
    private createDragItem;
    private setupResize;
    onResizing(finished: boolean, resizeAmount: number): void;
    onResizeStart(shiftKey: boolean): void;
    getTooltipParams(): ITooltipParams;
    private setupTooltip;
    private setupMovingCss;
    private addAttributes;
    private setupWidth;
    private setupMenuClass;
    private onMenuVisible;
    private onColumnWidthChanged;
    private normaliseResizeAmount;
}
