import { CeldType } from '../enums/CeldType.enum';
import { TemplateType } from '../enums/TemplateType.enum';
import { TemplateRef } from "@angular/core";
export interface TableConfig {
    fields: Field[];
    fieldId: string;
}
export interface Field {
    celdType: CeldType;
    display: string;
    property?: string;
    width?: string;
    minWidth?: string;
    ngClass?: any;
    hidden?: boolean;
    select?: TableSelectConfig;
    sortOrder?: string | null;
    editTemplate?: TemplateType;
    showSort?: boolean;
    dateFormat?: string;
    readonly?: boolean;
    default?: any;
    left?: string;
    right?: string;
    template?: TableTemplateRef;
    editable?: boolean;
    validators?: any[];
    placeholder?: string;
}
export interface TableSelectConfig {
    selectData: any[];
    label: string;
    value: string;
}
export interface TableTemplateRef {
    ref: TemplateRef<any>;
    context: TableTemplateRefContext;
}
export interface TableTemplateRefContext {
    index: number;
    title: string;
    exportValue?: string;
}
