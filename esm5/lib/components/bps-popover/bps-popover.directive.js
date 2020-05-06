import { __decorate, __extends, __param } from "tslib";
import { ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { BpsPopoverComponent } from './bps-popover.component';
import { NzTooltipBaseDirective } from './base/nz-tooltip-base.directive';
var BpsPopoverDirective = /** @class */ (function (_super) {
    __extends(BpsPopoverDirective, _super);
    function BpsPopoverDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.popoverType = 'variation_1';
        _this.componentFactory = _this.resolver.resolveComponentFactory(BpsPopoverComponent);
        return _this;
    }
    BpsPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: BpsPopoverComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        Input('bpsPopoverTitle')
    ], BpsPopoverDirective.prototype, "specificTitle", void 0);
    __decorate([
        Input('bpsPopoverContent')
    ], BpsPopoverDirective.prototype, "specificContent", void 0);
    __decorate([
        Input('bps-popover')
    ], BpsPopoverDirective.prototype, "directiveNameTitle", void 0);
    __decorate([
        Input('bpsPopoverTrigger')
    ], BpsPopoverDirective.prototype, "specificTrigger", void 0);
    __decorate([
        Input('bpsPopoverPlacement')
    ], BpsPopoverDirective.prototype, "specificPlacement", void 0);
    __decorate([
        Input('bpsPopoverType')
    ], BpsPopoverDirective.prototype, "popoverType", void 0);
    BpsPopoverDirective = __decorate([
        Directive({
            selector: '[bps-popover]',
            exportAs: 'bpsPopover',
            host: {
                '[class.ant-popover-open]': 'isTooltipComponentVisible'
            }
        }),
        __param(4, Optional()),
        __param(5, Host()), __param(5, Optional())
    ], BpsPopoverDirective);
    return BpsPopoverDirective;
}(NzTooltipBaseDirective));
export { BpsPopoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXBvcG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXBvcG92ZXIvYnBzLXBvcG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBWTFFO0lBQXlDLHVDQUFzQjtJQVU3RCw2QkFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNQLE9BQTRCLEVBQ2IsV0FBb0M7UUFOakUsWUFRRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxTQUN0RTtRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFWeEMsaUJBQVcsR0FBbUIsYUFBYSxDQUFDO1FBRXJFLHNCQUFnQixHQUEwQyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLENBQUM7O0lBV3JILENBQUM7O2dCQVJhLFVBQVU7Z0JBQ1osZ0JBQWdCO2dCQUNoQix3QkFBd0I7Z0JBQ3hCLFNBQVM7Z0JBQ0UsbUJBQW1CLHVCQUF2QyxRQUFRO2dCQUNnQyxzQkFBc0IsdUJBQTlELElBQUksWUFBSSxRQUFROztJQWZPO1FBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs4REFBeUI7SUFDdEI7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDO2dFQUEyQjtJQUNoQztRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDO21FQUFxQztJQUM5QjtRQUEzQixLQUFLLENBQUMsbUJBQW1CLENBQUM7Z0VBQW1DO0lBQ2hDO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztrRUFBMkI7SUFDL0I7UUFBeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzREQUE2QztJQU4xRCxtQkFBbUI7UUFQL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsSUFBSSxFQUFFO2dCQUNKLDBCQUEwQixFQUFFLDJCQUEyQjthQUN4RDtTQUNGLENBQUM7UUFnQkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BaEJWLG1CQUFtQixDQW9CL0I7SUFBRCwwQkFBQztDQUFBLEFBcEJELENBQXlDLHNCQUFzQixHQW9COUQ7U0FwQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgQnBzUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vYnBzLXBvcG92ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4vYmFzZS9uei10b29sdGlwLWJhc2UuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCB0eXBlIEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl8xJyB8ICd2YXJpYXRpb25fMicgfCAndmFyaWF0aW9uXzMnIHwgJ3ZhcmlhdGlvbl80JyB8ICd2YXJpYXRpb25fNScgfCAndmFyaWF0aW9uXzYnIHwgJ3ZhcmlhdGlvbl83YScgfFxyXG4gICd2YXJpYXRpb25fN2InIHwgJ3ZhcmlhdGlvbl84YScgfCAndmFyaWF0aW9uXzhiJyB8ICd2YXJpYXRpb25fOWEnIHwgJ3ZhcmlhdGlvbl85YicgfCAndmFyaWF0aW9uXzEwJyB8ICd2YXJpYXRpb25fMTEnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLXBvcG92ZXJdJyxcclxuICBleHBvcnRBczogJ2Jwc1BvcG92ZXInLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAnaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyVGl0bGUnKSBzcGVjaWZpY1RpdGxlOiBOelRTVHlwZTtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJDb250ZW50Jykgc3BlY2lmaWNDb250ZW50OiBOelRTVHlwZTtcclxuICBASW5wdXQoJ2Jwcy1wb3BvdmVyJykgZGlyZWN0aXZlTmFtZVRpdGxlOiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3ZlclR5cGUnKSBwb3BvdmVyVHlwZTogQnBzUG9wb3ZlclR5cGUgPSAndmFyaWF0aW9uXzEnO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PEJwc1BvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShCcHNQb3BvdmVyQ29tcG9uZW50KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIHRvb2x0aXA6IEJwc1BvcG92ZXJDb21wb25lbnQsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXAsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcbn1cclxuIl19