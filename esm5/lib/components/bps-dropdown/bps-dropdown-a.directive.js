import { __decorate } from "tslib";
import { Directive, ElementRef, Renderer2 } from '@angular/core';
var BpsDropDownADirective = /** @class */ (function () {
    function BpsDropDownADirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
    }
    BpsDropDownADirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    BpsDropDownADirective = __decorate([
        Directive({
            selector: 'a[bps-dropdown]',
            exportAs: 'bpsDropdown'
        })
    ], BpsDropDownADirective);
    return BpsDropDownADirective;
}());
export { BpsDropDownADirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi1hLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpFO0lBQ0UsK0JBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RSxDQUFDOztnQkFGK0IsVUFBVTtnQkFBb0IsU0FBUzs7SUFENUQscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztPQUNXLHFCQUFxQixDQUlqQztJQUFELDRCQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYVticHMtZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICdicHNEcm9wZG93bidcbn0pXG5leHBvcnQgY2xhc3MgQnBzRHJvcERvd25BRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWRyb3Bkb3duLWxpbmsnKTtcbiAgfVxufVxuIl19