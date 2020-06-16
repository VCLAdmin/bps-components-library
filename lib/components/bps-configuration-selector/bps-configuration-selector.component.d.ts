import { ChangeDetectorRef, OnDestroy, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
export declare class BpsConfigurationSelectorComponent<T = any> implements OnInit, OnDestroy, AfterViewInit {
    private cdr;
    private destroy$;
    currentDisplayedDataIndex: any;
    _data: any[];
    _currentDisplayedData: any;
    set currentDisplayedData(value: any);
    propertyName: string;
    disabled: boolean;
    currentDisplayedDataChange: EventEmitter<any>;
    set data(data: any);
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getCurrentElementIndex(): number;
    getPrevElement(): void;
    getNextElement(): void;
}
