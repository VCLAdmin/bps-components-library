import { EventEmitter } from '@angular/core';
export declare class BpsGridComponent {
    _columns: any[];
    _rows: any[];
    _selection: number[];
    _latestSelection: number[];
    disabled: boolean;
    selectionChange: EventEmitter<any>;
    set columns(value: number);
    set rows(value: number);
    set selection(value: number[]);
    get selection(): number[];
    constructor();
    onSelectionChange(row: any, column: any): void;
    isSelected(row: number, column: number): boolean;
    previewSelection(row: any, column: any): void;
    endPreviewSelection(): void;
}
