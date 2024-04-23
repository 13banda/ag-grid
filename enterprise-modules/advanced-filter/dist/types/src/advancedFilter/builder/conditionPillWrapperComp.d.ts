import { Component } from "@ag-grid-community/core";
import { AdvancedFilterBuilderItem, CreatePillParams } from "./iAdvancedFilterBuilder";
import { InputPillComp } from "./inputPillComp";
import { SelectPillComp } from "./selectPillComp";
export declare class ConditionPillWrapperComp extends Component {
    private advancedFilterExpressionService;
    private valueService;
    private item;
    private createPill;
    private filterModel;
    private baseCellDataType;
    private column;
    private numOperands;
    private eColumnPill;
    private eOperatorPill;
    private eOperandPill;
    private validationMessage;
    constructor();
    init(params: {
        item: AdvancedFilterBuilderItem;
        createPill: (params: CreatePillParams) => SelectPillComp | InputPillComp;
    }): void;
    getDragName(): string;
    getAriaLabel(): string;
    getValidationMessage(): string | null;
    getFocusableElement(): HTMLElement;
    private setupColumnCondition;
    private createOperatorPill;
    private createOperandPill;
    private getColumnKey;
    private getColumnDisplayValue;
    private getOperatorKey;
    private getOperatorDisplayValue;
    private getOperandDisplayValue;
    private hasOperand;
    private getOperatorAutocompleteEntries;
    private setColumnKey;
    private setOperatorKey;
    private setOperand;
    private getNumOperands;
    private destroyOperandPill;
    private validate;
    private getDefaultColumnDisplayValue;
    private getDefaultOptionSelectValue;
}
