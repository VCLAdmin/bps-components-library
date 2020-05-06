import { __decorate, __extends, __param } from "tslib";
import { ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, Host, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective, NzTSType } from 'ng-zorro-antd/core';
import { BpsToolTipComponent } from './bps-tooltip.component';
import { NzTooltipBaseDirective } from '../bps-popover/base/nz-tooltip-base.directive';
import { NzTooltipTrigger, NzTooltipBaseComponentLegacy } from 'ng-zorro-antd';
var BpsTooltipDirective = /** @class */ (function (_super) {
    __extends(BpsTooltipDirective, _super);
    function BpsTooltipDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, _tooltip, noAnimation) || this;
        _this.popoverType = 'variation_8a';
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
    BpsTooltipDirective = __decorate([
        Directive({
            selector: '[bps-tooltip]',
            exportAs: 'bpsTooltip',
            host: {
                '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
            }
        }),
        __param(4, Optional()),
        __param(5, Host()), __param(5, Optional())
    ], BpsTooltipDirective);
    return BpsTooltipDirective;
}(NzTooltipBaseDirective));
export { BpsTooltipDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRvb2x0aXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYnBzLXRvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVUvRTtJQUF5Qyx1Q0FBc0I7SUFpQjdELDZCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsUUFBdUMsRUFDL0IsV0FBb0M7UUFOMUQsWUFRRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxTQUN2RTtRQWJ3QixpQkFBVyxHQUFtQixjQUFjLENBQUM7UUFFdEUsc0JBQWdCLEdBQTBDLEtBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7SUFXckgsQ0FBQzs7Z0JBUmEsVUFBVTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLHdCQUF3QjtnQkFDeEIsU0FBUztnQkFDSSw0QkFBNEIsdUJBQWxELFFBQVE7Z0JBQ3lCLHNCQUFzQix1QkFBdkQsSUFBSSxZQUFJLFFBQVE7O0lBbkJPO1FBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs4REFBeUI7SUFLNUI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzttRUFBcUM7SUFFOUI7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDO2dFQUFtQztJQUNoQztRQUE3QixLQUFLLENBQUMscUJBQXFCLENBQUM7a0VBQTJCO0lBQy9CO1FBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs0REFBOEM7SUFiM0QsbUJBQW1CO1FBUC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLElBQUksRUFBRTtnQkFDSiwwQkFBMEIsRUFBRSwyQkFBMkI7YUFDeEQ7U0FDRixDQUFDO1FBdUJHLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQXZCVixtQkFBbUIsQ0EyQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNCRCxDQUF5QyxzQkFBc0IsR0EyQjlEO1NBM0JZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnBzVG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4vYnBzLXRvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1wb3BvdmVyL2Jhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIsIE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQnBzUG9wb3ZlclR5cGUgfSBmcm9tICcuLi9icHMtcG9wb3Zlci9icHMtcG9wb3Zlci5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLXRvb2x0aXBdJyxcclxuICBleHBvcnRBczogJ2Jwc1Rvb2x0aXAnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAnaXNUb29sdGlwQ29tcG9uZW50VmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNUb29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlIHRoYXQgc2hvdWxkIGhhdmUgaGlnaGVzdCBwcmlvcml0eS5cclxuICAgKi9cclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUaXRsZScpIHNwZWNpZmljVGl0bGU6IE56VFNUeXBlO1xyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhlIGRpcmVjdGl2ZSdzIG5hbWUgYXMgdGhlIHRpdGxlIHRoYXQgaGF2ZSBwcmlvcml0eSBpbiB0aGUgc2Vjb25kIHBsYWNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnYnBzLXRvb2x0aXAnKSBkaXJlY3RpdmVOYW1lVGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgQElucHV0KCdicHNUb29sdGlwVHJpZ2dlcicpIHNwZWNpZmljVHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFR5cGUnKSBwb3BvdmVyVHlwZTogQnBzUG9wb3ZlclR5cGUgPSAndmFyaWF0aW9uXzhhJztcclxuXHJcbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxCcHNUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQnBzVG9vbFRpcENvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBfdG9vbHRpcD86IE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3ksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgX3Rvb2x0aXAsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcbn1cclxuIl19