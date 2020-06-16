import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, AfterViewInit, TemplateRef, ViewChild, TrackByFunction, OnChanges, SimpleChanges, ElementRef, HostListener, ChangeDetectionStrategy, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { CeldType } from '../core/enums/celdType.enum';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
import { NzTableComponent } from 'ng-zorro-antd';
let BpsTableExpandablePanelComponent = 
// tslint:disable-next-line no-any
class BpsTableExpandablePanelComponent {
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {}; // tslint:disable-line:no-any
        this.destroy$ = new Subject();
        this.checkboxCache = [];
        this.mapOfExpandData = {};
        this._data = [];
        this.editId = null;
        this.isExpanded = false;
        this.searchBoxHovered = false;
        this._searchSubject = new Subject();
        this.frontPagination = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = false;
        this.paginationPosition = 'bottom';
        this.bordered = false;
        this.widthConfig = [];
        this.loading = false;
        this.loadingDelay = 0;
        this.scroll = { x: null, y: null };
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.showQuickJumper = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.simple = false;
        this.virtualScroll = false;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.inlineEdit = false;
        this.pageIndexChange = new EventEmitter();
        this.currentPageDataChange = new EventEmitter();
        this.queryParamsChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = true;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.clicks = 0;
    }
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId !== null && this.inputElement && !this.inputElement.nativeElement.isEqualNode(e.target)) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    emitBpsEvent($event, type) {
        switch (type) {
            case 'pageIndex':
                this.pageIndexChange.emit($event);
                break;
            case 'currentPageData':
                this.currentPageDataChange.emit($event);
                break;
            case 'queryParams':
                this.queryParamsChange.emit($event);
                break;
            case 'pageSize':
                this.pageSizeChange.emit($event);
                break;
        }
    }
    getFields() {
        return this.config ? this.config.fields.filter(item => item.hidden === undefined || !item.hidden) : [];
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this._searchSubject.unsubscribe();
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return Object.assign(Object.assign({}, field.ngClass), { ['bps-td-expandable-panel']: true, ['bps-td-disabled']: data.disabled, ['bps-td-no-padding']: data[this.config.fieldId] === this.editId, ['bps-fst-column']: !fi });
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelected = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: item
            });
        });
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            this.clicks = 0;
        }, 300);
    }
    startEdit(data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled) {
            this.editId = data[this.config.fieldId];
            this.cdr.detectChanges();
        }
    }
    selectRow(data) {
        if (!data.disabled) {
            this.onclickRow.emit(data);
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = true;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
        }
    }
};
BpsTableExpandablePanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "data", null);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "frontPagination", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "total", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "pageIndex", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "pageSize", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showPagination", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "paginationPosition", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "bordered", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "widthConfig", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "loading", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "loadingDelay", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "loadingIndicator", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "scroll", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "title", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "footer", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "noResult", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "pageSizeOptions", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showQuickJumper", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showSizeChanger", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "showTotal", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "simple", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "virtualScroll", void 0);
__decorate([
    Input(), InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualItemSize", void 0);
__decorate([
    Input(), InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    Input(), InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "virtualForTrackBy", void 0);
__decorate([
    Input(), InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "inlineEdit", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "pageIndexChange", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "currentPageDataChange", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "queryParamsChange", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "pageSizeChange", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "onclickRow", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "selectionChange", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "singleSort", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "sortChange", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "config", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "configChange", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "gridID", void 0);
__decorate([
    Output()
], BpsTableExpandablePanelComponent.prototype, "onedit", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "menuTemplate", void 0);
__decorate([
    Input()
], BpsTableExpandablePanelComponent.prototype, "currentPreviewTemplate", void 0);
__decorate([
    ViewChild(BpsInputDirective, { static: false, read: ElementRef })
], BpsTableExpandablePanelComponent.prototype, "inputElement", void 0);
__decorate([
    ViewChild('gridComponent', { read: NzTableComponent, static: false })
], BpsTableExpandablePanelComponent.prototype, "gridComponent", void 0);
__decorate([
    ViewChild('bpsExpandablePanel', { read: ElementRef, static: false })
], BpsTableExpandablePanelComponent.prototype, "panel", void 0);
__decorate([
    HostListener('window:mouseup', ['$event'])
], BpsTableExpandablePanelComponent.prototype, "handleClick", null);
BpsTableExpandablePanelComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'bps-table-expandable-panel',
        exportAs: 'bpsTableExpandablePanel',
        template: "<div class=\"bps-table-expandable-panel-wrapper\">\r\n  <div class=\"bps-table-expandable-panel-menu\">\r\n    <div class=\"bps-table-expandable-panel-menu-inner\">\r\n      <ng-container [ngTemplateOutlet]=\"menuTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div #bpsExpandablePanel class=\"bps-table-report bps-table-expandable-panel\">\r\n    <nz-table #gridComponent\r\n              class=\"bps-table-expandable-panel\"\r\n              [nzData]=\"_data\"\r\n              [nzFrontPagination]=\"frontPagination\"\r\n              [nzTotal]=\"total\"\r\n              [nzPageIndex]=\"pageIndex\"\r\n              [nzPageSize]=\"pageSize\"\r\n              [nzShowPagination]=\"showPagination\"\r\n              [nzPaginationPosition]=\"paginationPosition\"\r\n              [nzBordered]=\"bordered\"\r\n              [nzWidthConfig]=\"widthConfig\"\r\n              [nzLoading]=\"loading\"\r\n              [nzLoadingIndicator]=\"loadingIndicator\"\r\n              [nzLoadingDelay]=\"loadingDelay\"\r\n              [nzScroll]=\"scroll\"\r\n              [nzTitle]=\"title\"\r\n              [nzFooter]=\"footer\"\r\n              [nzNoResult]=\"noResult\"\r\n              [nzPageSizeOptions]=\"pageSizeOptions\"\r\n              [nzShowQuickJumper]=\"showQuickJumper\"\r\n              [nzShowSizeChanger]=\"showSizeChanger\"\r\n              [nzShowTotal]=\"showTotal\"\r\n              [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n              [nzSimple]=\"simple\"\r\n              [nzVirtualScroll]=\"virtualScroll\"\r\n              [nzVirtualItemSize]=\"virtualItemSize\"\r\n              [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n              [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n              [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n              (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n              (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n              (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n              (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n      <thead></thead>\r\n      <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n          <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              (click)=\"clickRow($event, data)\">\r\n\r\n            <td *ngFor=\"let field of getFields(); index as fi\"\r\n                style=\"position: relative\"\r\n                [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n              <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n                <ng-container *ngIf=\"data[field.property]\">\r\n                  <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n                <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                  <div>\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                </ng-container>\r\n                <ng-template #editTpl>\r\n                  <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                         class=\"bps-editable-cell-input\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (keyup)=\"endEditMode($event, i, data)\" />\r\n                </ng-template>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"!fi\">\r\n                <span class=\"bps-table-expandable-panel-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n\r\n  <div class=\"bps-table-expandable-panel-preview\">\r\n    <ng-container [ngTemplateOutlet]=\"currentPreviewTemplate\"></ng-container>\r\n  </div>\r\n\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th,::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td{background:#313b3f!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:-14px!important;background-color:#262626!important}::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:20px!important}.bps-table-expandable-panel .bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important;z-index:2}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-row-expanded::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table-expandable-panel .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-expandable-panel .anticon svg{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after{content:''}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:.3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:.3s}.bps-table-filter-custom-input{border:1px solid #535353!important;background-color:#343434!important;padding-left:24px!important;transition:.3s}.bps-table-filter-custom-input:hover{border:1px solid #535353!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::-webkit-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-moz-placeholder{color:#666;font-size:10px}.bps-table-glass-filter:-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important}.bps-table-expandable-panel-preview{width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;padding:8px;vertical-align:top;background-color:#313131}.bps-table-expandable-panel-menu{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}::ng-deep .bps-table-expandable-panel-menu-inner img,::ng-deep .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;padding:6px;margin-bottom:5px;cursor:pointer}.bps-table-expandable-panel-menu-inner{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil::after{content:'';position:absolute;top:5px;right:5px}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil::after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:hover::after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}"]
    })
    // tslint:disable-next-line no-any
], BpsTableExpandablePanelComponent);
export { BpsTableExpandablePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwvYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixXQUFXLEVBQ1gsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUEyQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV2pELElBQWEsZ0NBQWdDO0FBRDdDLGtDQUFrQztBQUNsQyxNQUFhLGdDQUFnQztJQW9IM0MsWUFDVSxHQUFzQixFQUN0QixJQUFtQjtRQURuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBckg3QixXQUFNLEdBQVEsRUFBRSxDQUFDLENBQUMsNkJBQTZC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LENBQUM7K0RBQW1CO0FBR3hGO0lBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7bUVBTTFDO0FBMUVVLGdDQUFnQztJQVQ1QyxTQUFTLENBQUM7UUFDVCwrQ0FBK0M7UUFDL0MsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLHMrSEFBMEQ7UUFFMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7SUFDRixrQ0FBa0M7R0FDckIsZ0NBQWdDLENBd041QztTQXhOWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnpTaXplTURTVHlwZSwgdG9Cb29sZWFufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgVGFibGVDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1pbnB1dC9icHMtaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3QgfSBmcm9tICcuLi9icHMtdGFibGUvYnBzLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdicHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdicHNUYWJsZUV4cGFuZGFibGVQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5leHBvcnQgY2xhc3MgQnBzVGFibGVFeHBhbmRhYmxlUGFuZWxDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBtYXBPZkV4cGFuZERhdGE6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgX2RhdGEgPSBbXTtcclxuICBlZGl0SWQgPSBudWxsO1xyXG4gIGlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICBzZWFyY2hCb3hIb3ZlcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2VhcmNoU3ViamVjdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyogVGFibGUgQVBJICovIFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gIH1cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcclxuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjdXJyZW50UGFnZURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcXVlcnlQYXJhbXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbi8qIFRoZWFkIEFQSSAqL1xyXG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgLyogQlBTIEFQSSAqLyBcclxuICBASW5wdXQoKSBjb25maWc6IFRhYmxlQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJsZUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBtZW51VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRQcmV2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAVmlld0NoaWxkKEJwc0lucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2dyaWRDb21wb25lbnQnLCB7IHJlYWQ6IE56VGFibGVDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgZ3JpZENvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdicHNFeHBhbmRhYmxlUGFuZWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgcGFuZWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0SWQgIT09IG51bGwgJiYgdGhpcy5pbnB1dEVsZW1lbnQgJiYgIXRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaXNFcXVhbE5vZGUoZS50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXRPbkVkaXRFdmVudCgpIHtcclxuICAgIGxldCBlZGl0ZWRFbCA9IHRoaXMuX2RhdGEuZmlsdGVyKGVsID0+IGVsW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSB0aGlzLmVkaXRJZCk7XHJcbiAgICBpZiAoZWRpdGVkRWwubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZWRpdGVkRWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGVtaXRCcHNFdmVudCgkZXZlbnQsIHR5cGU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3BhZ2VJbmRleCc6XHJcbiAgICAgICAgdGhpcy5wYWdlSW5kZXhDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjdXJyZW50UGFnZURhdGEnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncXVlcnlQYXJhbXMnOlxyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbXNDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYWdlU2l6ZSc6XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pIDogW107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZVxyXG4gICkgeyAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX3NlYXJjaFN1YmplY3QudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGdldFREQ2xhc3NNYXAoZmllbGQ6IEZpZWxkLCBkYXRhLCBmaSA9IDk5OTkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmZpZWxkLm5nQ2xhc3MsXHJcbiAgICAgIFsnYnBzLXRkLWV4cGFuZGFibGUtcGFuZWwnXTogdHJ1ZSxcclxuICAgICAgWydicHMtdGQtZGlzYWJsZWQnXTogZGF0YS5kaXNhYmxlZCxcclxuICAgICAgWydicHMtdGQtbm8tcGFkZGluZyddOiBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSB0aGlzLmVkaXRJZCxcclxuICAgICAgWydicHMtZnN0LWNvbHVtbiddOiAhZmksXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGVkLmluZGV4T2YoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uc2VsZWN0ZWQgPyBpdGVtLnNlbGVjdGVkIDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogaXRlbVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tzID0gMDtcclxuICBjbGlja1JvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGRhdGEpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChkYXRhOiBhbnksIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0ICYmICFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0Um93KGRhdGE6IGFueSkge1xyXG4gICAgaWYgKCFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSB7XHJcbiAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=