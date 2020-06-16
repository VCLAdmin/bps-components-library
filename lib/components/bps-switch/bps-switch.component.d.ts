import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, OnDestroy, TemplateRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigService, NzSizeDSType } from 'ng-zorro-antd/core';
export declare class BpsSwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private focusMonitor;
    checked: boolean;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    private switchElement;
    bpsLoading: boolean;
    bpsDual: boolean;
    bpsDualValues: {
        title: string;
        checked: boolean;
    }[];
    bpsDualValuesChange: EventEmitter<{
        title: string;
        checked: boolean;
    }[]>;
    bpsDisabled: boolean;
    bpsControl: boolean;
    bpsCheckedChildren: string | TemplateRef<void>;
    bpsUnCheckedChildren: string | TemplateRef<void>;
    bpsSize: NzSizeDSType;
    hostClick(e: MouseEvent): void;
    checkNode(nodeA: {
        title: string;
        checked: boolean;
    }, nodeB: {
        title: string;
        checked: boolean;
    }): void;
    updateValue(value: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
