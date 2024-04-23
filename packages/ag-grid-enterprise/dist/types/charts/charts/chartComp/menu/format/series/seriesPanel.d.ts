import { Component } from "ag-grid-community";
import { FormatPanelOptions } from "../formatPanel";
export declare class SeriesPanel extends Component {
    static TEMPLATE: string;
    private seriesGroup;
    private readonly chartTranslationService;
    private readonly chartController;
    private readonly chartOptionsService;
    private readonly isExpandedOnInit;
    private chartMenuUtils;
    private chartOptions;
    private activePanels;
    private seriesType;
    private readonly widgetFuncs;
    private readonly seriesWidgetMappings;
    constructor({ chartController, chartOptionsService, seriesType, isExpandedOnInit }: FormatPanelOptions);
    private init;
    private refreshWidgets;
    private initSeriesSelect;
    private initTooltips;
    private initLineColor;
    private initStrokeWidth;
    private initLineDash;
    private initLineOpacity;
    private initFillOpacity;
    private initLabels;
    private getSectorLabelPositionRatio;
    private initShadow;
    private initMarkers;
    private initBins;
    private initWhiskers;
    private initCaps;
    private initConnectorLine;
    private initSeriesItemsPanel;
    private initTileSpacingPanel;
    private initGroupType;
    private addWidget;
    private getSeriesSelectOptions;
    private updateSeriesType;
    private getActiveSeriesTypes;
    private translate;
    private destroyActivePanels;
    protected destroy(): void;
}
