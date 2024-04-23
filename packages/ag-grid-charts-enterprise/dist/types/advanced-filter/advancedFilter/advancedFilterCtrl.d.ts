import { BeanStub, IAdvancedFilterCtrl } from "ag-grid-community";
export declare class AdvancedFilterCtrl extends BeanStub implements IAdvancedFilterCtrl {
    private enabled;
    private focusService;
    private ctrlsService;
    private popupService;
    private advancedFilterExpressionService;
    static readonly EVENT_BUILDER_CLOSED = "advancedFilterBuilderClosed";
    private eHeaderComp;
    private eFilterComp;
    private hasAdvancedFilterParent;
    private eBuilderComp;
    private eBuilderDialog;
    private builderDestroySource?;
    constructor(enabled: boolean);
    private postConstruct;
    setupHeaderComp(eCompToInsertBefore: HTMLElement): void;
    focusHeaderComp(): boolean;
    refreshComp(): void;
    refreshBuilderComp(): void;
    getHeaderHeight(): number;
    setInputDisabled(disabled: boolean): void;
    toggleFilterBuilder(source: 'api' | 'ui', force?: boolean): void;
    private dispatchFilterBuilderVisibleChangedEvent;
    private getBuilderDialogSize;
    private onEnabledChanged;
    private updateComps;
    private setAdvancedFilterComp;
    private setHeaderCompEnabled;
    private destroyAdvancedFilterComp;
}
