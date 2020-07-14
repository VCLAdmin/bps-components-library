import { __assign, __decorate, __read, __spread } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, AfterViewInit, TemplateRef, ViewChild, TrackByFunction, OnChanges, SimpleChanges, ElementRef, HostListener, ChangeDetectionStrategy, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { CeldType } from '../core/enums/celdType.enum';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
var BpsTableComponent = /** @class */ (function () {
    function BpsTableComponent(cdr, i18n) {
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
        this.frontPagination = true;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = true;
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
        this.tableType = 'report';
        this.expandable = false;
        this.searchValueChange = new EventEmitter();
        this.moreBtnClicked = new EventEmitter();
        this.deleteBtnClicked = new EventEmitter();
        this.clicks = 0;
        this._setSearchSubscription();
    }
    Object.defineProperty(BpsTableComponent.prototype, "data", {
        /* Table API */
        // tslint:disable-next-line: no-input-rename
        set: function (data) {
            this._data = data;
            this.updateCheckboxCache();
        },
        enumerable: true,
        configurable: true
    });
    BpsTableComponent.prototype.handleClick = function (e) {
        if (this.editId !== null && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    };
    BpsTableComponent.prototype.sort = function (sort) {
        var field = this.getFields().filter(function (item) { return item.property === sort.key; })[0];
        if (field.disabled) {
            return;
        }
        this.sortChange.emit({ sortName: sort.key, sortValue: sort.value });
    };
    BpsTableComponent.prototype.emitOnEditEvent = function () {
        var _this = this;
        var editedEl = this._data.filter(function (el) { return el[_this.config.fieldId] === _this.editId; });
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    };
    BpsTableComponent.prototype.endEditMode = function ($event, index, data) {
        if (data === void 0) { data = null; }
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    };
    BpsTableComponent.prototype.preventDefault = function ($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    };
    BpsTableComponent.prototype.emitBpsEvent = function ($event, type) {
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
            case 'moreBtnClicked':
                this.moreBtnClicked.emit($event);
                break;
            case 'deleteBtnClicked':
                this.deleteBtnClicked.emit($event);
                break;
        }
    };
    BpsTableComponent.prototype.getFields = function () {
        return this.config ? this.config.fields.filter(function (item) { return item.hidden === undefined || !item.hidden; }) : [];
    };
    BpsTableComponent.prototype._setSearchSubscription = function () {
        var _this = this;
        this._searchSubject.pipe(debounceTime(500)).subscribe(function (searchValue) {
            _this.searchValueChange.emit(searchValue);
        });
    };
    BpsTableComponent.prototype.updateSearch = function (searchTextValue) {
        this._searchSubject.next(searchTextValue);
    };
    BpsTableComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    BpsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    };
    BpsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        });
    };
    BpsTableComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this._searchSubject.unsubscribe();
    };
    BpsTableComponent.prototype.isCeldTypeTemplateRef = function (field) {
        return field.celdType === CeldType.TemplateRef;
    };
    BpsTableComponent.prototype.isCeldTypeDefault = function (field) {
        return field.celdType === CeldType.Default;
    };
    BpsTableComponent.prototype.getTDClassMap = function (field, data, fi) {
        var _a;
        if (fi === void 0) { fi = 9999; }
        return __assign(__assign({}, field.ngClass), (_a = {}, _a['bps-td-disabled'] = data.disabled, _a['bps-td-no-padding'] = data[this.config.fieldId] === this.editId, _a['bps-fst-column'] = !fi, _a));
    };
    BpsTableComponent.prototype.isRowSelected = function (data) {
        var _this = this;
        if (this.config) {
            var dataSelected = this.checkboxCache.filter(function (item) { return item.selected; }).map(function (item) { return item.data[_this.config.fieldId]; });
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    };
    BpsTableComponent.prototype.updateCheckboxCache = function () {
        var _this = this;
        var temp = __spread(this.checkboxCache);
        this.checkboxCache.length = 0;
        this._data.forEach(function (item) {
            var checkItem = temp.filter(function (e) { return e.data[_this.config.fieldId] === item[_this.config.fieldId]; });
            _this.checkboxCache.push({
                selected: checkItem.length ? checkItem[0].selected : false,
                data: item
            });
        });
    };
    BpsTableComponent.prototype.clickRow = function (event, data) {
        var _this = this;
        this.clicks++;
        setTimeout(function () {
            if (_this.clicks === 1) {
                _this.selectRow(data);
                if (_this.expandable) {
                    var key = _this.config.fieldId;
                    _this.expandRow(data, !_this.mapOfExpandData[data[key]]);
                    _this.cdr.detectChanges();
                }
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            else if (_this.clicks === 2) {
                _this.ondblclickRow.emit(data);
            }
            _this.clicks = 0;
        }, 300);
    };
    BpsTableComponent.prototype.startEdit = function (data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled) {
            this.editId = data[this.config.fieldId];
        }
    };
    BpsTableComponent.prototype.selectRow = function (data, selectionOnly) {
        var _this = this;
        if (selectionOnly === void 0) { selectionOnly = false; }
        if (!data.disabled) {
            if (!selectionOnly) {
                this.onclickRow.emit(data);
            }
            this.checkboxCache.forEach(function (item) {
                if (item.data[_this.config.fieldId] === data[_this.config.fieldId]) {
                    item.selected = true;
                    _this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
            this.cdr.detectChanges();
        }
    };
    BpsTableComponent.prototype.expandRow = function (data, $event) {
        this.mapOfExpandData = {};
        this.mapOfExpandData[data[this.config.fieldId]] = $event;
    };
    BpsTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "data", null);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "frontPagination", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "total", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "pageIndex", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "pageSize", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "showPagination", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "paginationPosition", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "bordered", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "widthConfig", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "loading", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "loadingDelay", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "scroll", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "footer", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "noResult", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "pageSizeOptions", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "showQuickJumper", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "showSizeChanger", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "showTotal", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "hideOnSinglePage", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "simple", void 0);
    __decorate([
        Input(), InputNumber()
    ], BpsTableComponent.prototype, "virtualItemSize", void 0);
    __decorate([
        Input(), InputNumber()
    ], BpsTableComponent.prototype, "virtualMaxBufferPx", void 0);
    __decorate([
        Input(), InputNumber()
    ], BpsTableComponent.prototype, "virtualMinBufferPx", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "virtualForTrackBy", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "inlineEdit", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "pageIndexChange", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "currentPageDataChange", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "queryParamsChange", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "pageSizeChange", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "onclickRow", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "ondblclickRow", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "selectionChange", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "singleSort", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "sortChange", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "config", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "configChange", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "gridID", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "filterPlaceholder", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "onedit", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "tableType", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsTableComponent.prototype, "expandable", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "searchValueChange", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "moreBtnClicked", void 0);
    __decorate([
        Output()
    ], BpsTableComponent.prototype, "deleteBtnClicked", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "moreMenu", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "deleteMenu", void 0);
    __decorate([
        Input()
    ], BpsTableComponent.prototype, "rowExpandTemplate", void 0);
    __decorate([
        ViewChild(BpsInputDirective, { static: false, read: ElementRef })
    ], BpsTableComponent.prototype, "inputElement", void 0);
    __decorate([
        HostListener('window:mouseup', ['$event'])
    ], BpsTableComponent.prototype, "handleClick", null);
    BpsTableComponent = __decorate([
        Component({
            // tslint:disable-next-line: component-selector
            selector: 'bps-table',
            exportAs: 'bpsTable',
            template: "<div id=\"{{gridID}}\"\r\n     class=\"bps-table-{{tableType}}\">\r\n  <input bps-input\r\n         *ngIf=\"tableType === 'glass_profile'\"\r\n         class=\"bps-table-glass-filter\"\r\n         [placeholder]=\"filterPlaceholder\"\r\n         (click)=\"preventDefault($event)\"\r\n         (keyup)=\"updateSearch($event.target.value)\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead (nzSortChange)=\"sort($event)\"\r\n           [nzSingleSort]=\"singleSort\">\r\n      <tr>\r\n\r\n        <th *ngIf=\"expandable\"\r\n            [nzWidth]=\"'40px'\"\r\n            nzShowExpand>\r\n        </th>\r\n\r\n        <th *ngFor=\"let field of getFields(); index as th\"\r\n            [ngClass]=\"field.ngClass\"\r\n            [class.bps-column-disabled]=\"field.disabled\"\r\n            [nzShowSort]=\"field.showSort\"\r\n            [nzSortKey]=\"field.property\"\r\n            nzCustomFilter\r\n            [nzWidth]=\"field.width\">\r\n          <ng-container *ngIf=\"field.template; else cellValue\">\r\n            <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n          </ng-container>\r\n          <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n          <ng-container *ngIf=\"field.showCustomFilter\">\r\n            <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n          </ng-container>\r\n        </th>\r\n\r\n        <th *ngIf=\"tableType === 'home'\"\r\n            [nzWidth]=\"'70px'\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n        <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n            [class.bps-table4-custom-row]=\"data.bpsTable4CustomRow\"\r\n            [class.bps-table-home-expanded-row]=\"mapOfExpandData[data[config.fieldId]]\"\r\n            (click)=\"clickRow($event, data)\"\r\n            [class.bps-table-pair-row]=\"tableType === 'report' && !(i % 2)\">\r\n\r\n          <ng-container *ngIf=\"expandable\">\r\n            <td nzShowExpand\r\n                style=\"border-bottom: none !important\"\r\n                (nzExpandChange)=\"expandRow(data, $event)\"\r\n                [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\"></td>\r\n          </ng-container>\r\n\r\n          <td *ngFor=\"let field of getFields(); index as fi\"\r\n              [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div (dblclick)=\"startEdit(data, $event)\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td *ngIf=\"tableType === 'home'\">\r\n            <i class=\"bps-table-home-more-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'moreBtnClicked')\"\r\n               [bpsDropdownMenu]=\"moreMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n            <i class=\"bps-table-home-delete-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'deleteBtnClicked')\"\r\n               [bpsDropdownMenu]=\"deleteMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <ng-container *ngIf=\"expandable\">\r\n          <tr [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\">\r\n            <td [attr.colspan]=\"getFields().length + 2\">\r\n              <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{data: data, index: i}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #customFilter>\r\n  <div class=\"bps-table-filter-icon\">\r\n    <bps-input-group [bpsPrefix]=\"searchPrefixIcon\"\r\n                     (mouseenter)=\"searchBoxHovered = true;\"\r\n                     (mouseleave)=\"searchBoxHovered = false;\"\r\n                     class=\"bps-table-custom-filter\">\r\n      <input bps-input\r\n             nz-th-extra\r\n             class=\"bps-table-filter-custom-input\"\r\n             (click)=\"preventDefault($event)\"\r\n             (keyup)=\"updateSearch($event.target.value)\"\r\n             nzTableFilter>\r\n    </bps-input-group>\r\n  </div>\r\n  \r\n  <ng-template #searchPrefixIcon let-disabled=\"false\">\r\n    <ng-container *ngIf=\"!searchBoxHovered  && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_enabled.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"searchBoxHovered && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_hover_activated.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_disabled.svg\" />\r\n    </ng-container>\r\n  </ng-template>\r\n</ng-template>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel),::ng-deep .bps-table .ant-table-thead>tr>th{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}::ng-deep .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}::ng-deep .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel){background:#313b3f!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}::ng-deep .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}::ng-deep .bps-table-report .bps-table .ant-table-header{box-shadow:0 2px 8px 0 #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;padding-right:7px!important;border-top:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-header{box-shadow:0 2px 8px 0 #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column{padding-left:20px!important}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table .ant-table-expand-icon-th,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table .ant-table-row-expanded::after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row.ant-table-expanded-row .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row) .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}::ng-deep .bps-table .anticon svg{display:none!important}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after{content:''}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:.3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{padding:4px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px)}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;transition:.3s;width:11px}.bps-table-filter-custom-input{border:1px solid #535353!important;background-color:#343434!important;padding-left:24px!important;transition:.3s}.bps-table-filter-custom-input:hover{border:1px solid #535353!important}.bps-table-home-more-icon::after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon::after{content:url(/assets/bps-icons/sps_x_icon_home_enabled.svg);position:relative}.bps-table-home-more-icon{margin-right:11px}.bps-table-home-delete-icon,.bps-table-home-more-icon{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-delete-icon:hover,.bps-table-home-more-icon:hover{cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon::after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon::after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon::after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon::after{content:url(/assets/bps-icons/sps_x_icon_home_hover_active.svg)}::ng-deep .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{font-size:11px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important;border-top:none!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer;box-shadow:0 1px 0 #445c67 inset,0 -1px 0 #445c67 inset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}.bps-table-glass-filter::-webkit-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-moz-placeholder{color:#666;font-size:10px}.bps-table-glass-filter:-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 0 #445c67 inset,0 1px 0 #445c67 inset,0 -1px 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px 0 #445c67 inset,0 -1px 0 #445c67 inset,-1px 0 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:.3s}.bps-td-disabled{cursor:not-allowed}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px 0 #00a2d1 inset,0 -1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 0 #00a2d1 inset,0 1px 0 #00a2d1 inset,0 -1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child{box-shadow:0 1px 0 #00a2d1 inset,0 -1px 0 #00a2d1 inset,-1px 0 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td{background-color:#253d47!important}::ng-deep .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}"]
        })
        // tslint:disable-next-line no-any
    ], BpsTableComponent);
    return BpsTableComponent;
}());
export { BpsTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy10YWJsZS9icHMtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixXQUFXLEVBQ1gsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQVUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBYXJFO0lBdUlFLDJCQUNVLEdBQXNCLEVBQ3RCLElBQW1CO1FBRG5CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQWU7UUF4STdCLFdBQU0sR0FBUSxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7UUFDdkMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDdkMsa0JBQWEsR0FBcUIsRUFBRSxDQUFDO1FBQ3JDLG9CQUFlLEdBQStCLEVBQUUsQ0FBQztRQUNqRCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FB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LEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzsyREFBMEI7SUFHNUY7UUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3REFNMUM7SUEvRVUsaUJBQWlCO1FBVDdCLFNBQVMsQ0FBQztZQUNULCtDQUErQztZQUMvQyxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsVUFBVTtZQUNwQiwyM09BQXlDO1lBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO1FBQ0Ysa0NBQWtDO09BQ3JCLGlCQUFpQixDQXdRN0I7SUFBRCx3QkFBQztDQUFBLEFBeFFELElBd1FDO1NBeFFZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIGNvbmZpZyB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnpTaXplTURTVHlwZSwgdG9Cb29sZWFufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgVGFibGVDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgQ2VsZFR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL2NlbGRUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1pbnB1dC9icHMtaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCB0eXBlIEJwc1RhYmxlVHlwZSA9ICdyZXBvcnQnIHwgJ2hvbWUnIHwgJ2dsYXNzX3Byb2ZpbGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Jwcy10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdicHNUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBCcHNUYWJsZUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY2hlY2tib3hDYWNoZTogQ2hlY2tib3hTZWxlY3RbXSA9IFtdO1xyXG4gIG1hcE9mRXhwYW5kRGF0YTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICBfZGF0YSA9IFtdO1xyXG4gIGVkaXRJZCA9IG51bGw7XHJcbiAgaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIHNlYXJjaEJveEhvdmVyZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zZWFyY2hTdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiBUYWJsZSBBUEkgKi8gXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XHJcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VycmVudFBhZ2VEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHF1ZXJ5UGFyYW1zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kYmxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbi8qIFRoZWFkIEFQSSAqL1xyXG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgLyogQlBTIEFQSSAqLyBcclxuICBASW5wdXQoKSBjb25maWc6IFRhYmxlQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJsZUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHRhYmxlVHlwZTogQnBzVGFibGVUeXBlID0gJ3JlcG9ydCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIG1vcmVCdG5DbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVCdG5DbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIG1vcmVNZW51OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIGRlbGV0ZU1lbnU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgcm93RXhwYW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0SWQgIT09IG51bGwgJiYgdGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydChzb3J0OiB7IGtleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpZWxkOiBhbnkgPSB0aGlzLmdldEZpZWxkcygpLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvcGVydHkgPT09IHNvcnQua2V5KVswXTtcclxuICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBzb3J0LmtleSwgc29ydFZhbHVlOiBzb3J0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgZW1pdE9uRWRpdEV2ZW50KCkge1xyXG4gICAgbGV0IGVkaXRlZEVsID0gdGhpcy5fZGF0YS5maWx0ZXIoZWwgPT4gZWxbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IHRoaXMuZWRpdElkKTtcclxuICAgIGlmIChlZGl0ZWRFbC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdChlZGl0ZWRFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIGlmICgkZXZlbnQua2V5ID09PSAoJ0VudGVyJyB8fCAnZW50ZXInKSkge1xyXG4gICAgICB0aGlzLmVtaXRPbkVkaXRFdmVudCgpO1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZW1pdEJwc0V2ZW50KCRldmVudCwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAncGFnZUluZGV4JzpcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1cnJlbnRQYWdlRGF0YSc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdxdWVyeVBhcmFtcyc6XHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtc0NoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BhZ2VTaXplJzpcclxuICAgICAgICB0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW9yZUJ0bkNsaWNrZWQnOlxyXG4gICAgICAgIHRoaXMubW9yZUJ0bkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZWxldGVCdG5DbGlja2VkJzpcclxuICAgICAgICB0aGlzLmRlbGV0ZUJ0bkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuX3NldFNlYXJjaFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0U2VhcmNoU3Vic2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgKS5zdWJzY3JpYmUoKHNlYXJjaFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHNlYXJjaFZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNlYXJjaChzZWFyY2hUZXh0VmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC5uZXh0KHNlYXJjaFRleHRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX3NlYXJjaFN1YmplY3QudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGdldFREQ2xhc3NNYXAoZmllbGQ6IEZpZWxkLCBkYXRhLCBmaSA9IDk5OTkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmZpZWxkLm5nQ2xhc3MsXHJcbiAgICAgIFsnYnBzLXRkLWRpc2FibGVkJ106IGRhdGEuZGlzYWJsZWQsXHJcbiAgICAgIFsnYnBzLXRkLW5vLXBhZGRpbmcnXTogZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gdGhpcy5lZGl0SWQsXHJcbiAgICAgIFsnYnBzLWZzdC1jb2x1bW4nXTogIWZpLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RlZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLnRoaXMuY2hlY2tib3hDYWNoZV07XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tJdGVtID0gdGVtcC5maWx0ZXIoZSA9PiBlLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrSXRlbS5sZW5ndGggPyBjaGVja0l0ZW1bMF0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kUm93KGRhdGEsICF0aGlzLm1hcE9mRXhwYW5kRGF0YVtkYXRhW2tleV1dKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrcyA9PT0gMil7XHJcbiAgICAgICAgdGhpcy5vbmRibGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChkYXRhOiBhbnksIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0ICYmICFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhkYXRhOiBhbnksIHNlbGVjdGlvbk9ubHkgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICghc2VsZWN0aW9uT25seSkge1xyXG4gICAgICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgZXhwYW5kUm93KGRhdGEsICRldmVudCkge1xyXG4gICAgdGhpcy5tYXBPZkV4cGFuZERhdGEgPSB7fTtcclxuICAgIHRoaXMubWFwT2ZFeHBhbmREYXRhW2RhdGFbdGhpcy5jb25maWcuZmllbGRJZF1dID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hTZWxlY3Qge1xyXG4gIGRhdGE6IGFueTtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxufVxyXG4iXX0=