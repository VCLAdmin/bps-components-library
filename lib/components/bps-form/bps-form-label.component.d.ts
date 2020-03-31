import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { BpsFormItemComponent } from './bps-form-item.component';
export declare class BpsFormLabelComponent extends NzColDirective implements OnDestroy, AfterViewInit {
    private cdr;
    bpsFor: string;
    bpsRequired: boolean;
    set bpsNoColon(value: boolean);
    get bpsNoColon(): boolean;
    defaultNoColon: boolean;
    noColon: boolean | string;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: BpsFormItemComponent, nzRowDirective: NzRowDirective, renderer: Renderer2, cdr: ChangeDetectorRef);
    setDefaultNoColon(value: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
