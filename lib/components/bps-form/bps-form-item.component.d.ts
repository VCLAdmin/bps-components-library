import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { NzDomEventService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzRowDirective } from 'ng-zorro-antd/grid';
import { BpsFormExplainComponent } from './bps-form-explain.component';
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class BpsFormItemComponent extends NzRowDirective implements AfterContentInit, OnDestroy, OnChanges, OnInit, OnDestroy {
    private cdr;
    bpsFlex: boolean;
    listOfNzFormExplainComponent: QueryList<BpsFormExplainComponent>;
    withHelpClass: boolean;
    tipsMode: boolean;
    updateFlexStyle(): void;
    setWithHelpViaTips(value: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService, cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
