import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzDirectionVHType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { BehaviorSubject } from 'rxjs';
let BpsListComponent = class BpsListComponent {
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.bpsBordered = false;
        this.bpsDisabled = false;
        this.bpsListType = 'variation1';
        this.bpsItemLayout = 'horizontal';
        this.bpsLoading = false;
        this.bpsSize = 'default';
        this.bpsSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.bpsItemLayout);
    }
    _setClassMap() {
        const classMap = {
            ['bps-cmacs-custom-scrollbar']: true,
            [this.prefixCls]: true,
            [`bps-list-type-${this.bpsListType}`]: true,
            [`${this.prefixCls}-vertical`]: this.bpsItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.bpsSize === 'large',
            [`${this.prefixCls}-sm`]: this.bpsSize === 'small',
            [`${this.prefixCls}-split`]: this.bpsSplit,
            [`${this.prefixCls}-bordered`]: this.bpsBordered,
            [`${this.prefixCls}-loading`]: this.bpsLoading,
            [`${this.prefixCls}-grid`]: this.bpsGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.bpsLoadMore || this.bpsPagination || this.bpsFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    ngOnInit() {
        this._setClassMap();
    }
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.bpsItemLayout) {
            this.itemLayoutNotifySource.next(this.bpsItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
};
BpsListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService }
];
__decorate([
    Input()
], BpsListComponent.prototype, "bpsDataSource", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsBordered", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsDisabled", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsGrid", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsListType", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsHeader", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsFooter", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsItemLayout", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsRenderItem", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsLoading", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsLoadMore", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsPagination", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsSize", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListComponent.prototype, "bpsSplit", void 0);
__decorate([
    Input()
], BpsListComponent.prototype, "bpsNoResult", void 0);
BpsListComponent = __decorate([
    Component({
        selector: 'bps-list, [bps-list]',
        exportAs: 'bpsList',
        template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n",
        providers: [NzUpdateHostClassService],
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [`
      bps-list,
      bps-list nz-spin {
        display: block;
      }
    `, ".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:1px solid #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}"]
    })
], BpsListComponent);
export { BpsListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGFBQWEsRUFDYixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUcsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQXVCbkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFnRTNCLFlBQW9CLEVBQWMsRUFBVSxzQkFBZ0Q7UUFBeEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7UUEzRG5FLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXBCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBDLGdCQUFXLEdBQWdCLFlBQVksQ0FBQztRQU14QyxrQkFBYSxHQUFzQixZQUFZLENBQUM7UUFJaEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU1uQyxZQUFPLEdBQWtCLFNBQVMsQ0FBQztRQUVuQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBSXpDLGFBQWE7UUFFYixpQkFBaUI7UUFFVCxjQUFTLEdBQUcsVUFBVSxDQUFDO1FBbUIvQixhQUFhO1FBRUwsMkJBQXNCLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQU1HLENBQUM7SUF6QnhGLFlBQVk7UUFDbEIsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFDLDRCQUE0QixDQUFDLEVBQUUsSUFBSTtZQUNwQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJO1lBQ3RCLENBQUMsaUJBQWlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVTtZQUNqRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPO1lBQ2xELENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU87WUFDbEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNoRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDOUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzlHLENBQUM7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFNRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQ0YsQ0FBQTs7WUFoQnlCLFVBQVU7WUFBa0Msd0JBQXdCOztBQTdEbkY7SUFBUixLQUFLLEVBQUU7dURBQXNCO0FBRUw7SUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO3FEQUFxQjtBQUVwQjtJQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7cURBQXFCO0FBRXBDO0lBQVIsS0FBSyxFQUFFO2lEQUFxQjtBQUVwQjtJQUFSLEtBQUssRUFBRTtxREFBeUM7QUFFeEM7SUFBUixLQUFLLEVBQUU7bURBQXVDO0FBRXRDO0lBQVIsS0FBSyxFQUFFO21EQUF1QztBQUV0QztJQUFSLEtBQUssRUFBRTt1REFBaUQ7QUFFaEQ7SUFBUixLQUFLLEVBQUU7dURBQWtDO0FBRWpCO0lBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTtvREFBb0I7QUFFbkM7SUFBUixLQUFLLEVBQUU7cURBQWdDO0FBRS9CO0lBQVIsS0FBSyxFQUFFO3VEQUFrQztBQUVqQztJQUFSLEtBQUssRUFBRTtpREFBb0M7QUFFbkI7SUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO2tEQUFpQjtBQUVoQztJQUFSLEtBQUssRUFBRTtxREFBeUM7QUEvQnRDLGdCQUFnQjtJQWxCNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsU0FBUztRQUNuQixvOERBQXdDO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ3JDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBRTdDOzs7OztLQUtDO0tBR0osQ0FBQztHQUNXLGdCQUFnQixDQWdGNUI7U0FoRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE56RGlyZWN0aW9uVkhUeXBlLCBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TGlzdEdyaWQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmV4cG9ydCB0eXBlIEJwc0xpc3RUeXBlID0gJ3ZhcmlhdGlvbjEnIHwgJ3ZhcmlhdGlvbjInIHwgJ3ZhcmlhdGlvbjMnIHwgJ3ZhcmlhdGlvbjQnIHwgJ3ZhcmlhdGlvbjUnIHwgJ3ZhcmlhdGlvbjYnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtbGlzdCwgW2Jwcy1saXN0XScsXHJcbiAgZXhwb3J0QXM6ICdicHNMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLWxpc3QsXHJcbiAgICAgIGJwcy1saXN0IG56LXNwaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBicHNEYXRhU291cmNlOiBhbnlbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0JvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBicHNHcmlkOiBOekxpc3RHcmlkO1xyXG5cclxuICBASW5wdXQoKSBicHNMaXN0VHlwZTogQnBzTGlzdFR5cGUgPSAndmFyaWF0aW9uMSc7XHJcblxyXG4gIEBJbnB1dCgpIGJwc0hlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGJwc0Zvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGJwc0l0ZW1MYXlvdXQ6IE56RGlyZWN0aW9uVkhUeXBlID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBASW5wdXQoKSBicHNSZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnBzTG9hZE1vcmU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBicHNQYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1NwbGl0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgYnBzTm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1saXN0JztcclxuXHJcbiAgcHJpdmF0ZSBfc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWydicHMtY21hY3MtY3VzdG9tLXNjcm9sbGJhciddOiB0cnVlLFxyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYGJwcy1saXN0LXR5cGUtJHt0aGlzLmJwc0xpc3RUeXBlfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYF06IHRoaXMuYnBzSXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sZ2BdOiB0aGlzLmJwc1NpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc21gXTogdGhpcy5icHNTaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwbGl0YF06IHRoaXMuYnBzU3BsaXQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYm9yZGVyZWRgXTogdGhpcy5icHNCb3JkZXJlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMuYnBzTG9hZGluZyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ncmlkYF06IHRoaXMuYnBzR3JpZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtYF06ICEhKHRoaXMuYnBzTG9hZE1vcmUgfHwgdGhpcy5icHNQYWdpbmF0aW9uIHx8IHRoaXMuYnBzRm9vdGVyKVxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgaXRlbUxheW91dE5vdGlmeVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSFR5cGU+KHRoaXMuYnBzSXRlbUxheW91dCk7XHJcblxyXG4gIGdldCBpdGVtTGF5b3V0Tm90aWZ5JCgpOiBPYnNlcnZhYmxlPE56RGlyZWN0aW9uVkhUeXBlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5icHNJdGVtTGF5b3V0KSB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5uZXh0KHRoaXMuYnBzSXRlbUxheW91dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=