import { __decorate, __extends, __param } from "tslib";
import { ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType, InputBoolean } from 'ng-zorro-antd/core';
import { BpsToolTipComponent } from './bps-tooltip.component';
import { NzTooltipBaseDirective } from '../bps-popover/base/nz-tooltip-base.directive';
import { NzTooltipTrigger, NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
var BpsTooltipDirective = /** @class */ (function (_super) {
    __extends(BpsTooltipDirective, _super);
    function BpsTooltipDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, _tooltip, noAnimation) || this;
        _this.popoverType = 'variation_8a';
        _this.tooltipDisabled = false;
        _this.componentFactory = _this.resolver.resolveComponentFactory(BpsToolTipComponent);
        return _this;
    }
    BpsTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzTooltipBaseComponentLegacy, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        Input('bpsTooltipTitle')
    ], BpsTooltipDirective.prototype, "specificTitle", void 0);
    __decorate([
        Input('bps-tooltip')
    ], BpsTooltipDirective.prototype, "directiveNameTitle", void 0);
    __decorate([
        Input('bpsTooltipTrigger')
    ], BpsTooltipDirective.prototype, "specificTrigger", void 0);
    __decorate([
        Input('bpsTooltipPlacement')
    ], BpsTooltipDirective.prototype, "specificPlacement", void 0);
    __decorate([
        Input('bpsTooltipType')
    ], BpsTooltipDirective.prototype, "popoverType", void 0);
    __decorate([
        Input('bpsTooltipDisabled'), InputBoolean()
    ], BpsTooltipDirective.prototype, "tooltipDisabled", void 0);
    BpsTooltipDirective = __decorate([
        Directive({
            selector: '[bps-tooltip]',
            exportAs: 'bpsTooltip',
            host: {
                '[class.ant-tooltip-open]': 'isTooltipComponentVisible',
                '[class.bps-tooltip-disabled]': 'tooltipDisabled'
            }
        }),
        __param(4, Optional()),
        __param(5, Host()), __param(5, Optional())
    ], BpsTooltipDirective);
    return BpsTooltipDirective;
}(NzTooltipBaseDirective));
export { BpsTooltipDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYnBzLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXL0U7SUFBeUMsdUNBQXNCO0lBa0I3RCw2QkFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLFFBQXVDLEVBQy9CLFdBQW9DO1FBTjFELFlBUUUsa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsU0FDdkU7UUFkd0IsaUJBQVcsR0FBbUIsY0FBYyxDQUFDO1FBQ3pCLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXJFLHNCQUFnQixHQUEwQyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLENBQUM7O0lBV3JILENBQUM7O2dCQVJhLFVBQVU7Z0JBQ1osZ0JBQWdCO2dCQUNoQix3QkFBd0I7Z0JBQ3hCLFNBQVM7Z0JBQ0ksNEJBQTRCLHVCQUFsRCxRQUFRO2dCQUN5QixzQkFBc0IsdUJBQXZELElBQUksWUFBSSxRQUFROztJQXBCTztRQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7OERBQXlCO0lBSzVCO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7bUVBQXFDO0lBRTlCO1FBQTNCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztnRUFBbUM7SUFDaEM7UUFBN0IsS0FBSyxDQUFDLHFCQUFxQixDQUFDO2tFQUEyQjtJQUMvQjtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7NERBQThDO0lBQ3pCO1FBQTVDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLFlBQVksRUFBRTtnRUFBeUI7SUFkMUQsbUJBQW1CO1FBUi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLElBQUksRUFBRTtnQkFDSiwwQkFBMEIsRUFBRSwyQkFBMkI7Z0JBQ3ZELDhCQUE4QixFQUFFLGlCQUFpQjthQUNsRDtTQUNGLENBQUM7UUF3QkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BeEJWLG1CQUFtQixDQTRCL0I7SUFBRCwwQkFBQztDQUFBLEFBNUJELENBQXlDLHNCQUFzQixHQTRCOUQ7U0E1QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJwc1Rvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuL2Jwcy10b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtcG9wb3Zlci9iYXNlL256LXRvb2x0aXAtYmFzZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelRvb2x0aXBUcmlnZ2VyLCBOelRvb2x0aXBCYXNlQ29tcG9uZW50TGVnYWN5IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IEJwc1BvcG92ZXJUeXBlIH0gZnJvbSAnLi4vYnBzLXBvcG92ZXIvYnBzLXBvcG92ZXIuZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy10b29sdGlwXScsXHJcbiAgZXhwb3J0QXM6ICdicHNUb29sdGlwJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10b29sdGlwLW9wZW5dJzogJ2lzVG9vbHRpcENvbXBvbmVudFZpc2libGUnLFxyXG4gICAgJ1tjbGFzcy5icHMtdG9vbHRpcC1kaXNhYmxlZF0nOiAndG9vbHRpcERpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBUaGUgdGl0bGUgdGhhdCBzaG91bGQgaGF2ZSBoaWdoZXN0IHByaW9yaXR5LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFRpdGxlJykgc3BlY2lmaWNUaXRsZTogTnpUU1R5cGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGUgZGlyZWN0aXZlJ3MgbmFtZSBhcyB0aGUgdGl0bGUgdGhhdCBoYXZlIHByaW9yaXR5IGluIHRoZSBzZWNvbmQgcGxhY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCdicHMtdG9vbHRpcCcpIGRpcmVjdGl2ZU5hbWVUaXRsZTogTnpUU1R5cGUgfCBudWxsO1xyXG5cclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFBsYWNlbWVudCcpIHNwZWNpZmljUGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCdicHNUb29sdGlwVHlwZScpIHBvcG92ZXJUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcERpc2FibGVkJykgQElucHV0Qm9vbGVhbigpIHRvb2x0aXBEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PEJwc1Rvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShCcHNUb29sVGlwQ29tcG9uZW50KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIF90b29sdGlwPzogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBfdG9vbHRpcCwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=