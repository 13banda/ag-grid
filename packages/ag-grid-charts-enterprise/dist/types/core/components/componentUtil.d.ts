import { GridOptions } from '../entities/gridOptions';
import { GridApi } from '../gridApi';
export declare class ComponentUtil {
    static EVENTS: string[];
    static VUE_OMITTED_PROPERTY: string;
    /** Exclude the following internal events from code generation to prevent exposing these events via framework components */
    static EXCLUDED_INTERNAL_EVENTS: string[];
    /** EVENTS that should be exposed via code generation for the framework components.  */
    static PUBLIC_EVENTS: string[];
    static getCallbackForEvent(eventName: string): string;
    static EVENT_CALLBACKS: string[];
    static BOOLEAN_PROPERTIES: ("api" | "columnApi" | "valueCache" | "suppressContextMenu" | "preventDefaultOnContextMenu" | "allowContextMenuWithControlKey" | "suppressMenuHide" | "enableBrowserTooltips" | "tooltipMouseTrack" | "tooltipInteraction" | "copyHeadersToClipboard" | "copyGroupHeadersToClipboard" | "suppressCopyRowsToClipboard" | "suppressCopySingleCellRanges" | "suppressLastEmptyLineOnPaste" | "suppressClipboardPaste" | "suppressClipboardApi" | "suppressCutToClipboard" | "maintainColumnOrder" | "suppressFieldDotNotation" | "allowDragFromColumnsToolPanel" | "suppressMovableColumns" | "suppressColumnMoveAnimation" | "suppressDragLeaveHidesColumns" | "suppressRowGroupHidesColumns" | "suppressAutoSize" | "skipHeaderOnAutoSize" | "singleClickEdit" | "suppressClickEdit" | "readOnlyEdit" | "stopEditingWhenCellsLoseFocus" | "enterNavigatesVertically" | "enterNavigatesVerticallyAfterEdit" | "enableCellEditingOnBackspace" | "undoRedoCellEditing" | "suppressCsvExport" | "suppressExcelExport" | "cacheQuickFilter" | "includeHiddenColumnsInQuickFilter" | "excludeChildrenWhenTreeDataFiltering" | "enableAdvancedFilter" | "includeHiddenColumnsInAdvancedFilter" | "enableCharts" | "suppressChartToolPanelsButton" | "masterDetail" | "keepDetailRows" | "detailRowAutoHeight" | "valueCacheNeverExpires" | "enableCellExpressions" | "suppressTouch" | "suppressFocusAfterRefresh" | "suppressAsyncEvents" | "suppressBrowserResizeObserver" | "suppressPropertyNamesCheck" | "suppressChangeDetection" | "debug" | "suppressLoadingOverlay" | "suppressNoRowsOverlay" | "pagination" | "paginationPageSizeSelector" | "paginationAutoPageSize" | "paginateChildRows" | "suppressPaginationPanel" | "pivotMode" | "pivotSuppressAutoColumn" | "suppressExpandablePivotGroups" | "functionsReadOnly" | "suppressAggFuncInHeader" | "alwaysAggregateAtRootLevel" | "aggregateOnlyChangedColumns" | "suppressAggFilteredOnly" | "removePivotHeaderRowWhenSingleValueColumn" | "animateRows" | "enableCellChangeFlash" | "allowShowChangeAfterFilter" | "ensureDomOrder" | "enableRtl" | "suppressColumnVirtualisation" | "suppressMaxRenderedRowRestriction" | "suppressRowVirtualisation" | "rowDragManaged" | "suppressRowDrag" | "suppressMoveWhenRowDragging" | "rowDragEntireRow" | "rowDragMultiRow" | "embedFullWidthRows" | "groupMaintainOrder" | "groupSelectsChildren" | "groupIncludeTotalFooter" | "groupSuppressBlankHeader" | "groupSelectsFiltered" | "showOpenedGroup" | "groupRemoveSingleChildren" | "groupRemoveLowestSingleChildren" | "groupHideOpenParents" | "groupAllowUnbalanced" | "suppressMakeColumnVisibleAfterUnGroup" | "treeData" | "rowGroupPanelSuppressSort" | "suppressGroupRowsSticky" | "suppressModelUpdateAfterUpdateTransaction" | "suppressServerSideInfiniteScroll" | "purgeClosedRowNodes" | "serverSideSortAllLevels" | "serverSideOnlyRefreshFilteredGroups" | "serverSideSortOnServer" | "serverSideFilterOnServer" | "alwaysShowHorizontalScroll" | "alwaysShowVerticalScroll" | "debounceVerticalScrollbar" | "suppressHorizontalScroll" | "suppressScrollOnNewData" | "suppressScrollWhenPopupsAreOpen" | "suppressAnimationFrame" | "suppressMiddleClickScrolls" | "suppressPreventDefaultOnMouseWheel" | "rowMultiSelectWithClick" | "suppressRowDeselection" | "suppressRowClickSelection" | "suppressCellFocus" | "suppressHeaderFocus" | "suppressMultiRangeSelection" | "enableCellTextSelection" | "enableRangeSelection" | "enableRangeHandle" | "enableFillHandle" | "suppressClearOnFillReduction" | "accentedSort" | "unSortIcon" | "suppressMultiSort" | "alwaysMultiSort" | "suppressMaintainUnsortedOrder" | "suppressRowHoverHighlight" | "suppressRowTransform" | "columnHoverHighlight" | "deltaSort" | "enableGroupEdit" | "suppressGroupMaintainValueType" | "functionsPassive" | "serverSideEnableClientSideSort" | "suppressServerSideFullWidthLoadingRow" | "sideBar" | "enterMovesDown" | "enterMovesDownAfterEdit" | "excludeHiddenColumnsFromQuickFilter" | "applyQuickFilterBeforePivotOrAgg" | "suppressAdvancedFilterEval" | "chartThemeOverrides" | "enableChartToolPanelsButton" | "suppressParentsInRowNodes" | "suppressAggAtRootLevel" | "groupAggFiltering" | "groupIncludeFooter" | "suppressStickyTotalRow" | "serverSideFilterAllLevels" | "reactiveCustomComponents" | "resetRowDataOnUpdate")[];
    static ALL_PROPERTIES: (keyof GridOptions<any>)[];
    static ALL_PROPERTIES_AND_CALLBACKS: string[];
    static ALL_PROPERTIES_AND_CALLBACKS_SET: Set<string>;
    private static getGridOptionKeys;
    /** Combines component props / attributes with the provided gridOptions returning a new combined gridOptions object */
    static combineAttributesAndGridOptions(gridOptions: GridOptions | undefined, component: any): GridOptions;
    static processOnChange(changes: any, api: GridApi): void;
}
