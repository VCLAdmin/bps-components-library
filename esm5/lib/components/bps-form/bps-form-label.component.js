import { __decorate, __extends, __param } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, OnDestroy, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { toBoolean, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { BpsFormItemComponent } from './bps-form-item.component';
var BpsFormLabelComponent = /** @class */ (function (_super) {
    __extends(BpsFormLabelComponent, _super);
    function BpsFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this.bpsRequired = false;
        _this.defaultNoColon = false;
        _this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        return _this;
    }
    Object.defineProperty(BpsFormLabelComponent.prototype, "bpsNoColon", {
        get: function () {
            return !!this.noColon;
        },
        set: function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    BpsFormLabelComponent.prototype.setDefaultNoColon = function (value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    };
    BpsFormLabelComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BpsFormLabelComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    BpsFormLabelComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: BpsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], BpsFormLabelComponent.prototype, "bpsFor", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
    __decorate([
        Input()
    ], BpsFormLabelComponent.prototype, "bpsNoColon", null);
    BpsFormLabelComponent = __decorate([
        Component({
            selector: 'bps-form-label',
            exportAs: 'bpsFormLabel',
            providers: [NzUpdateHostClassService],
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n"
        }),
        __param(2, Optional()), __param(2, Host()),
        __param(3, Optional()), __param(3, Host())
    ], BpsFormLabelComponent);
    return BpsFormLabelComponent;
}(NzColDirective));
export { BpsFormLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0tbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFXakU7SUFBMkMseUNBQWM7SUFjdkQsK0JBQ0Usd0JBQWtELEVBQ2xELFVBQXNCLEVBQ0YsbUJBQXlDLEVBQ3pDLGNBQThCLEVBQ2xELFFBQW1CLEVBQ1gsR0FBc0I7UUFOaEMsWUFRRSxrQkFBTSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLElBQUksY0FBYyxFQUFFLFFBQVEsQ0FBQyxTQUU3RjtRQUpTLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEJQLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBUzdDLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGFBQU8sR0FBcUIsU0FBUyxDQUFDO1FBV3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztJQUNyRSxDQUFDO0lBcEJELHNCQUFJLDZDQUFVO2FBR2Q7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFMRCxVQUFlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFvQkQsaURBQWlCLEdBQWpCLFVBQWtCLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsV0FBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsaUJBQU0sZUFBZSxXQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBdEIyQix3QkFBd0I7Z0JBQ3RDLFVBQVU7Z0JBQ21CLG9CQUFvQix1QkFBNUQsUUFBUSxZQUFJLElBQUk7Z0JBQ21CLGNBQWMsdUJBQWpELFFBQVEsWUFBSSxJQUFJO2dCQUNQLFNBQVM7Z0JBQ04saUJBQWlCOztJQW5CdkI7UUFBUixLQUFLLEVBQUU7eURBQWdCO0lBQ0M7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFOzhEQUFxQjtJQUU3QztRQURDLEtBQUssRUFBRTsyREFHUDtJQU5VLHFCQUFxQjtRQVRqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0Msd09BQThDO1NBQy9DLENBQUM7UUFrQkcsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsSUFBSSxFQUFFLENBQUE7UUFDbEIsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsSUFBSSxFQUFFLENBQUE7T0FsQlYscUJBQXFCLENBc0NqQztJQUFELDRCQUFDO0NBQUEsQUF0Q0QsQ0FBMkMsY0FBYyxHQXNDeEQ7U0F0Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuLCBJbnB1dEJvb2xlYW4sIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XHJcblxyXG5pbXBvcnQgeyBCcHNGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtZm9ybS1sYWJlbCcsXHJcbiAgZXhwb3J0QXM6ICdicHNGb3JtTGFiZWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWZvcm0tbGFiZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNGb3JtTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgYnBzRm9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzTm9Db2xvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5ub0NvbG9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IGJwc05vQ29sb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLm5vQ29sb247XHJcbiAgfVxyXG5cclxuICBkZWZhdWx0Tm9Db2xvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIG5vQ29sb246IGJvb2xlYW4gfCBzdHJpbmcgPSAnZGVmYXVsdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuekZvcm1JdGVtQ29tcG9uZW50OiBCcHNGb3JtSXRlbUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmLCBuekZvcm1JdGVtQ29tcG9uZW50IHx8IG56Um93RGlyZWN0aXZlLCByZW5kZXJlcik7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWxhYmVsJyk7XHJcbiAgfVxyXG5cclxuICBzZXREZWZhdWx0Tm9Db2xvbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kZWZhdWx0Tm9Db2xvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=