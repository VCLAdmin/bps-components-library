import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { BpsCheckboxComponent } from './bps-checkbox.component';
export declare class BpsCheckboxWrapperComponent {
    readonly bpsOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: BpsCheckboxComponent): void;
    removeCheckbox(value: BpsCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
