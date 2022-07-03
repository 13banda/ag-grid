import { __decorate, __metadata, __rest } from "tslib";
import { Component, ContentChildren, Input, QueryList } from "@angular/core";
var AgGridColumn = /** @class */ (function () {
    function AgGridColumn() {
    }
    AgGridColumn_1 = AgGridColumn;
    AgGridColumn.prototype.hasChildColumns = function () {
        if (this.childColumns && this.childColumns.length > 0) {
            // necessary because of https://github.com/angular/angular/issues/10098
            return !(this.childColumns.length === 1 && this.childColumns.first === this);
        }
        return false;
    };
    AgGridColumn.prototype.toColDef = function () {
        var colDef = this.createColDefFromGridColumn(this);
        if (this.hasChildColumns()) {
            colDef["children"] = this.getChildColDefs(this.childColumns);
        }
        return colDef;
    };
    AgGridColumn.prototype.getChildColDefs = function (childColumns) {
        return childColumns
            // necessary because of https://github.com/angular/angular/issues/10098
            .filter(function (column) { return !column.hasChildColumns(); })
            .map(function (column) {
            return column.toColDef();
        });
    };
    AgGridColumn.prototype.createColDefFromGridColumn = function (from) {
        var childColumns = from.childColumns, colDef = __rest(from, ["childColumns"]);
        return colDef;
    };
    var AgGridColumn_1;
    __decorate([
        ContentChildren(AgGridColumn_1),
        __metadata("design:type", QueryList)
    ], AgGridColumn.prototype, "childColumns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filterFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filterParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilterFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerTooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressHeaderKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "columnGroupShow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "toolPanelClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressColumnsToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressFiltersToolPanel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "children", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "groupId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "openByDefault", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "marryChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerGroupComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerGroupComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerGroupComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "colId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "field", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "refData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "keyCreator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "equals", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipField", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "tooltipValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "checkboxSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "icons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressNavigable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressKeyboardEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressPaste", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressFillHandle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "hide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialHide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "lockVisible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "lockPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressMovable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "editable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueSetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "valueParser", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "singleClickEdit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "newValueHandler", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorPopup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellEditorPopupPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "onCellValueChanged", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "onCellClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "onCellDoubleClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "onCellContextMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "getQuickFilterText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "filterValueGetter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "floatingFilter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "wrapHeaderText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "autoHeaderHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerComponent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerComponentFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerComponentParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "menuTabs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "columnsMenuParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressMenu", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerCheckboxSelection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "headerCheckboxSelectionFilteredOnly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "chartDataType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialPinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "lockPinned", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowCellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowCellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowCellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pinnedRowValueFormatter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialPivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pivotIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialPivotIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "pivotComparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "enablePivot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellClassRules", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRenderer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRendererFramework", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRendererParams", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "cellRendererSelector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "autoHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "wrapText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "enableCellChangeFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressCellFlash", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "rowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "rowDragText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "dndSource", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "dndSourceOnRowDrag", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "rowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "rowGroupIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialRowGroupIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "enableRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "enableValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "aggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialAggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "defaultAggFunc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "allowedAggFuncs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "showRowGroup", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "sortable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "sort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialSort", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "sortIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialSortIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "sortingOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "comparator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "unSortIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "sortedAt", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "colSpan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "rowSpan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "width", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "minWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "maxWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "flex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "initialFlex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "resizable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressSizeToFit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AgGridColumn.prototype, "suppressAutoSize", void 0);
    AgGridColumn = AgGridColumn_1 = __decorate([
        Component({
            selector: 'ag-grid-column',
            template: ''
        })
    ], AgGridColumn);
    return AgGridColumn;
}());
export { AgGridColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnLWdyaWQtY29tbXVuaXR5L2FuZ3VsYXItbGVnYWN5LyIsInNvdXJjZXMiOlsibGliL2FnLWdyaWQtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU03RTtJQUFBO0lBMFlBLENBQUM7cUJBMVlZLFlBQVk7SUFHZCxzQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsdUVBQXVFO1lBQ3ZFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ2xCLE1BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxzQ0FBZSxHQUF2QixVQUF3QixZQUFxQztRQUN6RCxPQUFPLFlBQVk7WUFDZix1RUFBdUU7YUFDdEUsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQXpCLENBQXlCLENBQUM7YUFDM0MsR0FBRyxDQUFDLFVBQUMs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LEVBQUU7OzhDQUFnRDtJQUUvQztRQUFSLEtBQUssRUFBRTs7cURBQXVEO0lBRXREO1FBQVIsS0FBSyxFQUFFOzttREFBNkM7SUFFNUM7UUFBUixLQUFLLEVBQUU7OzBEQUE2QztJQUU1QztRQUFSLEtBQUssRUFBRTs7c0RBQTREO0lBRTNEO1FBQVIsS0FBSyxFQUFFOztvREFBNEk7SUFFM0k7UUFBUixLQUFLLEVBQUU7O29EQUF3QztJQUd2QztRQUFSLEtBQUssRUFBRTs7a0RBQXFDO0lBRXBDO1FBQVIsS0FBSyxFQUFFOztpREFBd0U7SUFFdkU7UUFBUixLQUFLLEVBQUU7O2lEQUF3RTtJQUV2RTtRQUFSLEtBQUssRUFBRTs7K0NBQWtDO0lBRWpDO1FBQVIsS0FBSyxFQUFFOztzREFBeUM7SUFFeEM7UUFBUixLQUFLLEVBQUU7O2tEQUFxQztJQUVwQztRQUFSLEtBQUssRUFBRTs7a0RBQXFDO0lBRXBDO1FBQVIsS0FBSyxFQUFFOzs4Q0FBaUM7SUFFaEM7UUFBUixLQUFLLEVBQUU7O3FEQUF3QztJQUV2QztRQUFSLEtBQUssRUFBRTs7bURBQXVDO0lBRXRDO1FBQVIsS0FBSyxFQUFFOzsyREFBK0M7SUFFOUM7UUFBUixLQUFLLEVBQUU7OzBEQUE4QztJQTFWN0MsWUFBWTtRQUp4QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztPQUNXLFlBQVksQ0EwWXhCO0lBQUQsbUJBQUM7Q0FBQSxBQTFZRCxJQTBZQztTQTFZWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbENsYXNzRnVuYywgQ2VsbENsYXNzUnVsZXMsIENlbGxDbGlja2VkRXZlbnQsIENlbGxDb250ZXh0TWVudUV2ZW50LCBDZWxsRG91YmxlQ2xpY2tlZEV2ZW50LCBDZWxsRWRpdG9yU2VsZWN0b3JGdW5jLCBDZWxsUmVuZGVyZXJTZWxlY3RvckZ1bmMsIENlbGxTdHlsZSwgQ2VsbFN0eWxlRnVuYywgQ2hlY2tib3hTZWxlY3Rpb25DYWxsYmFjaywgQ29sRGVmLCBDb2xHcm91cERlZiwgQ29sU3BhblBhcmFtcywgQ29sdW1uc01lbnVQYXJhbXMsIERuZFNvdXJjZUNhbGxiYWNrLCBEbmRTb3VyY2VPblJvd0RyYWdQYXJhbXMsIEVkaXRhYmxlQ2FsbGJhY2ssIEdldFF1aWNrRmlsdGVyVGV4dFBhcmFtcywgSGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25DYWxsYmFjaywgSGVhZGVyQ2xhc3MsIEhlYWRlclZhbHVlR2V0dGVyRnVuYywgSUFnZ0Z1bmMsIElDZWxsRWRpdG9yQ29tcCwgSUNlbGxSZW5kZXJlckNvbXAsIElDZWxsUmVuZGVyZXJGdW5jLCBJSGVhZGVyR3JvdXBDb21wLCBJUm93RHJhZ0l0ZW0sIElUb29sdGlwQ29tcCwgSVRvb2x0aXBQYXJhbXMsIEtleUNyZWF0b3JQYXJhbXMsIE5ld1ZhbHVlUGFyYW1zLCBSb3dEcmFnQ2FsbGJhY2ssIFJvd05vZGUsIFJvd1NwYW5QYXJhbXMsIFN1cHByZXNzSGVhZGVyS2V5Ym9hcmRFdmVudFBhcmFtcywgU3VwcHJlc3NLZXlib2FyZEV2ZW50UGFyYW1zLCBTdXBwcmVzc05hdmlnYWJsZUNhbGxiYWNrLCBTdXBwcmVzc1Bhc3RlQ2FsbGJhY2ssIFRvb2xQYW5lbENsYXNzLCBWYWx1ZUZvcm1hdHRlckZ1bmMsIFZhbHVlR2V0dGVyRnVuYywgVmFsdWVQYXJzZXJGdW5jLCBWYWx1ZVNldHRlckZ1bmMgfSBmcm9tIFwiQGFnLWdyaWQtY29tbXVuaXR5L2NvcmVcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhZy1ncmlkLWNvbHVtbicsXG4gICAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEFnR3JpZENvbHVtbjxURGF0YSA9IGFueT4ge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oQWdHcmlkQ29sdW1uKSBwdWJsaWMgY2hpbGRDb2x1bW5zOiBRdWVyeUxpc3Q8QWdHcmlkQ29sdW1uPjtcblxuICAgIHB1YmxpYyBoYXNDaGlsZENvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkQ29sdW1ucyAmJiB0aGlzLmNoaWxkQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBuZWNlc3NhcnkgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDA5OFxuICAgICAgICAgICAgcmV0dXJuICEodGhpcy5jaGlsZENvbHVtbnMubGVuZ3RoID09PSAxICYmIHRoaXMuY2hpbGRDb2x1bW5zLmZpcnN0ID09PSB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRvQ29sRGVmKCk6IENvbERlZiB7XG4gICAgICAgIGxldCBjb2xEZWY6IENvbERlZiA9IHRoaXMuY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4odGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hpbGRDb2x1bW5zKCkpIHtcbiAgICAgICAgICAgICg8YW55PmNvbERlZilbXCJjaGlsZHJlblwiXSA9IHRoaXMuZ2V0Q2hpbGRDb2xEZWZzKHRoaXMuY2hpbGRDb2x1bW5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sRGVmO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2hpbGRDb2xEZWZzKGNoaWxkQ29sdW1uczogUXVlcnlMaXN0PEFnR3JpZENvbHVtbj4pIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29sdW1uc1xuICAgICAgICAgICAgLy8gbmVjZXNzYXJ5IGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTAwOThcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+ICFjb2x1bW4uaGFzQ2hpbGRDb2x1bW5zKCkpXG4gICAgICAgICAgICAubWFwKChjb2x1bW46IEFnR3JpZENvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4udG9Db2xEZWYoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ29sRGVmRnJvbUdyaWRDb2x1bW4oZnJvbTogQWdHcmlkQ29sdW1uKTogQ29sRGVmIHtcbiAgICAgICAgbGV0IHsgY2hpbGRDb2x1bW5zLCAuLi5jb2xEZWYgfSA9IGZyb207XG4gICAgICAgIHJldHVybiBjb2xEZWY7XG4gICAgfVxuXG4gICAgLy8gaW5wdXRzIC0gcHJldHR5IG11Y2ggbW9zdCBvZiBDb2xEZWYsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiB0ZW1wbGF0ZSwgdGVtcGxhdGVVcmwgYW5kIGludGVybmFsIG9ubHkgcHJvcGVydGllc1xuICAgIC8vIEBTVEFSVEBcbiAgICBASW5wdXQoKSBwdWJsaWMgZmlsdGVyRnJhbWV3b3JrOiBhbnk7XG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlclBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudDogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudFBhcmFtczogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckNvbXBvbmVudEZyYW1ld29yazogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlckZyYW1ld29yazogYW55O1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgICAvKiogVGhlIG5hbWUgdG8gcmVuZGVyIGluIHRoZSBjb2x1bW4gaGVhZGVyLiBJZiBub3Qgc3BlY2lmaWVkIGFuZCBmaWVsZCBpcyBzcGVjaWZpZWQsIHRoZSBmaWVsZCBuYW1lIHdpbGwgYmUgdXNlZCBhcyB0aGUgaGVhZGVyIG5hbWUuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqIEZ1bmN0aW9uIG9yIGV4cHJlc3Npb24uIEdldHMgdGhlIHZhbHVlIGZvciBkaXNwbGF5IGluIHRoZSBoZWFkZXIuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJWYWx1ZUdldHRlcjogc3RyaW5nIHwgSGVhZGVyVmFsdWVHZXR0ZXJGdW5jPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogVG9vbHRpcCBmb3IgdGhlIGNvbHVtbiBoZWFkZXIgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlclRvb2x0aXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKiogQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIGhlYWRlciBjZWxsLiBDYW4gYmUgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGZ1bmN0aW9uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2xhc3M6IEhlYWRlckNsYXNzIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTdXBwcmVzcyB0aGUgZ3JpZCB0YWtpbmcgYWN0aW9uIGZvciB0aGUgcmVsZXZhbnQga2V5Ym9hcmQgZXZlbnQgd2hlbiBhIGhlYWRlciBpcyBmb2N1c2VkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NIZWFkZXJLZXlib2FyZEV2ZW50OiAoKHBhcmFtczogU3VwcHJlc3NIZWFkZXJLZXlib2FyZEV2ZW50UGFyYW1zPFREYXRhPikgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFdoZXRoZXIgdG8gc2hvdyB0aGUgY29sdW1uIHdoZW4gdGhlIGdyb3VwIGlzIG9wZW4gLyBjbG9zZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb2x1bW5Hcm91cFNob3c6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKiogQ1NTIGNsYXNzIHRvIHVzZSBmb3IgdGhlIHRvb2wgcGFuZWwgY2VsbC4gQ2FuIGJlIGEgc3RyaW5nLCBhcnJheSBvZiBzdHJpbmdzLCBvciBmdW5jdGlvbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHRvb2xQYW5lbENsYXNzOiBUb29sUGFuZWxDbGFzczxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgaWYgeW91IGRvIG5vdCB3YW50IHRoaXMgY29sdW1uIG9yIGdyb3VwIHRvIGFwcGVhciBpbiB0aGUgQ29sdW1ucyBUb29sIFBhbmVsLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NvbHVtbnNUb29sUGFuZWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgaWYgeW91IGRvIG5vdCB3YW50IHRoaXMgY29sdW1uIChmaWx0ZXIpIG9yIGdyb3VwIChmaWx0ZXIgZ3JvdXApIHRvIGFwcGVhciBpbiB0aGUgRmlsdGVycyBUb29sIFBhbmVsLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpbHRlcnNUb29sUGFuZWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFByb3ZpZGUgeW91ciBvd24gdG9vbHRpcCBjb21wb25lbnQgZm9yIHRoZSBjb2x1bW4uXG4gICAgICogU2VlIFtUb29sdGlwIENvbXBvbmVudF0oaHR0cHM6Ly93d3cuYWctZ3JpZC5jb20vamF2YXNjcmlwdC1kYXRhLWdyaWQvY29tcG9uZW50LXRvb2x0aXAvKSBmb3IgZnJhbWV3b3JrIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIGRldGFpbHMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50OiBhbnk7XG4gICAgLyoqIEBkZXByZWNhdGVkIEFzIG9mIHYyNywgdXNlIGB0b29sdGlwQ29tcG9uZW50YCBmb3IgZnJhbWV3b3JrIGNvbXBvbmVudHMgdG9vLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XG4gICAgLyoqIFRoZSBwYXJhbXMgdXNlZCB0byBjb25maWd1cmUgYHRvb2x0aXBDb21wb25lbnRgLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcENvbXBvbmVudFBhcmFtczogYW55O1xuICAgIC8qKiBBIGxpc3QgY29udGFpbmluZyBhIG1peCBvZiBjb2x1bW5zIGFuZCBjb2x1bW4gZ3JvdXBzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2hpbGRyZW46IChDb2xEZWY8VERhdGE+IHwgQ29sR3JvdXBEZWY8VERhdGE+KVtdIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgdW5pcXVlIElEIHRvIGdpdmUgdGhlIGNvbHVtbi4gVGhpcyBpcyBvcHRpb25hbC4gSWYgbWlzc2luZywgYSB1bmlxdWUgSUQgd2lsbCBiZSBnZW5lcmF0ZWQuIFRoaXMgSUQgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgY29sdW1uIGdyb3VwIGluIHRoZSBjb2x1bW4gQVBJLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIGlmIHRoaXMgZ3JvdXAgc2hvdWxkIGJlIG9wZW5lZCBieSBkZWZhdWx0LiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvcGVuQnlEZWZhdWx0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGtlZXAgY29sdW1ucyBpbiB0aGlzIGdyb3VwIGJlc2lkZSBlYWNoIG90aGVyIGluIHRoZSBncmlkLiBNb3ZpbmcgdGhlIGNvbHVtbnMgb3V0c2lkZSBvZiB0aGUgZ3JvdXAgKGFuZCBoZW5jZSBicmVha2luZyB0aGUgZ3JvdXApIGlzIG5vdCBhbGxvd2VkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBtYXJyeUNoaWxkcmVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgY3VzdG9tIGhlYWRlciBncm91cCBjb21wb25lbnQgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQgaGVhZGVyLiBJZiBub25lIHNwZWNpZmllZCB0aGUgZGVmYXVsdCBBRyBHcmlkIGlzIHVzZWQuXG4gICAgICogU2VlIFtIZWFkZXIgR3JvdXAgQ29tcG9uZW50XShodHRwczovL3d3dy5hZy1ncmlkLmNvbS9qYXZhc2NyaXB0LWRhdGEtZ3JpZC9jb21wb25lbnQtaGVhZGVyLyNoZWFkZXItZ3JvdXAtY29tcG9uZW50cy8pIGZvciBmcmFtZXdvcmsgc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gZGV0YWlscy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50OiBhbnk7XG4gICAgLyoqIEBkZXByZWNhdGVkIEFzIG9mIHYyNywgdXNlIGBoZWFkZXJHcm91cENvbXBvbmVudGAgZm9yIGZyYW1ld29yayBjb21wb25lbnRzIHRvby5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyR3JvdXBDb21wb25lbnRGcmFtZXdvcms6IGFueTtcbiAgICAvKiogVGhlIHBhcmFtcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgYGhlYWRlckdyb3VwQ29tcG9uZW50YC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckdyb3VwQ29tcG9uZW50UGFyYW1zOiBhbnk7XG4gICAgLyoqIFRoZSB1bmlxdWUgSUQgdG8gZ2l2ZSB0aGUgY29sdW1uLiBUaGlzIGlzIG9wdGlvbmFsLiBJZiBtaXNzaW5nLCB0aGUgSUQgd2lsbCBkZWZhdWx0IHRvIHRoZSBmaWVsZC5cbiAgICAgKiBJZiBib3RoIGZpZWxkIGFuZCBjb2xJZCBhcmUgbWlzc2luZywgYSB1bmlxdWUgSUQgd2lsbCBiZSBnZW5lcmF0ZWQuXG4gICAgICogVGhpcyBJRCBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW4gaW4gdGhlIEFQSSBmb3Igc29ydGluZywgZmlsdGVyaW5nIGV0Yy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNvbElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFRoZSBmaWVsZCBvZiB0aGUgcm93IG9iamVjdCB0byBnZXQgdGhlIGNlbGwncyBkYXRhIGZyb20uXG4gICAgICogRGVlcCByZWZlcmVuY2VzIGludG8gYSByb3cgb2JqZWN0IGlzIHN1cHBvcnRlZCB2aWEgZG90IG5vdGF0aW9uLCBpLmUgYCdhZGRyZXNzLmZpcnN0TGluZSdgLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKiogQSBjb21tYSBzZXBhcmF0ZWQgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgY29udGFpbmluZyBgQ29sdW1uVHlwZWAga2V5cyB3aGljaCBjYW4gYmUgdXNlZCBhcyBhIHRlbXBsYXRlIGZvciBhIGNvbHVtbi5cbiAgICAgKiBUaGlzIGhlbHBzIHRvIHJlZHVjZSBkdXBsaWNhdGlvbiBvZiBwcm9wZXJ0aWVzIHdoZW4geW91IGhhdmUgYSBsb3Qgb2YgY29tbW9uIGNvbHVtbiBwcm9wZXJ0aWVzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdHlwZTogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XG4gICAgLyoqIEZ1bmN0aW9uIG9yIGV4cHJlc3Npb24uIEdldHMgdGhlIHZhbHVlIGZyb20geW91ciBkYXRhIGZvciBkaXNwbGF5LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVHZXR0ZXI6IHN0cmluZyB8IFZhbHVlR2V0dGVyRnVuYzxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIEEgZnVuY3Rpb24gb3IgZXhwcmVzc2lvbiB0byBmb3JtYXQgYSB2YWx1ZSwgc2hvdWxkIHJldHVybiBhIHN0cmluZy4gTm90IHVzZWQgZm9yIENTViBleHBvcnQgb3IgY29weSB0byBjbGlwYm9hcmQsIG9ubHkgZm9yIFVJIGNlbGwgcmVuZGVyaW5nLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVGb3JtYXR0ZXI6IHN0cmluZyB8IFZhbHVlRm9ybWF0dGVyRnVuYzxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFByb3ZpZGVkIGEgcmVmZXJlbmNlIGRhdGEgbWFwIHRvIGJlIHVzZWQgdG8gbWFwIGNvbHVtbiB2YWx1ZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSB2YWx1ZSBmcm9tIHRoZSBtYXAuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZWZEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSB8IHVuZGVmaW5lZDtcbiAgICAvKiogRnVuY3Rpb24gdG8gcmV0dXJuIGEgc3RyaW5nIGtleSBmb3IgYSB2YWx1ZS5cbiAgICAgKiBUaGlzIHN0cmluZyBpcyB1c2VkIGZvciBncm91cGluZywgU2V0IGZpbHRlcmluZywgYW5kIHNlYXJjaGluZyB3aXRoaW4gY2VsbCBlZGl0b3IgZHJvcGRvd25zLlxuICAgICAqIFdoZW4gZmlsdGVyaW5nIGFuZCBzZWFyY2hpbmcgdGhlIHN0cmluZyBpcyBleHBvc2VkIHRvIHRoZSB1c2VyLCBzbyBtYWtlIHN1cmUgdG8gcmV0dXJuIGEgaHVtYW4tcmVhZGFibGUgdmFsdWUuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBrZXlDcmVhdG9yOiAoKHBhcmFtczogS2V5Q3JlYXRvclBhcmFtczxURGF0YT4pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG4gICAgLyoqIEN1c3RvbSBjb21wYXJhdG9yIGZvciB2YWx1ZXMsIHVzZWQgYnkgcmVuZGVyZXIgdG8ga25vdyBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkLiBDZWxscyB3aG8ncyB2YWx1ZXMgaGF2ZSBub3QgY2hhbmdlZCBkb24ndCBnZXQgcmVmcmVzaGVkLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGdyaWQgdXNlcyBgPT09YCBpcyB1c2VkIHdoaWNoIHNob3VsZCB3b3JrIGZvciBtb3N0IHVzZSBjYXNlcy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVxdWFsczogKCh2YWx1ZUE6IGFueSwgdmFsdWVCOiBhbnkpID0+IGJvb2xlYW4pIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBUaGUgZmllbGQgb2YgdGhlIHRvb2x0aXAgdG8gYXBwbHkgdG8gdGhlIGNlbGwuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB0b29sdGlwRmllbGQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgdGhhdCBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgdG8gdXNlIGZvciBhIHRvb2x0aXAsIGB0b29sdGlwRmllbGRgIHRha2VzIHByZWNlZGVuY2UgaWYgc2V0LlxuICAgICAqIElmIHVzaW5nIGEgY3VzdG9tIGB0b29sdGlwQ29tcG9uZW50YCB5b3UgbWF5IHJldHVybiBhbnkgY3VzdG9tIHZhbHVlIHRvIGJlIHBhc3NlZCB0byB5b3VyIHRvb2x0aXAgY29tcG9uZW50LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdG9vbHRpcFZhbHVlR2V0dGVyOiAoKHBhcmFtczogSVRvb2x0aXBQYXJhbXM8VERhdGE+KSA9PiBzdHJpbmcgfCBhbnkpIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBgYm9vbGVhbmAgb3IgYEZ1bmN0aW9uYC4gU2V0IHRvIGB0cnVlYCAob3IgcmV0dXJuIGB0cnVlYCBmcm9tIGZ1bmN0aW9uKSB0byByZW5kZXIgYSBzZWxlY3Rpb24gY2hlY2tib3ggaW4gdGhlIGNvbHVtbi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gfCBDaGVja2JveFNlbGVjdGlvbkNhbGxiYWNrPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogSWNvbnMgdG8gdXNlIGluc2lkZSB0aGUgY29sdW1uIGluc3RlYWQgb2YgdGhlIGdyaWQncyBkZWZhdWx0IGljb25zLiBMZWF2ZSB1bmRlZmluZWQgdG8gdXNlIGRlZmF1bHRzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaWNvbnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb24gfCBzdHJpbmc7IH0gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgaWYgdGhpcyBjb2x1bW4gaXMgbm90IG5hdmlnYWJsZSAoaS5lLiBjYW5ub3QgYmUgdGFiYmVkIGludG8pLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKiBDYW4gYWxzbyBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGhhdmUgZGlmZmVyZW50IHJvd3MgbmF2aWdhYmxlLlxuICAgICAqIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzTmF2aWdhYmxlOiBib29sZWFuIHwgU3VwcHJlc3NOYXZpZ2FibGVDYWxsYmFjazxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBzdXBwcmVzcyBjZXJ0YWluIGtleWJvYXJkIGV2ZW50cyBpbiB0aGUgZ3JpZCBjZWxsLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0tleWJvYXJkRXZlbnQ6ICgocGFyYW1zOiBTdXBwcmVzc0tleWJvYXJkRXZlbnRQYXJhbXM8VERhdGE+KSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogUGFzdGluZyBpcyBvbiBieSBkZWZhdWx0IGFzIGxvbmcgYXMgY2VsbHMgYXJlIGVkaXRhYmxlIChub24tZWRpdGFibGUgY2VsbHMgY2Fubm90IGJlIG1vZGlmaWVkLCBldmVuIHdpdGggYSBwYXN0ZSBvcGVyYXRpb24pLlxuICAgICAqIFNldCB0byBgdHJ1ZWAgdHVybiBwYXN0ZSBvcGVyYXRpb25zIG9mZi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHN1cHByZXNzUGFzdGU6IGJvb2xlYW4gfCBTdXBwcmVzc1Bhc3RlQ2FsbGJhY2s8VERhdGE+IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSB0byBwcmV2ZW50IHRoZSBmaWxsSGFuZGxlIGZyb20gYmVpbmcgcmVuZGVyZWQgaW4gYW55IGNlbGwgdGhhdCBiZWxvbmdzIHRvIHRoaXMgY29sdW1uICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0ZpbGxIYW5kbGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgZm9yIHRoaXMgY29sdW1uIHRvIGJlIGhpZGRlbi4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGlkZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2FtZSBhcyBgaGlkZWAsIGV4Y2VwdCBvbmx5IGFwcGxpZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBjb2x1bW4uIE5vdCBhcHBsaWVkIHdoZW4gdXBkYXRpbmcgY29sdW1uIGRlZmluaXRpb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbEhpZGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gYmxvY2sgbWFraW5nIGNvbHVtbiB2aXNpYmxlIC8gaGlkZGVuIHZpYSB0aGUgVUkgKEFQSSB3aWxsIHN0aWxsIHdvcmspLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogTG9jayBhIGNvbHVtbiB0byBwb3NpdGlvbiB0byBgJ2xlZnQnYCBvcmAncmlnaHQnYCB0byBhbHdheXMgaGF2ZSB0aGlzIGNvbHVtbiBkaXNwbGF5ZWQgaW4gdGhhdCBwb3NpdGlvbi4gdHJ1ZSBpcyB0cmVhdGVkIGFzIGAnbGVmdCdgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrUG9zaXRpb246IGJvb2xlYW4gfCAnbGVmdCcgfCAncmlnaHQnIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIGlmIHlvdSBkbyBub3Qgd2FudCB0aGlzIGNvbHVtbiB0byBiZSBtb3ZhYmxlIHZpYSBkcmFnZ2luZy4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NNb3ZhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIGlmIHRoaXMgY29sdW1uIGlzIGVkaXRhYmxlLCBvdGhlcndpc2UgYGZhbHNlYC4gQ2FuIGFsc28gYmUgYSBmdW5jdGlvbiB0byBoYXZlIGRpZmZlcmVudCByb3dzIGVkaXRhYmxlLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiB8IEVkaXRhYmxlQ2FsbGJhY2s8VERhdGE+IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBGdW5jdGlvbiBvciBleHByZXNzaW9uLiBTZXRzIHRoZSB2YWx1ZSBpbnRvIHlvdXIgZGF0YSBmb3Igc2F2aW5nLiBSZXR1cm4gYHRydWVgIGlmIHRoZSBkYXRhIGNoYW5nZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZVNldHRlcjogc3RyaW5nIHwgVmFsdWVTZXR0ZXJGdW5jPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogRnVuY3Rpb24gb3IgZXhwcmVzc2lvbi4gUGFyc2VzIHRoZSB2YWx1ZSBmb3Igc2F2aW5nLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVQYXJzZXI6IHN0cmluZyB8IFZhbHVlUGFyc2VyRnVuYzxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFByb3ZpZGUgeW91ciBvd24gY2VsbCBlZGl0b3IgY29tcG9uZW50IGZvciB0aGlzIGNvbHVtbidzIGNlbGxzLlxuICAgICAqIFNlZSBbQ2VsbCBFZGl0b3JdKGh0dHBzOi8vd3d3LmFnLWdyaWQuY29tL2phdmFzY3JpcHQtZGF0YS1ncmlkL2NvbXBvbmVudC1jZWxsLWVkaXRvci8pIGZvciBmcmFtZXdvcmsgc3BlY2lmaWMgaW1wbGVtZW50YXRpb24gZGV0YWlsLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvcjogYW55O1xuICAgIC8qKiBAZGVwcmVjYXRlZCBBcyBvZiB2MjcsIHVzZSBgY2VsbEVkaXRvcmAgZm9yIGZyYW1ld29yayBjb21wb25lbnRzIHRvby5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvckZyYW1ld29yazogYW55O1xuICAgIC8qKiBQYXJhbXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBgY2VsbEVkaXRvcmAgY29tcG9uZW50LiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbEVkaXRvclBhcmFtczogYW55O1xuICAgIC8qKiBDYWxsYmFjayB0byBzZWxlY3Qgd2hpY2ggY2VsbCBlZGl0b3IgdG8gYmUgdXNlZCBmb3IgYSBnaXZlbiByb3cgd2l0aGluIHRoZSBzYW1lIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3JTZWxlY3RvcjogQ2VsbEVkaXRvclNlbGVjdG9yRnVuYzxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gaGF2ZSBjZWxscyB1bmRlciB0aGlzIGNvbHVtbiBlbnRlciBlZGl0IG1vZGUgYWZ0ZXIgc2luZ2xlIGNsaWNrLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaW5nbGVDbGlja0VkaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBgdmFsdWVTZXR0ZXJgIGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbmV3VmFsdWVIYW5kbGVyOiAoKHBhcmFtczogTmV3VmFsdWVQYXJhbXM8VERhdGE+KSA9PiBib29sZWFuKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCwgdG8gaGF2ZSB0aGUgY2VsbCBlZGl0b3IgYXBwZWFyIGluIGEgcG9wdXAuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsRWRpdG9yUG9wdXA6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0aGUgcG9zaXRpb24gZm9yIHRoZSBwb3B1cCBjZWxsIGVkaXRvci4gUG9zc2libGUgdmFsdWVzIGFyZVxuICAgICAqICAgLSBgb3ZlcmAgUG9wdXAgd2lsbCBiZSBwb3NpdGlvbmVkIG92ZXIgdGhlIGNlbGxcbiAgICAgKiAgIC0gYHVuZGVyYCBQb3B1cCB3aWxsIGJlIHBvc2l0aW9uZWQgYmVsb3cgdGhlIGNlbGwgbGVhdmluZyB0aGUgY2VsbCB2YWx1ZSB2aXNpYmxlLlxuICAgICAqIFxuICAgICAqIERlZmF1bHQ6IGBvdmVyYC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxFZGl0b3JQb3B1cFBvc2l0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxiYWNrIGZvciBhZnRlciB0aGUgdmFsdWUgb2YgYSBjZWxsIGhhcyBjaGFuZ2VkLCBlaXRoZXIgZHVlIHRvIGVkaXRpbmcgb3IgdGhlIGFwcGxpY2F0aW9uIGNhbGxpbmcgYGFwaS5zZXRWYWx1ZSgpYC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbFZhbHVlQ2hhbmdlZDogKChldmVudDogTmV3VmFsdWVQYXJhbXM8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gYSBjZWxsIGlzIGNsaWNrZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkNlbGxDbGlja2VkOiAoKGV2ZW50OiBDZWxsQ2xpY2tlZEV2ZW50PFREYXRhPikgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxiYWNrIGNhbGxlZCB3aGVuIGEgY2VsbCBpcyBkb3VibGUgY2xpY2tlZC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG9uQ2VsbERvdWJsZUNsaWNrZWQ6ICgoZXZlbnQ6IENlbGxEb3VibGVDbGlja2VkRXZlbnQ8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gYSBjZWxsIGlzIHJpZ2h0IGNsaWNrZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBvbkNlbGxDb250ZXh0TWVudTogKChldmVudDogQ2VsbENvbnRleHRNZW51RXZlbnQ8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogQSBmdW5jdGlvbiB0byB0ZWxsIHRoZSBncmlkIHdoYXQgcXVpY2sgZmlsdGVyIHRleHQgdG8gdXNlIGZvciB0aGlzIGNvbHVtbiBpZiB5b3UgZG9uJ3Qgd2FudCB0byB1c2UgdGhlIGRlZmF1bHQgKHdoaWNoIGlzIGNhbGxpbmcgYHRvU3RyaW5nYCBvbiB0aGUgdmFsdWUpLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZ2V0UXVpY2tGaWx0ZXJUZXh0OiAoKHBhcmFtczogR2V0UXVpY2tGaWx0ZXJUZXh0UGFyYW1zPFREYXRhPikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogRnVuY3Rpb24gb3IgZXhwcmVzc2lvbi4gR2V0cyB0aGUgdmFsdWUgZm9yIGZpbHRlcmluZyBwdXJwb3Nlcy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZpbHRlclZhbHVlR2V0dGVyOiBzdHJpbmcgfCBWYWx1ZUdldHRlckZ1bmM8VERhdGE+IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBXaGV0aGVyIHRvIGRpc3BsYXkgYSBmbG9hdGluZyBmaWx0ZXIgZm9yIHRoaXMgY29sdW1uLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBmbG9hdGluZ0ZpbHRlcjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgZW5hYmxlZCB0aGVuIGNvbHVtbiBoZWFkZXIgbmFtZXMgdGhhdCBhcmUgdG9vIGxvbmcgZm9yIHRoZSBjb2x1bW4gd2lkdGggd2lsbCB3cmFwIG9udG8gdGhlIG5leHQgbGluZS4gRGVmYXVsdCBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3cmFwSGVhZGVyVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgZW5hYmxlZCB0aGVuIHRoZSBjb2x1bW4gaGVhZGVyIHJvdyB3aWxsIGF1dG9tYXRpY2FsbHkgYWRqdXN0IGhlaWdodCB0byBhY29tbW9kYXRlIHRoZSBzaXplIG9mIHRoZSBoZWFkZXIgY2VsbC5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgd2hlbiB1c2luZyB5b3VyIG93biBgaGVhZGVyQ29tcG9uZW50YCBvciBsb25nIGhlYWRlciBuYW1lcyBpbiBjb25qdW5jdGlvbiB3aXRoIGB3cmFwSGVhZGVyVGV4dGAuXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXV0b0hlYWRlckhlaWdodDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIGN1c3RvbSBoZWFkZXIgY29tcG9uZW50IHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50IGhlYWRlci4gSWYgbm9uZSBzcGVjaWZpZWQgdGhlIGRlZmF1bHQgQUcgR3JpZCBoZWFkZXIgY29tcG9uZW50IGlzIHVzZWQuXG4gICAgICogU2VlIFtIZWFkZXIgQ29tcG9uZW50XShodHRwczovL3d3dy5hZy1ncmlkLmNvbS9qYXZhc2NyaXB0LWRhdGEtZ3JpZC9jb21wb25lbnQtaGVhZGVyLykgZm9yIGZyYW1ld29yayBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb21wb25lbnQ6IGFueTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgQXMgb2YgdjI3LCB1c2UgYGhlYWRlckNvbXBvbmVudGAgZm9yIGZyYW1ld29yayBjb21wb25lbnRzIHRvby5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29tcG9uZW50RnJhbWV3b3JrOiBhbnk7XG4gICAgLyoqIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgYGhlYWRlckNvbXBvbmVudGAuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb21wb25lbnRQYXJhbXM6IGFueTtcbiAgICAvKiogU2V0IHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgemVybywgb25lIG9yIG1hbnkgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zOiBgJ2ZpbHRlck1lbnVUYWInIHwgJ2dlbmVyYWxNZW51VGFiJyB8ICdjb2x1bW5zTWVudVRhYidgLlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIG1lbnUgdGFicyBhcmUgcHJlc2VudCBhbmQgaW4gd2hpY2ggb3JkZXIgdGhlIHRhYnMgYXJlIHNob3duLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbWVudVRhYnM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBQYXJhbXMgdXNlZCB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBhbmQgYXBwZWFyYW5jZSBvZiB0aGUgQ29sdW1ucyBNZW51IHRhYi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNvbHVtbnNNZW51UGFyYW1zOiBDb2x1bW5zTWVudVBhcmFtcyB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCBpZiBubyBtZW51IHNob3VsZCBiZSBzaG93biBmb3IgdGhpcyBjb2x1bW4gaGVhZGVyLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc01lbnU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCBvciB0aGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAsIGEgJ3NlbGVjdCBhbGwnIGNoZWNrYm94IHdpbGwgYmUgcHV0IGludG8gdGhlIGhlYWRlci4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuIHwgSGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25DYWxsYmFjazxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIElmIGB0cnVlYCwgdGhlIGhlYWRlciBjaGVja2JveCBzZWxlY3Rpb24gd2lsbCBvbmx5IHNlbGVjdCBmaWx0ZXJlZCBpdGVtcy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNoZWNrYm94U2VsZWN0aW9uRmlsdGVyZWRPbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBEZWZpbmVzIHRoZSBjaGFydCBkYXRhIHR5cGUgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgYSBjb2x1bW4uICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjaGFydERhdGFUeXBlOiAnY2F0ZWdvcnknIHwgJ3NlcmllcycgfCAndGltZScgfCAnZXhjbHVkZWQnIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBQaW4gYSBjb2x1bW4gdG8gb25lIHNpZGU6IGByaWdodGAgb3IgYGxlZnRgLiBBIHZhbHVlIG9mIGB0cnVlYCBpcyBjb252ZXJ0ZWQgdG8gYCdsZWZ0J2AuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWQ6IGJvb2xlYW4gfCAnbGVmdCcgfCAncmlnaHQnIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2FtZSBhcyBgcGlubmVkYCwgZXhjZXB0IG9ubHkgYXBwbGllZCB3aGVuIGNyZWF0aW5nIGEgbmV3IGNvbHVtbi4gTm90IGFwcGxpZWQgd2hlbiB1cGRhdGluZyBjb2x1bW4gZGVmaW5pdGlvbnMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsUGlubmVkOiBib29sZWFuIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIHRydWUgdG8gYmxvY2sgdGhlIHVzZXIgcGlubmluZyB0aGUgY29sdW1uLCB0aGUgY29sdW1uIGNhbiBvbmx5IGJlIHBpbm5lZCB2aWEgZGVmaW5pdGlvbnMgb3IgQVBJLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrUGlubmVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgY2VsbFJlbmRlcmVyU2VsZWN0b3IgaWYgeW91IHdhbnQgYSBkaWZmZXJlbnQgQ2VsbCBSZW5kZXJlciBmb3IgcGlubmVkIHJvd3MuIENoZWNrIHBhcmFtcy5ub2RlLnJvd1Bpbm5lZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyOiB7IG5ldygpOiBJQ2VsbFJlbmRlcmVyQ29tcDsgfSB8IElDZWxsUmVuZGVyZXJGdW5jIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgY2VsbFJlbmRlcmVyU2VsZWN0b3IgaWYgeW91IHdhbnQgYSBkaWZmZXJlbnQgQ2VsbCBSZW5kZXJlciBmb3IgcGlubmVkIHJvd3MuIENoZWNrIHBhcmFtcy5ub2RlLnJvd1Bpbm5lZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93Q2VsbFJlbmRlcmVyRnJhbWV3b3JrOiBhbnk7XG4gICAgLyoqIEBkZXByZWNhdGVkIFVzZSBjZWxsUmVuZGVyZXJTZWxlY3RvciBpZiB5b3Ugd2FudCBhIGRpZmZlcmVudCBDZWxsIFJlbmRlcmVyIGZvciBwaW5uZWQgcm93cy4gQ2hlY2sgcGFyYW1zLm5vZGUucm93UGlubmVkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwaW5uZWRSb3dDZWxsUmVuZGVyZXJQYXJhbXM6IGFueTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIHZhbHVlRm9ybWF0dGVyIGZvciBwaW5uZWQgcm93cywgYW5kIGNoZWNrIHBhcmFtcy5ub2RlLnJvd1Bpbm5lZC5cbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGlubmVkUm93VmFsdWVGb3JtYXR0ZXI6IHN0cmluZyB8IFZhbHVlRm9ybWF0dGVyRnVuYzxURGF0YT4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byB0cnVlIHRvIHBpdm90IGJ5IHRoaXMgY29sdW1uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3Q6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNhbWUgYXMgYHBpdm90YCwgZXhjZXB0IG9ubHkgYXBwbGllZCB3aGVuIGNyZWF0aW5nIGEgbmV3IGNvbHVtbi4gTm90IGFwcGxpZWQgd2hlbiB1cGRhdGluZyBjb2x1bW4gZGVmaW5pdGlvbnMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsUGl2b3Q6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0aGlzIGluIGNvbHVtbnMgeW91IHdhbnQgdG8gcGl2b3QgYnkuXG4gICAgICogSWYgb25seSBwaXZvdGluZyBieSBvbmUgY29sdW1uLCBzZXQgdGhpcyB0byBhbnkgbnVtYmVyIChlLmcuIGAwYCkuXG4gICAgICogSWYgcGl2b3RpbmcgYnkgbXVsdGlwbGUgY29sdW1ucywgc2V0IHRoaXMgdG8gd2hlcmUgeW91IHdhbnQgdGhpcyBjb2x1bW4gdG8gYmUgaW4gdGhlIG9yZGVyIG9mIHBpdm90cyAoZS5nLiBgMGAgZm9yIGZpcnN0LCBgMWAgZm9yIHNlY29uZCwgYW5kIHNvIG9uKS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHBpdm90SW5kZXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNhbWUgYXMgYHBpdm90SW5kZXhgLCBleGNlcHQgb25seSBhcHBsaWVkIHdoZW4gY3JlYXRpbmcgYSBuZXcgY29sdW1uLiBOb3QgYXBwbGllZCB3aGVuIHVwZGF0aW5nIGNvbHVtbiBkZWZpbml0aW9ucy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxQaXZvdEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqIENvbXBhcmF0b3IgdG8gdXNlIHdoZW4gb3JkZXJpbmcgdGhlIHBpdm90IGNvbHVtbnMsIHdoZW4gdGhpcyBjb2x1bW4gaXMgdXNlZCB0byBwaXZvdCBvbi5cbiAgICAgKiBUaGUgdmFsdWVzIHdpbGwgYWx3YXlzIGJlIHN0cmluZ3MsIGFzIHRoZSBwaXZvdCBzZXJ2aWNlIHVzZXMgc3RyaW5ncyBhcyBrZXlzIGZvciB0aGUgcGl2b3QgZ3JvdXBzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGl2b3RDb21wYXJhdG9yOiAoKHZhbHVlQTogc3RyaW5nLCB2YWx1ZUI6IHN0cmluZykgPT4gbnVtYmVyKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCBpZiB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHBpdm90IGJ5IHRoaXMgY29sdW1uIHZpYSB0aGUgR1VJLiBUaGlzIHdpbGwgbm90IGJsb2NrIHRoZSBBUEkgb3IgcHJvcGVydGllcyBiZWluZyB1c2VkIHRvIGFjaGlldmUgcGl2b3QuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGVuYWJsZVBpdm90OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBBbiBvYmplY3Qgb2YgY3NzIHZhbHVlcyAvIG9yIGZ1bmN0aW9uIHJldHVybmluZyBhbiBvYmplY3Qgb2YgY3NzIHZhbHVlcyBmb3IgYSBwYXJ0aWN1bGFyIGNlbGwuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsU3R5bGU6IENlbGxTdHlsZSB8IENlbGxTdHlsZUZ1bmM8VERhdGE+IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBDbGFzcyB0byB1c2UgZm9yIHRoZSBjZWxsLiBDYW4gYmUgc3RyaW5nLCBhcnJheSBvZiBzdHJpbmdzLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gfCBDZWxsQ2xhc3NGdW5jPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogUnVsZXMgd2hpY2ggY2FuIGJlIGFwcGxpZWQgdG8gaW5jbHVkZSBjZXJ0YWluIENTUyBjbGFzc2VzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbENsYXNzUnVsZXM6IENlbGxDbGFzc1J1bGVzPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogUHJvdmlkZSB5b3VyIG93biBjZWxsIFJlbmRlcmVyIGNvbXBvbmVudCBmb3IgdGhpcyBjb2x1bW4ncyBjZWxscy5cbiAgICAgKiBTZWUgW0NlbGwgUmVuZGVyZXJdKGh0dHBzOi8vd3d3LmFnLWdyaWQuY29tL2phdmFzY3JpcHQtZGF0YS1ncmlkL2NvbXBvbmVudC1jZWxsLXJlbmRlcmVyLykgZm9yIGZyYW1ld29yayBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY2VsbFJlbmRlcmVyOiBhbnk7XG4gICAgLyoqIEBkZXByZWNhdGVkIEFzIG9mIHYyNywgdXNlIGBjZWxsUmVuZGVyZXJgIGZvciBmcmFtZXdvcmsgY29tcG9uZW50cyB0b28uXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlckZyYW1ld29yazogYW55O1xuICAgIC8qKiBQYXJhbXMgdG8gYmUgcGFzc2VkIHRvIHRoZSBgY2VsbFJlbmRlcmVyYCBjb21wb25lbnQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjZWxsUmVuZGVyZXJQYXJhbXM6IGFueTtcbiAgICAvKiogQ2FsbGJhY2sgdG8gc2VsZWN0IHdoaWNoIGNlbGwgcmVuZGVyZXIgdG8gYmUgdXNlZCBmb3IgYSBnaXZlbiByb3cgd2l0aGluIHRoZSBzYW1lIGNvbHVtbi4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNlbGxSZW5kZXJlclNlbGVjdG9yOiBDZWxsUmVuZGVyZXJTZWxlY3RvckZ1bmM8VERhdGE+IHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGhhdmUgdGhlIGdyaWQgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2YgYSByb3cgYmFzZWQgb24gY29udGVudHMgb2YgdGhpcyBjb2x1bW4uIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGF1dG9IZWlnaHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgdG8gaGF2ZSB0aGUgdGV4dCB3cmFwIGluc2lkZSB0aGUgY2VsbCAtIHR5cGljYWxseSB1c2VkIHdpdGggYGF1dG9IZWlnaHRgLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3cmFwVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBmbGFzaCBhIGNlbGwgd2hlbiBpdCdzIHJlZnJlc2hlZC4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlQ2VsbENoYW5nZUZsYXNoOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIHByZXZlbnQgdGhpcyBjb2x1bW4gZnJvbSBmbGFzaGluZyBvbiBjaGFuZ2VzLiBPbmx5IGFwcGxpY2FibGUgaWYgY2VsbCBmbGFzaGluZyBpcyB0dXJuZWQgb24gZm9yIHRoZSBncmlkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc0NlbGxGbGFzaDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogYGJvb2xlYW5gIG9yIGBGdW5jdGlvbmAuIFNldCB0byBgdHJ1ZWAgKG9yIHJldHVybiBgdHJ1ZWAgZnJvbSBmdW5jdGlvbikgdG8gYWxsb3cgcm93IGRyYWdnaW5nLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnOiBib29sZWFuIHwgUm93RHJhZ0NhbGxiYWNrPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogQSBjYWxsYmFjayB0aGF0IHNob3VsZCByZXR1cm4gYSBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGJ5IHRoZSBgcm93RHJhZ0NvbXBgIHdoaWxlIGRyYWdnaW5nIGEgcm93LlxuICAgICAqIElmIHRoaXMgY2FsbGJhY2sgaXMgbm90IHNldCwgdGhlIGN1cnJlbnQgY2VsbCB2YWx1ZSB3aWxsIGJlIHVzZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByb3dEcmFnVGV4dDogKChwYXJhbXM6IElSb3dEcmFnSXRlbSwgZHJhZ0l0ZW1Db3VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBgYm9vbGVhbmAgb3IgYEZ1bmN0aW9uYC4gU2V0IHRvIGB0cnVlYCAob3IgcmV0dXJuIGB0cnVlYCBmcm9tIGZ1bmN0aW9uKSB0byBhbGxvdyBkcmFnZ2luZyBmb3IgbmF0aXZlIGRyYWcgYW5kIGRyb3AuIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGRuZFNvdXJjZTogYm9vbGVhbiB8IERuZFNvdXJjZUNhbGxiYWNrPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogRnVuY3Rpb24gdG8gYWxsb3cgY3VzdG9tIGRyYWcgZnVuY3Rpb25hbGl0eSBmb3IgbmF0aXZlIGRyYWcgYW5kIGRyb3AuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkbmRTb3VyY2VPblJvd0RyYWc6ICgocGFyYW1zOiBEbmRTb3VyY2VPblJvd0RyYWdQYXJhbXM8VERhdGE+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byByb3cgZ3JvdXAgYnkgdGhpcyBjb2x1bW4uIERlZmF1bHQ6IGBmYWxzZWAgICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTYW1lIGFzIGByb3dHcm91cGAsIGV4Y2VwdCBvbmx5IGFwcGxpZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBjb2x1bW4uIE5vdCBhcHBsaWVkIHdoZW4gdXBkYXRpbmcgY29sdW1uIGRlZmluaXRpb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFJvd0dyb3VwOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdGhpcyBpbiBjb2x1bW5zIHlvdSB3YW50IHRvIGdyb3VwIGJ5LlxuICAgICAqIElmIG9ubHkgZ3JvdXBpbmcgYnkgb25lIGNvbHVtbiwgc2V0IHRoaXMgdG8gYW55IG51bWJlciAoZS5nLiBgMGApLlxuICAgICAqIElmIGdyb3VwaW5nIGJ5IG11bHRpcGxlIGNvbHVtbnMsIHNldCB0aGlzIHRvIHdoZXJlIHlvdSB3YW50IHRoaXMgY29sdW1uIHRvIGJlIGluIHRoZSBncm91cCAoZS5nLiBgMGAgZm9yIGZpcnN0LCBgMWAgZm9yIHNlY29uZCwgYW5kIHNvIG9uKS4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHJvd0dyb3VwSW5kZXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNhbWUgYXMgYHJvd0dyb3VwSW5kZXhgLCBleGNlcHQgb25seSBhcHBsaWVkIHdoZW4gY3JlYXRpbmcgYSBuZXcgY29sdW1uLiBOb3QgYXBwbGllZCB3aGVuIHVwZGF0aW5nIGNvbHVtbiBkZWZpbml0aW9ucy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGluaXRpYWxSb3dHcm91cEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgaWYgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByb3cgZ3JvdXAgYnkgdGhpcyBjb2x1bW4gdmlhIHRoZSBHVUkuXG4gICAgICogVGhpcyB3aWxsIG5vdCBibG9jayB0aGUgQVBJIG9yIHByb3BlcnRpZXMgYmVpbmcgdXNlZCB0byBhY2hpZXZlIHJvdyBncm91cGluZy5cbiAgICAgKiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVSb3dHcm91cDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCBpZiB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIGFnZ3JlZ2F0ZSBieSB0aGlzIGNvbHVtbiB2aWEgdGhlIEdVSS5cbiAgICAgKiBUaGlzIHdpbGwgbm90IGJsb2NrIHRoZSBBUEkgb3IgcHJvcGVydGllcyBiZWluZyB1c2VkIHRvIGFjaGlldmUgYWdncmVnYXRpb24uXG4gICAgICogRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlVmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIE5hbWUgb2YgZnVuY3Rpb24gdG8gdXNlIGZvciBhZ2dyZWdhdGlvbi4gWW91IGNhbiBhbHNvIHByb3ZpZGUgeW91ciBvd24gYWdnIGZ1bmN0aW9uLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYWdnRnVuYzogc3RyaW5nIHwgSUFnZ0Z1bmM8VERhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2FtZSBhcyBgYWdnRnVuY2AsIGV4Y2VwdCBvbmx5IGFwcGxpZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBjb2x1bW4uIE5vdCBhcHBsaWVkIHdoZW4gdXBkYXRpbmcgY29sdW1uIGRlZmluaXRpb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbEFnZ0Z1bmM6IHN0cmluZyB8IElBZ2dGdW5jPFREYXRhPiB8IHVuZGVmaW5lZDtcbiAgICAvKiogVGhlIG5hbWUgb2YgdGhlIGFnZ3JlZ2F0aW9uIGZ1bmN0aW9uIHRvIHVzZSBmb3IgdGhpcyBjb2x1bW4gd2hlbiBpdCBpcyBlbmFibGVkIHZpYSB0aGUgR1VJLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGltbWVkaWF0ZWx5IGFwcGx5IHRoZSBhZ2dyZWdhdGlvbiBmdW5jdGlvbiBsaWtlIGBhZ2dGdW5jYFxuICAgICAqIERlZmF1bHQ6IGBzdW1gICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0QWdnRnVuYzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBBZ2dyZWdhdGlvbiBmdW5jdGlvbnMgYWxsb3dlZCBvbiB0aGlzIGNvbHVtbiBlLmcuIGBbJ3N1bScsICdhdmcnXWAuXG4gICAgICogSWYgbWlzc2luZywgYWxsIGluc3RhbGxlZCBmdW5jdGlvbnMgYXJlIGFsbG93ZWQuXG4gICAgICogVGhpcyB3aWxsIG9ubHkgcmVzdHJpY3Qgd2hhdCB0aGUgR1VJIGFsbG93cyBhIHVzZXIgdG8gc2VsZWN0LCBpdCBkb2VzIG5vdCBpbXBhY3Qgd2hlbiB5b3Ugc2V0IGEgZnVuY3Rpb24gdmlhIHRoZSBBUEkuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBhbGxvd2VkQWdnRnVuY3M6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gdHJ1ZSB0byBoYXZlIHRoZSBncmlkIHBsYWNlIHRoZSB2YWx1ZXMgZm9yIHRoZSBncm91cCBpbnRvIHRoZSBjZWxsLCBvciBwdXQgdGhlIG5hbWUgb2YgYSBncm91cGVkIGNvbHVtbiB0byBqdXN0IHNob3cgdGhhdCBncm91cC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNob3dSb3dHcm91cDogc3RyaW5nIHwgYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCB0byBhbGxvdyBzb3J0aW5nIG9uIHRoaXMgY29sdW1uLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0YWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgc29ydGluZyBieSBkZWZhdWx0LCBzZXQgaXQgaGVyZS4gU2V0IHRvIGBhc2NgIG9yIGBkZXNjYC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHNvcnQ6ICdhc2MnIHwgJ2Rlc2MnIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2FtZSBhcyBgc29ydGAsIGV4Y2VwdCBvbmx5IGFwcGxpZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBjb2x1bW4uIE5vdCBhcHBsaWVkIHdoZW4gdXBkYXRpbmcgY29sdW1uIGRlZmluaXRpb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFNvcnQ6ICdhc2MnIHwgJ2Rlc2MnIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKiogSWYgc29ydGluZyBtb3JlIHRoYW4gb25lIGNvbHVtbiBieSBkZWZhdWx0LCBzcGVjaWZpZXMgb3JkZXIgaW4gd2hpY2ggdGhlIHNvcnRpbmcgc2hvdWxkIGJlIGFwcGxpZWQuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3J0SW5kZXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNhbWUgYXMgYHNvcnRJbmRleGAsIGV4Y2VwdCBvbmx5IGFwcGxpZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBjb2x1bW4uIE5vdCBhcHBsaWVkIHdoZW4gdXBkYXRpbmcgY29sdW1uIGRlZmluaXRpb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFNvcnRJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBBcnJheSBkZWZpbmluZyB0aGUgb3JkZXIgaW4gd2hpY2ggc29ydGluZyBvY2N1cnMgKGlmIHNvcnRpbmcgaXMgZW5hYmxlZCkuIEFuIGFycmF5IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmcgaW4gYW55IG9yZGVyIGBbJ2FzYycsJ2Rlc2MnLG51bGxdYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydGluZ09yZGVyOiAoJ2FzYycgfCAnZGVzYycgfCBudWxsKVtdIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBDb21wYXJhdG9yIGZ1bmN0aW9uIGZvciBjdXN0b20gc29ydGluZy4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGNvbXBhcmF0b3I6ICgodmFsdWVBOiBhbnksIHZhbHVlQjogYW55LCBub2RlQTogUm93Tm9kZTxURGF0YT4sIG5vZGVCOiBSb3dOb2RlPFREYXRhPiwgaXNEZXNjZW5kaW5nOiBib29sZWFuKSA9PiBudW1iZXIpIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIGlmIHlvdSB3YW50IHRoZSB1bnNvcnRlZCBpY29uIHRvIGJlIHNob3duIHdoZW4gbm8gc29ydCBpcyBhcHBsaWVkIHRvIHRoaXMgY29sdW1uLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB1blNvcnRJY29uOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBAZGVwcmVjYXRlZCBzaW5jZSB2MjQgLSB1c2Ugc29ydEluZGV4IGluc3RlYWRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc29ydGVkQXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAvKiogQnkgZGVmYXVsdCwgZWFjaCBjZWxsIHdpbGwgdGFrZSB1cCB0aGUgd2lkdGggb2Ygb25lIGNvbHVtbi4gWW91IGNhbiBjaGFuZ2UgdGhpcyBiZWhhdmlvdXIgdG8gYWxsb3cgY2VsbHMgdG8gc3BhbiBtdWx0aXBsZSBjb2x1bW5zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgY29sU3BhbjogKChwYXJhbXM6IENvbFNwYW5QYXJhbXM8VERhdGE+KSA9PiBudW1iZXIpIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBCeSBkZWZhdWx0LCBlYWNoIGNlbGwgd2lsbCB0YWtlIHVwIHRoZSBoZWlnaHQgb2Ygb25lIHJvdy4gWW91IGNhbiBjaGFuZ2UgdGhpcyBiZWhhdmlvdXIgdG8gYWxsb3cgY2VsbHMgdG8gc3BhbiBtdWx0aXBsZSByb3dzLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcm93U3BhbjogKChwYXJhbXM6IFJvd1NwYW5QYXJhbXM8VERhdGE+KSA9PiBudW1iZXIpIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBJbml0aWFsIHdpZHRoIGluIHBpeGVscyBmb3IgdGhlIGNlbGwuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTYW1lIGFzIGB3aWR0aGAsIGV4Y2VwdCBvbmx5IGFwcGxpZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBjb2x1bW4uIE5vdCBhcHBsaWVkIHdoZW4gdXBkYXRpbmcgY29sdW1uIGRlZmluaXRpb25zLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgaW5pdGlhbFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqIE1pbmltdW0gd2lkdGggaW4gcGl4ZWxzIGZvciB0aGUgY2VsbC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1pbldpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqIE1heGltdW0gd2lkdGggaW4gcGl4ZWxzIGZvciB0aGUgY2VsbC4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG1heFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqIFVzZWQgaW5zdGVhZCBvZiBgd2lkdGhgIHdoZW4gdGhlIGdvYWwgaXMgdG8gZmlsbCB0aGUgcmVtYWluaW5nIGVtcHR5IHNwYWNlIG9mIHRoZSBncmlkLiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZmxleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTYW1lIGFzIGBmbGV4YCwgZXhjZXB0IG9ubHkgYXBwbGllZCB3aGVuIGNyZWF0aW5nIGEgbmV3IGNvbHVtbi4gTm90IGFwcGxpZWQgd2hlbiB1cGRhdGluZyBjb2x1bW4gZGVmaW5pdGlvbnMuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsRmxleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTZXQgdG8gYHRydWVgIHRvIGFsbG93IHRoaXMgY29sdW1uIHNob3VsZCBiZSByZXNpemVkLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNldCB0byBgdHJ1ZWAgaWYgeW91IHdhbnQgdGhpcyBjb2x1bW4ncyB3aWR0aCB0byBiZSBmaXhlZCBkdXJpbmcgJ3NpemUgdG8gZml0JyBvcGVyYXRpb25zLiBEZWZhdWx0OiBgZmFsc2VgICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzdXBwcmVzc1NpemVUb0ZpdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKiogU2V0IHRvIGB0cnVlYCBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBjb2x1bW4gdG8gYmUgYXV0by1yZXNpemFibGUgYnkgZG91YmxlIGNsaWNraW5nIGl0J3MgZWRnZS4gRGVmYXVsdDogYGZhbHNlYCAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc3VwcHJlc3NBdXRvU2l6ZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXG4gICAgLy8gRW5hYmxlIHR5cGUgY29lcmNpb24gZm9yIGJvb2xlYW4gSW5wdXRzIHRvIHN1cHBvcnQgdXNlIGxpa2UgJ2VuYWJsZUNoYXJ0cycgaW5zdGVhZCBvZiBmb3JjaW5nICdbZW5hYmxlQ2hhcnRzXT1cInRydWVcIicgXG4gICAgLy8gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL3RlbXBsYXRlLXR5cGVjaGVjayNpbnB1dC1zZXR0ZXItY29lcmNpb24gXG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzQ2VsbEZsYXNoOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc0NvbHVtbnNUb29sUGFuZWw6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzRmlsdGVyc1Rvb2xQYW5lbDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3BlbkJ5RGVmYXVsdDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWFycnlDaGlsZHJlbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaW5pdGlhbEhpZGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jvd0dyb3VwOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbml0aWFsUm93R3JvdXA6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Bpdm90OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbml0aWFsUGl2b3Q6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NoZWNrYm94U2VsZWN0aW9uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWFkZXJDaGVja2JveFNlbGVjdGlvbjogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb25GaWx0ZXJlZE9ubHk6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzTWVudTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NNb3ZhYmxlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2NrUG9zaXRpb246IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvY2tWaXNpYmxlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2NrUGlubmVkOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV91blNvcnRJY29uOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdXBwcmVzc1NpemVUb0ZpdDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NBdXRvU2l6ZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlUm93R3JvdXA6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZVBpdm90OiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVWYWx1ZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZWRpdGFibGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzUGFzdGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N1cHByZXNzTmF2aWdhYmxlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVDZWxsQ2hhbmdlRmxhc2g6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jvd0RyYWc6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RuZFNvdXJjZTogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0hlaWdodDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd3JhcFRleHQ6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NvcnRhYmxlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNpemFibGU6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpbmdsZUNsaWNrRWRpdDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmxvYXRpbmdGaWx0ZXI6IGJvb2xlYW4gfCBudWxsIHwgJyc7XG4gICAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NlbGxFZGl0b3JQb3B1cDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3VwcHJlc3NGaWxsSGFuZGxlOiBib29sZWFuIHwgbnVsbCB8ICcnO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93cmFwSGVhZGVyVGV4dDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0hlYWRlckhlaWdodDogYm9vbGVhbiB8IG51bGwgfCAnJztcbiAgICAvLyBARU5EQFxuXG59XG4iXX0=