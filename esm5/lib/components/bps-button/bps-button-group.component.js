import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
var BpsButtonGroupComponent = /** @class */ (function () {
    function BpsButtonGroupComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    Object.defineProperty(BpsButtonGroupComponent.prototype, "bpsSize", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    BpsButtonGroupComponent.prototype.setClassMap = function () {
        var _a;
        var prefixCls = 'ant-btn-group';
        var classMap = (_a = {},
            _a[prefixCls] = true,
            _a["ant-dropdown-button"] = this.isInDropdown,
            _a[prefixCls + "-lg"] = this.bpsSize === 'large',
            _a[prefixCls + "-sm"] = this.bpsSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    BpsButtonGroupComponent.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    BpsButtonGroupComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BpsButtonGroupComponent.prototype, "bpsSize", null);
    BpsButtonGroupComponent = __decorate([
        Component({
            selector: 'bps-button-group',
            exportAs: 'bpsButtonGroup',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            preserveWhitespaces: false,
            providers: [NzUpdateHostClassService],
            template: "<ng-content></ng-content>\n"
        })
    ], BpsButtonGroupComponent);
    return BpsButtonGroupComponent;
}());
export { BpsButtonGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtYnV0dG9uL2Jwcy1idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVc3RTtJQWNFLGlDQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVp0RyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQVlvRixDQUFDO0lBVDFHLHNCQUFJLDRDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQVksS0FBb0I7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUxBO0lBU0QsNkNBQVcsR0FBWDs7UUFDRSxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBTSxRQUFRO1lBQ1osR0FBQyxTQUFTLElBQUcsSUFBSTtZQUNqQixHQUFDLHFCQUFxQixJQUFHLElBQUksQ0FBQyxZQUFZO1lBQzFDLEdBQUksU0FBUyxRQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPO1lBQzdDLEdBQUksU0FBUyxRQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPO2VBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQWY2Qyx3QkFBd0I7Z0JBQXNCLFVBQVU7O0lBVHRHO1FBREMsS0FBSyxFQUFFOzBEQUdQO0lBUFUsdUJBQXVCO1FBVG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLHVDQUFnRDtTQUNqRCxDQUFDO09BQ1csdUJBQXVCLENBOEJuQztJQUFELDhCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTaXplTERTVHlwZSwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWJ1dHRvbi1ncm91cCcsXG4gIGV4cG9ydEFzOiAnYnBzQnV0dG9uR3JvdXAnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCcHNCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZUxEU1R5cGU7XG4gIGlzSW5Ecm9wZG93biA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBicHNTaXplKCk6IE56U2l6ZUxEU1R5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgc2V0IGJwc1NpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeENscyA9ICdhbnQtYnRuLWdyb3VwJztcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFtwcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW2BhbnQtZHJvcGRvd24tYnV0dG9uYF06IHRoaXMuaXNJbkRyb3Bkb3duLFxuICAgICAgW2Ake3ByZWZpeENsc30tbGdgXTogdGhpcy5icHNTaXplID09PSAnbGFyZ2UnLFxuICAgICAgW2Ake3ByZWZpeENsc30tc21gXTogdGhpcy5icHNTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxufVxuIl19