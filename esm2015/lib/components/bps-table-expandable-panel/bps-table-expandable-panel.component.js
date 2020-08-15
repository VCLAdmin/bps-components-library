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
        this.ondblclickRow = new EventEmitter();
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
            this.cdr.detectChanges();
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
            this.cdr.detectChanges();
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
        event.preventDefault();
        event.stopImmediatePropagation();
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
            }
            else if (this.clicks === 2) {
                this.ondblclickRow.emit(data);
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
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    selectText($event) {
        $event.target.select();
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
], BpsTableExpandablePanelComponent.prototype, "ondblclickRow", void 0);
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
        template: "<div class=\"bps-table-expandable-panel-wrapper\">\r\n  <div class=\"bps-table-expandable-panel-menu\">\r\n    <div class=\"bps-table-expandable-panel-menu-inner\">\r\n      <ng-container [ngTemplateOutlet]=\"menuTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div #bpsExpandablePanel class=\"bps-table-report bps-table-expandable-panel bps-table-expandable-panel-table-wrapper\">\r\n    <nz-table #gridComponent\r\n              class=\"bps-table-expandable-panel\"\r\n              [nzData]=\"_data\"\r\n              [nzFrontPagination]=\"frontPagination\"\r\n              [nzTotal]=\"total\"\r\n              [nzPageIndex]=\"pageIndex\"\r\n              [nzPageSize]=\"pageSize\"\r\n              [nzShowPagination]=\"showPagination\"\r\n              [nzPaginationPosition]=\"paginationPosition\"\r\n              [nzBordered]=\"bordered\"\r\n              [nzWidthConfig]=\"widthConfig\"\r\n              [nzLoading]=\"loading\"\r\n              [nzLoadingIndicator]=\"loadingIndicator\"\r\n              [nzLoadingDelay]=\"loadingDelay\"\r\n              [nzScroll]=\"scroll\"\r\n              [nzTitle]=\"title\"\r\n              [nzFooter]=\"footer\"\r\n              [nzNoResult]=\"noResult\"\r\n              [nzPageSizeOptions]=\"pageSizeOptions\"\r\n              [nzShowQuickJumper]=\"showQuickJumper\"\r\n              [nzShowSizeChanger]=\"showSizeChanger\"\r\n              [nzShowTotal]=\"showTotal\"\r\n              [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n              [nzSimple]=\"simple\"\r\n              [nzVirtualScroll]=\"virtualScroll\"\r\n              [nzVirtualItemSize]=\"virtualItemSize\"\r\n              [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n              [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n              [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n              (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n              (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n              (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n              (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let field of getFields(); index as hi\"\r\n              style=\"display: none;\"\r\n              [nzWidth]=\"field.width\">\r\n          </th>\r\n        </tr>  \r\n      </thead>\r\n      <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n          <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              (click)=\"clickRow($event, data)\">\r\n\r\n            <td *ngFor=\"let field of getFields(); index as fi\"\r\n                style=\"position: relative\"\r\n                [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n              <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n                <ng-container *ngIf=\"data[field.property]\">\r\n                  <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n                <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                  <div class=\"expandable-table-td-content\">\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                </ng-container>\r\n                <ng-template #editTpl>\r\n                  <input bps-input\r\n                         #inputElement\r\n                         [(ngModel)]=\"data[field.property]\"\r\n                         class=\"bps-editable-cell-input\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (keyup)=\"endEditMode($event, i, data)\" />\r\n                </ng-template>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"!fi\">\r\n                <span class=\"bps-table-expandable-panel-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n\r\n  <div class=\"bps-table-expandable-panel-preview-wrapper\">\r\n    <div class=\"bps-table-expandable-panel-preview\">\r\n      <ng-container [ngTemplateOutlet]=\"currentPreviewTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th,::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}.bps-invisible{display:none}.bps-table-expandable-panel-table-wrapper{background-color:#313131!important}.bps-table-expandable-panel:not(.bps-table-expandable-panel-table-wrapper){margin:8px 0 8px 10px!important;background-color:#313131!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:0!important;background-color:#262626!important;overflow-x:hidden!important}::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:10px!important}.bps-table-expandable-panel .bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:10px!important;z-index:2}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-row-expanded::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table-expandable-panel .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-expandable-panel .anticon svg{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after{content:''}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:.3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:.3s}.bps-table-filter-custom-input{border:1px solid #535353!important;background-color:#343434!important;padding-left:24px!important;transition:.3s}.bps-table-filter-custom-input:hover{border:1px solid #535353!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::-webkit-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-moz-placeholder{color:#666;font-size:10px}.bps-table-glass-filter:-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important;background-color:#313131!important}.bps-table-expandable-panel-preview{border-left:1.3px solid #363636;height:100%;min-height:100%;padding:0 10px}.bps-table-expandable-panel-menu{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}::ng-deep .bps-table-expandable-panel-menu-inner img,::ng-deep .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;margin-bottom:5px;padding:6px;cursor:pointer}.bps-table-expandable-panel-menu-inner{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil::after{content:'';position:absolute;top:5px;right:5px}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil::after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:hover::after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}.bps-table-expandable-panel-preview-wrapper{padding:8px 0!important;background-color:#313131!important;width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;vertical-align:top}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .expandable-table-td-content{width:calc(100% - 20px)}::ng-deep .bps-table-expandable-panel .ant-table-fixed{padding-right:4px!important;background-color:#313131}"]
    })
    // tslint:disable-next-line no-any
], BpsTableExpandablePanelComponent);
export { BpsTableExpandablePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwvYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixXQUFXLEVBQ1gsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUEyQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV2pELElBQWEsZ0NBQWdDO0FBRDdDLGtDQUFrQztBQUNsQyxNQUFhLGdDQUFnQztJQXVIM0MsWUFDVSxHQUFzQixFQUN0QixJQUFtQjtRQURuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBeEg3QixXQUFNLEdBQVEsRUFBRSxDQUFDLENBQUMsNkJBQTZC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LEtBQUssRUFBRTtvRUFBbUI7QUFDakI7SUFBVCxNQUFNLEVBQUU7b0VBQXNDO0FBR3RDO0lBQVIsS0FBSyxFQUFFO2dFQUFxQjtBQUNuQjtJQUFULE1BQU0sRUFBRTtzRUFBMkU7QUFDM0U7SUFBUixLQUFLLEVBQUU7Z0VBQWdCO0FBQ2Q7SUFBVCxNQUFNLEVBQUU7Z0VBQWtDO0FBQ2xDO0lBQVIsS0FBSyxFQUFFO3NFQUFpQztBQUNoQztJQUFSLEtBQUssRUFBRTtnRkFBMkM7QUFFZ0I7SUFBbEUsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7c0VBQTBCO0FBQ3JCO0lBQXRFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3VFQUFpQztBQUNqQztJQUFyRSxTQUFTLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzsrREFBbUI7QUFHeEY7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzttRUFPMUM7QUE1RVUsZ0NBQWdDO0lBVDVDLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMscTZJQUEwRDtRQUUxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztJQUNGLGtDQUFrQztHQUNyQixnQ0FBZ0MsQ0FxTzVDO1NBck9ZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCB3aW5kb3cgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge0lucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56U2l6ZU1EU1R5cGUsIHRvQm9vbGVhbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFRhYmxlQ29uZmlnLCBGaWVsZCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtaW5wdXQvYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0IH0gZnJvbSAnLi4vYnBzLXRhYmxlL2Jwcy10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVGFibGVFeHBhbmRhYmxlUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIEJwc1RhYmxlRXhwYW5kYWJsZVBhbmVsQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgbWFwT2ZFeHBhbmREYXRhOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gIF9kYXRhID0gW107XHJcbiAgZWRpdElkID0gbnVsbDtcclxuICBpc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgc2VhcmNoQm94SG92ZXJlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NlYXJjaFN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8qIFRhYmxlIEFQSSAqLyBcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICB9XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XHJcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VycmVudFBhZ2VEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHF1ZXJ5UGFyYW1zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kYmxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbi8qIFRoZWFkIEFQSSAqL1xyXG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgLyogQlBTIEFQSSAqLyBcclxuICBASW5wdXQoKSBjb25maWc6IFRhYmxlQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJsZUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBtZW51VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRQcmV2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBAVmlld0NoaWxkKEJwc0lucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2dyaWRDb21wb25lbnQnLCB7IHJlYWQ6IE56VGFibGVDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgZ3JpZENvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdicHNFeHBhbmRhYmxlUGFuZWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgcGFuZWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0SWQgIT09IG51bGwgJiYgdGhpcy5pbnB1dEVsZW1lbnQgJiYgIXRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaXNFcXVhbE5vZGUoZS50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdE9uRWRpdEV2ZW50KCkge1xyXG4gICAgbGV0IGVkaXRlZEVsID0gdGhpcy5fZGF0YS5maWx0ZXIoZWwgPT4gZWxbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IHRoaXMuZWRpdElkKTtcclxuICAgIGlmIChlZGl0ZWRFbC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdChlZGl0ZWRFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIGlmICgkZXZlbnQua2V5ID09PSAoJ0VudGVyJyB8fCAnZW50ZXInKSkge1xyXG4gICAgICB0aGlzLmVtaXRPbkVkaXRFdmVudCgpO1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBlbWl0QnBzRXZlbnQoJGV2ZW50LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdwYWdlSW5kZXgnOlxyXG4gICAgICAgIHRoaXMucGFnZUluZGV4Q2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY3VycmVudFBhZ2VEYXRhJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3F1ZXJ5UGFyYW1zJzpcclxuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1zQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGFnZVNpemUnOlxyXG4gICAgICAgIHRoaXMucGFnZVNpemVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcclxuICApIHsgIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLl9zZWFyY2hTdWJqZWN0LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4gZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4gZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRURENsYXNzTWFwKGZpZWxkOiBGaWVsZCwgZGF0YSwgZmkgPSA5OTk5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5maWVsZC5uZ0NsYXNzLFxyXG4gICAgICBbJ2Jwcy10ZC1leHBhbmRhYmxlLXBhbmVsJ106IHRydWUsXHJcbiAgICAgIFsnYnBzLXRkLWRpc2FibGVkJ106IGRhdGEuZGlzYWJsZWQsXHJcbiAgICAgIFsnYnBzLXRkLW5vLXBhZGRpbmcnXTogZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gdGhpcy5lZGl0SWQsXHJcbiAgICAgIFsnYnBzLWZzdC1jb2x1bW4nXTogIWZpLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RlZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlLnB1c2goe1xyXG4gICAgICAgIHNlbGVjdGVkOiBpdGVtLnNlbGVjdGVkID8gaXRlbS5zZWxlY3RlZCA6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGl0ZW1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyhkYXRhKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrcyA9PT0gMikge1xyXG4gICAgICAgIHRoaXMub25kYmxjbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoZGF0YTogYW55LCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMuaW5saW5lRWRpdCAmJiAhZGF0YS5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF07XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0VGV4dCgkZXZlbnQpIHtcclxuICAgICRldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3coZGF0YTogYW55KSB7XHJcbiAgICBpZiAoIWRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5vbmNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==