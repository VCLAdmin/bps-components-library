import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
var BpsListItemMetaComponent = /** @class */ (function () {
    function BpsListItemMetaComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    Object.defineProperty(BpsListItemMetaComponent.prototype, "bpsAvatar", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.avatarStr = '';
                this.avatarTpl = value;
            }
            else {
                this.avatarStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    BpsListItemMetaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], BpsListItemMetaComponent.prototype, "bpsAvatar", null);
    __decorate([
        Input()
    ], BpsListItemMetaComponent.prototype, "bpsTitle", void 0);
    __decorate([
        Input()
    ], BpsListItemMetaComponent.prototype, "bpsDescription", void 0);
    BpsListItemMetaComponent = __decorate([
        Component({
            selector: 'bps-list-item-meta, [bps-list-item-meta]',
            exportAs: 'bpsListItemMeta',
            template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\n  </h4>\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\n  </div>\n</div>\n",
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        })
    ], BpsListItemMetaComponent);
    return BpsListItemMetaComponent;
}());
export { BpsListItemMetaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1saXN0L2Jwcy1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkI7SUFrQkUsa0NBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQnRFLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFrQmIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFmRCxzQkFBSSwrQ0FBUzthQUFiLFVBQWMsS0FBaUM7WUFDN0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBTThCLFVBQVU7Z0JBQW9CLFNBQVM7O0lBYnRFO1FBREMsS0FBSyxFQUFFOzZEQVFQO0lBRVE7UUFBUixLQUFLLEVBQUU7OERBQXNDO0lBRXJDO1FBQVIsS0FBSyxFQUFFO29FQUE0QztJQWhCekMsd0JBQXdCO1FBUnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQix5b0JBQWtEO1lBQ2xELG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7U0FDdEMsQ0FBQztPQUNXLHdCQUF3QixDQXFCcEM7SUFBRCwrQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWxpc3QtaXRlbS1tZXRhLCBbYnBzLWxpc3QtaXRlbS1tZXRhXScsXG4gIGV4cG9ydEFzOiAnYnBzTGlzdEl0ZW1NZXRhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQge1xuICBhdmF0YXJTdHIgPSAnJztcbiAgYXZhdGFyVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgYnBzQXZhdGFyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLmF2YXRhclN0ciA9ICcnO1xuICAgICAgdGhpcy5hdmF0YXJUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBicHNUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgYnBzRGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0tbWV0YScpO1xuICB9XG59XG4iXX0=