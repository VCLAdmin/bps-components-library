import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, AfterViewInit, TemplateRef, TrackByFunction, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { TableConfig, Field } from '../core/interfaces/grid-config';
export declare type BpsTableType = 'report' | 'home' | 'glass_profile';
export declare class BpsTableComponent<T = any> implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private cdr;
    private i18n;
    locale: any;
    private destroy$;
    checkboxCache: CheckboxSelect[];
    mapOfExpandData: {
        [key: string]: boolean;
    };
    _data: any[];
    editId: any;
    editProperty: any;
    isExpanded: boolean;
    searchBoxHovered: boolean;
    private _searchSubject;
    set data(data: any);
    frontPagination: boolean;
    total: number;
    pageIndex: number;
    pageSize: number;
    showPagination: boolean;
    paginationPosition: 'top' | 'bottom' | 'both';
    bordered: boolean;
    widthConfig: string[];
    loading: boolean;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    pageSizeOptions: number[];
    showQuickJumper: boolean;
    showSizeChanger: boolean;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    hideOnSinglePage: boolean;
    simple: boolean;
    virtualItemSize: number;
    virtualMaxBufferPx: number;
    virtualMinBufferPx: number;
    virtualForTrackBy: TrackByFunction<T>;
    inlineEdit: boolean;
    pageIndexChange: EventEmitter<any>;
    currentPageDataChange: EventEmitter<any>;
    queryParamsChange: EventEmitter<any>;
    pageSizeChange: EventEmitter<any>;
    onclickRow: EventEmitter<any>;
    ondblclickRow: EventEmitter<any>;
    selectionChange: EventEmitter<any>;
    singleSort: boolean;
    sortChange: EventEmitter<any>;
    config: TableConfig;
    configChange: EventEmitter<TableConfig>;
    gridID: string;
    filterPlaceholder: string;
    onedit: EventEmitter<any>;
    tableType: BpsTableType;
    expandable: boolean;
    searchValueChange: EventEmitter<string>;
    moreBtnClicked: EventEmitter<any>;
    deleteBtnClicked: EventEmitter<any>;
    expandChange: EventEmitter<any>;
    moreMenu: TemplateRef<any>;
    deleteMenu: TemplateRef<any>;
    rowExpandTemplate: TemplateRef<any>;
    inputElement: ElementRef;
    forceUpdate: boolean;
    handleClick(e: MouseEvent): void;
    sort(sort: {
        key: string;
        value: string;
    }): void;
    emitOnEditEvent(): void;
    endEditMode($event: KeyboardEvent, index: number, data?: any): void;
    preventDefault($event: MouseEvent): void;
    emitBpsEvent($event: any, type: string): void;
    getFields(): Field[];
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    private _setSearchSubscription;
    updateSearch(searchTextValue: string): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCeldTypeTemplateRef(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    getTDClassMap(field: Field, data: any, fi?: number): any;
    isRowSelected(data: any): boolean;
    updateCheckboxCache(): void;
    clicks: number;
    clickRow(event: MouseEvent, data: any): void;
    startEdit(data: any, event: MouseEvent): void;
    editRow(data: any, property: any): void;
    selectRow(data: any, selectionOnly?: boolean): void;
    expandRow(data: any, $event: any): void;
    changeIcon($event: any): void;
}
export interface CheckboxSelect {
    data: any;
    selected: boolean;
}
