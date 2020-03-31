import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { NgClassType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { BpsFormItemComponent } from './bps-form-item.component';
export declare type NzFormControlStatusType = 'warning' | 'validating' | 'error' | 'success' | null;
export declare class BpsFormControlComponent extends NzColDirective implements OnDestroy, OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    private nzFormItemComponent;
    private cdr;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    validateControl: FormControl | NgModel | null;
    status: NzFormControlStatusType;
    controlClassMap: NgClassType;
    iconType: string;
    defaultValidateControl: FormControlName | FormControlDirective;
    bpsSuccessTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    bpsWarningTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    bpsErrorTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    bpsValidatingTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    bpsExtra: string | TemplateRef<void>;
    set bpsHasFeedback(value: boolean);
    get bpsHasFeedback(): boolean;
    set bpsValidateStatus(value: string | FormControl | FormControlName | NgModel);
    removeSubscribe(): void;
    watchControl(): void;
    validateControlStatus(status: string): boolean;
    setControlClassMap(): void;
    get hasTips(): boolean;
    get showSuccessTip(): boolean;
    get showWarningTip(): boolean;
    get showErrorTip(): boolean;
    get showValidatingTip(): boolean;
    get showInnerTip(): boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: BpsFormItemComponent, nzRowDirective: NzRowDirective, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
}
