import { AdvancedFilterModel, AutocompleteEntry, AutocompleteListParams } from "@ag-grid-community/core";
import { AutocompleteUpdate, FilterExpressionParserParams, FilterExpressionValidationError, FilterExpressionFunctionParams, FilterExpressionFunction } from "./filterExpressionUtils";
export declare class ColFilterExpressionParser {
    private params;
    readonly startPosition: number;
    static readonly COL_START_CHAR = "[";
    static readonly COL_END_CHAR = "]";
    private endPosition;
    private isAwaiting;
    private parser;
    private columnParser;
    private operatorParser;
    private operandParser;
    constructor(params: FilterExpressionParserParams, startPosition: number);
    parseExpression(): number;
    isValid(): boolean;
    getValidationError(): FilterExpressionValidationError | null;
    getFunctionString(params: FilterExpressionFunctionParams): string;
    getFunctionParsed(params: FilterExpressionFunctionParams): FilterExpressionFunction;
    getAutocompleteListParams(position: number): AutocompleteListParams | undefined;
    updateExpression(position: number, updateEntry: AutocompleteEntry, type?: string): AutocompleteUpdate | null;
    getModel(): AdvancedFilterModel;
    private getFunctionCommon;
    private getOperandValue;
    private isComplete;
    private isColumnPosition;
    private isOperatorPosition;
    private isBeyondEndPosition;
    private returnEndPosition;
    private getColumnAutocompleteListParams;
    private getColumnSearchString;
    private getOperatorAutocompleteListParams;
    private getBaseCellDataTypeFromOperatorAutocompleteType;
    private hasOperand;
    private doesOperandNeedQuotes;
    private addToListAndGetIndex;
}
