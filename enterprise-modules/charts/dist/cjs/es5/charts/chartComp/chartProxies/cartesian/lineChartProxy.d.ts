import { AgCartesianAxisOptions, AgLineSeriesOptions } from "ag-charts-community";
import { ChartProxyParams, UpdateChartParams } from "../chartProxy";
import { CartesianChartProxy } from "./cartesianChartProxy";
export declare class LineChartProxy extends CartesianChartProxy {
    constructor(params: ChartProxyParams);
    getData(params: UpdateChartParams): any[];
    getAxes(): AgCartesianAxisOptions[];
    getSeries(params: UpdateChartParams): (AgLineSeriesOptions | import("ag-charts-community").AgAreaSeriesOptions)[];
}
