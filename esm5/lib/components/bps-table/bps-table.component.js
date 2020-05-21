import { __assign, __decorate } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, AfterViewInit, TemplateRef, ViewChild, TrackByFunction, OnChanges, SimpleChanges, ElementRef, HostListener, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
        this._data = [];
        this.editId = null;
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
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = false;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.clicks = 0;
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
        if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.emitOnEditEvent();
            this.editId = null;
        }
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
            case 'sort':
                this.sortChange.emit($event);
                break;
        }
    };
    BpsTableComponent.prototype.getFields = function () {
        return this.config ? this.config.fields.filter(function (item) { return item.hidden === undefined || !item.hidden; }) : [];
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
        this.checkboxCache.length = 0;
        this._data.forEach(function (item) {
            _this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: __assign({}, item)
            });
        });
    };
    BpsTableComponent.prototype.clickRow = function (event, data) {
        var _this = this;
        this.clicks++;
        setTimeout(function () {
            if (_this.clicks === 1) {
                _this.selectRow(data);
                event.preventDefault();
                event.stopImmediatePropagation();
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
    BpsTableComponent.prototype.selectRow = function (data) {
        var _this = this;
        if (!data.disabled) {
            this.onclickRow.emit(data);
            this.checkboxCache.forEach(function (item) {
                if (item.data[_this.config.fieldId] === data[_this.config.fieldId]) {
                    item.selected = !item.selected;
                    _this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
        }
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
        Input(), ViewChild('renderItemTemplate')
    ], BpsTableComponent.prototype, "itemRender", void 0);
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
        Output()
    ], BpsTableComponent.prototype, "onedit", void 0);
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
            template: "<div id=\"{{gridID}}\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzItemRender]=\"itemRender\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead (nzSortChange)=\"emitBpsEvent($event, 'sort')\"\r\n           [nzSingleSort]=\"singleSort\">\r\n      <tr>\r\n        <th *ngFor=\"let field of getFields()\"\r\n            [ngClass]=\"field.ngClass\"\r\n            [nzWidth]=\"field.width\">\r\n          <ng-container *ngIf=\"field.template; else cellValue\">\r\n            <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n          </ng-container>\r\n          <ng-template #cellValue>{{field.display}}</ng-template>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let data of gridComponent.data; index as i\"\r\n          [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n          (click)=\"clickRow($event, data)\"\r\n          [class.bps-table-pair-row]=\"!(i % 2)\">\r\n       \r\n        <td *ngFor=\"let field of getFields(); index as fi\"\r\n            [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div (dblclick)=\"startEdit(data, $event)\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n              \r\n            </ng-container>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n",
            styles: ["::ng-deep .bps-table .ant-table-tbody>tr>td,::ng-deep .bps-table .ant-table-thead>tr>th{padding:unset;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table .ant-table-tbody>tr>td{padding:5px;border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td{background:#313b3f!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#363636!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table .ant-table-header.ant-table-hide-scrollbar{margin-bottom:-14px!important;background-color:#262626!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:20px!important}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}"]
        })
        // tslint:disable-next-line no-any
    ], BpsTableComponent);
    return BpsTableComponent;
}());
export { BpsTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy10YWJsZS9icHMtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixXQUFXLEVBQ1gsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBVSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVVyRTtJQWtIRSwyQkFDVSxHQUFzQixFQUN0QixJQUFtQjtRQURuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFlO1FBbkg3QixXQUFNLEdBQVEsRUFBRSxDQUFDLENBQUMsNkJBQTZCO1FBQ3ZDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUNyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLElBQUksQ0FBQztRQVNXLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLFVB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SUFDekI7UUFBdkIsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFO2lFQUEwQjtJQUN4QztRQUFSLEtBQUssRUFBRTtnRUFBdUM7SUFDdEI7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO3lEQUFvQjtJQUNsQztRQUFULE1BQU0sRUFBRTs4REFBMkM7SUFDMUM7UUFBVCxNQUFNLEVBQUU7b0VBQWlEO0lBQ2hEO1FBQVQsTUFBTSxFQUFFO2dFQUE2QztJQUM1QztRQUFULE1BQU0sRUFBRTs2REFBMEM7SUFDekM7UUFBVCxNQUFNLEVBQUU7eURBQXNDO0lBQ3JDO1FBQVQsTUFBTSxFQUFFOzhEQUEyQztJQUczQztRQUFSLEtBQUssRUFBRTt5REFBb0I7SUFDbEI7UUFBVCxNQUFNLEVBQUU7eURBQXNDO0lBR3RDO1FBQVIsS0FBSyxFQUFFO3FEQUFxQjtJQUNuQjtRQUFULE1BQU0sRUFBRTsyREFBMkU7SUFDM0U7UUFBUixLQUFLLEVBQUU7cURBQWdCO0lBQ2Q7UUFBVCxNQUFNLEVBQUU7cURBQWtDO0lBRXdCO1FBQWxFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzJEQUEwQjtJQUc1RjtRQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dEQU0xQztJQXJFVSxpQkFBaUI7UUFSN0IsU0FBUyxDQUFDO1lBQ1QsK0NBQStDO1lBQy9DLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLG10SEFBeUM7O1NBRTFDLENBQUM7UUFDRixrQ0FBa0M7T0FDckIsaUJBQWlCLENBb043QjtJQUFELHdCQUFDO0NBQUEsQUFwTkQsSUFvTkM7U0FwTlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIGNvbmZpZyB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge0lucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE56U2l6ZU1EU1R5cGUsIHRvQm9vbGVhbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFRhYmxlQ29uZmlnLCBGaWVsZCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvdGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvY2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Jwcy10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdicHNUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRhYmxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBCcHNUYWJsZUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY2hlY2tib3hDYWNoZTogQ2hlY2tib3hTZWxlY3RbXSA9IFtdO1xyXG4gIF9kYXRhID0gW107XHJcbiAgZWRpdElkID0gbnVsbDtcclxuXHJcbiAgLyogVGFibGUgQVBJICovIFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gIH1cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSB0b3RhbCA9IDA7XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcGFnaW5hdGlvblBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nIHwgJ2JvdGgnID0gJ2JvdHRvbSc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsb2FkaW5nRGVsYXkgPSAwO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBpdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7XHJcbiAgICAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JztcclxuICAgIHBhZ2U6IG51bWJlcjtcclxuICB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2ltcGxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xyXG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248VD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUVkaXQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcGFnZUluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGN1cnJlbnRQYWdlRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBxdWVyeVBhcmFtc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwYWdlU2l6ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuLyogVGhlYWQgQVBJICovXHJcbiAgQElucHV0KCkgc2luZ2xlU29ydCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgLyogQlBTIEFQSSAqLyBcclxuICBASW5wdXQoKSBjb25maWc6IFRhYmxlQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJsZUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbmVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZChCcHNJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVkaXRJZCAmJiB0aGlzLmlucHV0RWxlbWVudCAmJiB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCkge1xyXG4gICAgICB0aGlzLmVtaXRPbkVkaXRFdmVudCgpO1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0T25FZGl0RXZlbnQoKSB7XHJcbiAgICBsZXQgZWRpdGVkRWwgPSB0aGlzLl9kYXRhLmZpbHRlcihlbCA9PiBlbFt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gdGhpcy5lZGl0SWQpO1xyXG4gICAgaWYgKGVkaXRlZEVsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm9uZWRpdC5lbWl0KGVkaXRlZEVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCwgaW5kZXg6IG51bWJlciwgZGF0YTogYW55ID0gbnVsbCkge1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBlbWl0QnBzRXZlbnQoJGV2ZW50LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdwYWdlSW5kZXgnOlxyXG4gICAgICAgIHRoaXMucGFnZUluZGV4Q2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY3VycmVudFBhZ2VEYXRhJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3F1ZXJ5UGFyYW1zJzpcclxuICAgICAgICB0aGlzLnF1ZXJ5UGFyYW1zQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGFnZVNpemUnOlxyXG4gICAgICAgIHRoaXMucGFnZVNpemVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzb3J0JzpcclxuICAgICAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VERDbGFzc01hcChmaWVsZDogRmllbGQsIGRhdGEsIGZpID0gOTk5OSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZmllbGQubmdDbGFzcyxcclxuICAgICAgWydicHMtdGQtZGlzYWJsZWQnXTogZGF0YS5kaXNhYmxlZCxcclxuICAgICAgWydicHMtdGQtbm8tcGFkZGluZyddOiBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSB0aGlzLmVkaXRJZCxcclxuICAgICAgWydicHMtZnN0LWNvbHVtbiddOiAhZmksXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1Jvd1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTZWxlY3RlZCA9IHRoaXMuY2hlY2tib3hDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKS5tYXAoaXRlbSA9PiBpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICByZXR1cm4gZGF0YVNlbGVjdGVkLmluZGV4T2YoZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hDYWNoZS5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uc2VsZWN0ZWQgPyBpdGVtLnNlbGVjdGVkIDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogeyAuLi5pdGVtIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgY2xpY2tSb3coZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFJvdyhkYXRhKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXQoZGF0YTogYW55LCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMuaW5saW5lRWRpdCAmJiAhZGF0YS5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RSb3coZGF0YTogYW55KSB7XHJcbiAgICBpZiAoIWRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5vbmNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSAhaXRlbS5zZWxlY3RlZDtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFNlbGVjdCB7XHJcbiAgZGF0YTogYW55O1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG59XHJcbiJdfQ==