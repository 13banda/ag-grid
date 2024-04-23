import { BeanStub, ChartModel, ChartType, SeriesChartType, AgChartThemeOverrides, UpdateChartParams, IAggFunc, SeriesGroupType } from "@ag-grid-community/core";
import { ChartDataModel, ColState } from "./model/chartDataModel";
import { ChartProxy, UpdateParams } from "./chartProxies/chartProxy";
import { _Theme, AgChartThemePalette, AgCartesianAxisType } from "ag-charts-community";
import { ChartSeriesType } from './utils/seriesTypeMapper';
export declare const DEFAULT_THEMES: string[];
export declare class ChartController extends BeanStub {
    private readonly model;
    static EVENT_CHART_UPDATED: string;
    static EVENT_CHART_API_UPDATE: string;
    static EVENT_CHART_MODEL_UPDATE: string;
    static EVENT_CHART_TYPE_CHANGED: string;
    static EVENT_CHART_SERIES_CHART_TYPE_CHANGED: string;
    static EVENT_CHART_LINKED_CHANGED: string;
    private readonly rangeService;
    private chartProxy;
    constructor(model: ChartDataModel);
    private init;
    update(params: UpdateChartParams): boolean;
    private applyValidatedChartParams;
    updateForGridChange(params?: {
        maintainColState?: boolean;
        setColsFromRange?: boolean;
    }): void;
    updateForDataChange(): void;
    updateForRangeChange(): void;
    updateForPanelChange(params: {
        updatedColState: ColState;
        resetOrder?: boolean;
        skipAnimation?: boolean;
    }): void;
    updateThemeOverrides(updatedOverrides: AgChartThemeOverrides): void;
    getChartUpdateParams(updatedOverrides?: AgChartThemeOverrides): UpdateParams;
    private invertCategorySeriesParams;
    getChartModel(): ChartModel;
    getChartId(): string;
    getChartData(): any[];
    getChartType(): ChartType;
    setChartType(chartType: ChartType): void;
    isCategorySeriesSwitched(): boolean;
    switchCategorySeries(inverted: boolean): void;
    getAggFunc(): string | IAggFunc | undefined;
    setAggFunc(value: string | IAggFunc | undefined, silent?: boolean): void;
    private updateMultiSeriesAndCategory;
    setChartThemeName(chartThemeName: string, silent?: boolean): void;
    getChartThemeName(): string;
    isPivotChart(): boolean;
    isPivotMode(): boolean;
    isGrouping(): boolean;
    isCrossFilterChart(): boolean;
    getThemeNames(): string[];
    getThemes(): _Theme.ChartTheme[];
    getPalettes(): AgChartThemePalette[];
    getThemeTemplateParameters(): {
        extensions: Map<any, any>;
        properties: Map<any, any>;
    }[];
    getValueColState(): ColState[];
    getSelectedValueColState(): {
        colId: string;
        displayName: string | null;
    }[];
    getSelectedDimensions(): ColState[];
    private displayNameMapper;
    getColStateForMenu(): {
        dimensionCols: ColState[];
        valueCols: ColState[];
    };
    setChartRange(silent?: boolean): void;
    detachChartRange(): void;
    setChartProxy(chartProxy: ChartProxy): void;
    getChartProxy(): ChartProxy;
    isActiveXYChart(): boolean;
    isChartLinked(): boolean;
    customComboExists(): boolean;
    getSeriesChartTypes(): SeriesChartType[];
    isComboChart(chartType?: ChartType): boolean;
    updateSeriesChartType(colId: string, chartType?: ChartType, secondaryAxis?: boolean): void;
    getActiveSeriesChartTypes(): SeriesChartType[];
    getChartSeriesTypes(chartType?: ChartType): ChartSeriesType[];
    getChartSeriesType(): ChartSeriesType;
    isEnterprise: () => boolean;
    private getCellRanges;
    private createCellRange;
    private validUpdateType;
    private getCellRangeParams;
    setCategoryAxisType(categoryAxisType?: AgCartesianAxisType): void;
    getSeriesGroupType(): SeriesGroupType | undefined;
    setSeriesGroupType(seriesGroupType?: SeriesGroupType): void;
    raiseChartModelUpdateEvent(): void;
    raiseChartUpdatedEvent(): void;
    raiseChartApiUpdateEvent(): void;
    private raiseChartOptionsChangedEvent;
    private raiseChartRangeSelectionChangedEvent;
    protected destroy(): void;
}
