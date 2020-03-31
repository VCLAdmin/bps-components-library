import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { BpsFormLabelComponent } from './bps-form-label.component';
export declare class BpsFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    bpsLayout: string;
    bpsNoColon: boolean;
    bpsFormLabelComponent: QueryList<BpsFormLabelComponent>;
    destroy$: Subject<unknown>;
    setClassMap(): void;
    updateItemsDefaultColon(): void;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
