// Type definitions for @ag-grid-community/core v25.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Beans } from "../beans";
import { CellComp } from "../cellComp";
import { RowNode } from "../../entities/rowNode";
import { Column } from "../../entities/column";
import { CellFocusedEvent, RowEvent } from "../../events";
import { IFrameworkOverrides } from "../../interfaces/iFrameworkOverrides";
import { RowPosition } from "../../entities/rowPosition";
import { RowComp } from "./rowComp";
import { BeanStub } from "../../context/beanStub";
import { ICellRendererParams } from "../cellRenderers/iCellRenderer";
export declare enum RowType {
    Normal = "Normal",
    FullWidth = "FullWidth",
    FullWidthLoading = "FullWidthLoading",
    FullWidthGroup = "FullWidthGroup",
    FullWidthDetail = "FullWidthDetail"
}
export declare const FullWidthRenderers: Map<RowType, string>;
export declare const FullWidthKeys: Map<RowType, string>;
export declare class RowController extends BeanStub {
    static DOM_DATA_KEY_RENDERED_ROW: string;
    private instanceId;
    private readonly rowNode;
    private readonly beans;
    private rowType;
    private allRowComps;
    private leftRowComp;
    private rightRowComp;
    private centerRowComp;
    private fullWidthRowComp;
    private firstRowOnPage;
    private lastRowOnPage;
    private active;
    private editingRow;
    private rowFocused;
    private centerCols;
    private leftCols;
    private rightCols;
    private fadeRowIn;
    private slideRowIn;
    private readonly useAnimationFrameForCreate;
    private rowIsEven;
    private paginationPage;
    private parentScope;
    private scope;
    private lastMouseDownOnDragger;
    private rowLevel;
    private readonly printLayout;
    private updateColumnListsPending;
    constructor(parentScope: any, rowNode: RowNode, beans: Beans, animateIn: boolean, useAnimationFrameForCreate: boolean, printLayout: boolean);
    getInstanceId(): number;
    setLeftRowComp(rowComp: RowComp): void;
    setRightRowComp(rowComp: RowComp): void;
    setCenterRowComp(rowComp: RowComp): void;
    setFullWidthRowComp(rowComp: RowComp): void;
    getColsForRowComp(pinned: string | null): Column[];
    getScope(): any;
    isPrintLayout(): boolean;
    private setupAngular1Scope;
    getCellForCol(column: Column): HTMLElement | null;
    executeProcessRowPostCreateFunc(): void;
    private setRowType;
    private updateColumnLists;
    private updateColumnListsImpl;
    private setAnimateFlags;
    isEditing(): boolean;
    stopRowEditing(cancel: boolean): void;
    isFullWidth(): boolean;
    getRowType(): RowType;
    refreshFullWidth(): boolean;
    private addListeners;
    private onColumnMoved;
    private addListenersForCellComps;
    private onRowNodeDataChanged;
    private onRowNodeCellChanged;
    private postProcessCss;
    private onRowNodeHighlightChanged;
    private onRowNodeDraggingChanged;
    private postProcessRowDragging;
    private updateExpandedCss;
    private onDisplayedColumnsChanged;
    private onVirtualColumnsChanged;
    getRowPosition(): RowPosition;
    onKeyboardNavigate(keyboardEvent: KeyboardEvent): void;
    onTabKeyDown(keyboardEvent: KeyboardEvent): void;
    onFullWidthRowFocused(event: CellFocusedEvent): void;
    refreshCell(cellComp: CellComp): void;
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    createRowEvent(type: string, domEvent?: Event): RowEvent;
    private createRowEventWithSource;
    private onRowDblClick;
    private onRowMouseDown;
    onRowClick(mouseEvent: MouseEvent): void;
    setupDetailRowAutoHeight(eDetailGui: HTMLElement): void;
    createFullWidthParams(eRow: HTMLElement, pinned: string | null): ICellRendererParams;
    private addFullWidthRowDragging;
    private onUiLevelChanged;
    private isFirstRowOnPage;
    private isLastRowOnPage;
    private onModelUpdated;
    stopEditing(cancel?: boolean): void;
    private setEditingRow;
    startRowEditing(keyPress?: number | null, charPress?: string | null, sourceRenderedCell?: CellComp | null): void;
    forEachCellComp(callback: (renderedCell: CellComp) => void): void;
    private postProcessClassesFromGridOptions;
    private postProcessRowClassRules;
    private postProcessStylesFromGridOptions;
    getInitialRowTopStyle(): string;
    getRowBusinessKey(): string | undefined;
    getInitialRowClasses(pinned: string | null): string[];
    preProcessStylesFromGridOptions(): string;
    processStylesFromGridOptions(): any;
    private onRowSelected;
    refreshAriaLabel(node: HTMLElement, selected: boolean): void;
    isUseAnimationFrameForCreate(): boolean;
    addHoverFunctionality(eRow: HTMLElement): void;
    roundRowTopToBounds(rowTop: number): number;
    protected getFrameworkOverrides(): IFrameworkOverrides;
    private onRowHeightChanged;
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    destroyFirstPass(): void;
    private setupRemoveAnimation;
    destroySecondPass(): void;
    private onCellFocusChanged;
    private onPaginationChanged;
    private onTopChanged;
    private onPaginationPixelOffsetChanged;
    private applyPaginationOffset;
    setRowTop(pixels: number): void;
    getRowNode(): RowNode;
    getRenderedCellForColumn(column: Column): CellComp | null;
    private onRowIndexChanged;
    private updateRowIndexes;
    getPinnedLeftRowElement(): HTMLElement;
    getPinnedRightRowElement(): HTMLElement;
    getBodyRowElement(): HTMLElement;
    getFullWidthRowElement(): HTMLElement;
}
