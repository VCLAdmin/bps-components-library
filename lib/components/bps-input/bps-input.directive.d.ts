import { ElementRef, Renderer2 } from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
export declare class BpsInputDirective {
    bpsSize: NzSizeLDSType;
    disabled: boolean;
    centered: boolean;
    opened: boolean;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
