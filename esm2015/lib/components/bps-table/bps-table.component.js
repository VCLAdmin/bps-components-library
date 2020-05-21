import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, AfterViewInit, TemplateRef, ViewChild, TrackByFunction, OnChanges, SimpleChanges, ElementRef, HostListener, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { CeldType } from '../core/enums/celdType.enum';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
let BpsTableComponent = 
// tslint:disable-next-line no-any
class BpsTableComponent {
    constructor(cdr, i18n) {
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
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
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
            case 'sort':
                this.sortChange.emit($event);
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
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return Object.assign(Object.assign({}, field.ngClass), { ['bps-td-disabled']: data.disabled, ['bps-td-no-padding']: data[this.config.fieldId] === this.editId, ['bps-fst-column']: !fi });
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
                data: Object.assign({}, item)
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
        }
    }
    selectRow(data) {
        if (!data.disabled) {
            this.onclickRow.emit(data);
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = !item.selected;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
        }
    }
};
BpsTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
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
export { BpsTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy10YWJsZS9icHMtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDYixXQUFXLEVBQ1gsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBVSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVVyRSxJQUFhLGlCQUFpQjtBQUQ5QixrQ0FBa0M7QUFDbEMsTUFBYSxpQkFBaUI7SUFrSDVCLFlBQ1UsR0FBc0IsRUFDdEIsSUFBbUI7UUFEbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQW5IN0IsV0FBTSxHQUFRLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUN2QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxrQkFBYSxHQUFxQixFQUFFLENBQUM7UUFDckMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxJ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VCxNQUFNLEVBQUU7Z0VBQWlEO0FBQ2hEO0lBQVQsTUFBTSxFQUFFOzREQUE2QztBQUM1QztJQUFULE1BQU0sRUFBRTt5REFBMEM7QUFDekM7SUFBVCxNQUFNLEVBQUU7cURBQXNDO0FBQ3JDO0lBQVQsTUFBTSxFQUFFOzBEQUEyQztBQUczQztJQUFSLEtBQUssRUFBRTtxREFBb0I7QUFDbEI7SUFBVCxNQUFNLEVBQUU7cURBQXNDO0FBR3RDO0lBQVIsS0FBSyxFQUFFO2lEQUFxQjtBQUNuQjtJQUFULE1BQU0sRUFBRTt1REFBMkU7QUFDM0U7SUFBUixLQUFLLEVBQUU7aURBQWdCO0FBQ2Q7SUFBVCxNQUFNLEVBQUU7aURBQWtDO0FBRXdCO0lBQWxFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO3VEQUEwQjtBQUc1RjtJQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29EQU0xQztBQXJFVSxpQkFBaUI7SUFSN0IsU0FBUyxDQUFDO1FBQ1QsK0NBQStDO1FBQy9DLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLG10SEFBeUM7O0tBRTFDLENBQUM7SUFDRixrQ0FBa0M7R0FDckIsaUJBQWlCLENBb043QjtTQXBOWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgY29uZmlnIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnpTaXplTURTVHlwZSwgdG9Cb29sZWFufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgVGFibGVDb25maWcsIEZpZWxkIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy90ZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IENlbGRUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy9jZWxkVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtaW5wdXQvYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnBzLXRhYmxlJyxcclxuICBleHBvcnRBczogJ2Jwc1RhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdGFibGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIEJwc1RhYmxlQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgbG9jYWxlOiBhbnkgPSB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBjaGVja2JveENhY2hlOiBDaGVja2JveFNlbGVjdFtdID0gW107XHJcbiAgX2RhdGEgPSBbXTtcclxuICBlZGl0SWQgPSBudWxsO1xyXG5cclxuICAvKiBUYWJsZSBBUEkgKi8gXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIGl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHtcclxuICAgICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnO1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XHJcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VycmVudFBhZ2VEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHF1ZXJ5UGFyYW1zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4vKiBUaGVhZCBBUEkgKi9cclxuICBASW5wdXQoKSBzaW5nbGVTb3J0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBcclxuICAvKiBCUFMgQVBJICovIFxyXG4gIEBJbnB1dCgpIGNvbmZpZzogVGFibGVDb25maWc7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFibGVDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKEJwc0lucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXRPbkVkaXRFdmVudCgpIHtcclxuICAgIGxldCBlZGl0ZWRFbCA9IHRoaXMuX2RhdGEuZmlsdGVyKGVsID0+IGVsW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSB0aGlzLmVkaXRJZCk7XHJcbiAgICBpZiAoZWRpdGVkRWwubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZWRpdGVkRWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldmVudERlZmF1bHQoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGVtaXRCcHNFdmVudCgkZXZlbnQsIHR5cGU6IHN0cmluZykge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3BhZ2VJbmRleCc6XHJcbiAgICAgICAgdGhpcy5wYWdlSW5kZXhDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjdXJyZW50UGFnZURhdGEnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncXVlcnlQYXJhbXMnOlxyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbXNDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYWdlU2l6ZSc6XHJcbiAgICAgICAgdGhpcy5wYWdlU2l6ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NvcnQnOlxyXG4gICAgICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZy5maWVsZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5oaWRkZW4gPT09IHVuZGVmaW5lZCB8fCAhaXRlbS5oaWRkZW4pIDogW107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiB0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4gZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLlRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZURlZmF1bHQoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICByZXR1cm4gZmllbGQuY2VsZFR5cGUgPT09IENlbGRUeXBlLkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRURENsYXNzTWFwKGZpZWxkOiBGaWVsZCwgZGF0YSwgZmkgPSA5OTk5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5maWVsZC5uZ0NsYXNzLFxyXG4gICAgICBbJ2Jwcy10ZC1kaXNhYmxlZCddOiBkYXRhLmRpc2FibGVkLFxyXG4gICAgICBbJ2Jwcy10ZC1uby1wYWRkaW5nJ106IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IHRoaXMuZWRpdElkLFxyXG4gICAgICBbJ2Jwcy1mc3QtY29sdW1uJ106ICFmaSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzUm93U2VsZWN0ZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIHJldHVybiBkYXRhU2VsZWN0ZWQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLl9kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZCA/IGl0ZW0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiB7IC4uLml0ZW0gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tzID0gMDtcclxuICBjbGlja1JvdyhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrcyA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Um93KGRhdGEpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChkYXRhOiBhbnksIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0ICYmICFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhkYXRhOiBhbnkpIHtcclxuICAgIGlmICghZGF0YS5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9ICFpdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94U2VsZWN0IHtcclxuICBkYXRhOiBhbnk7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuIl19