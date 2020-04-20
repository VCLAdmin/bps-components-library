import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BpsRadioComponent } from './bps-radio.component';
export declare class BpsRadioButtonComponent extends BpsRadioComponent {
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
}
