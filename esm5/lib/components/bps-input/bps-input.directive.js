import { __decorate } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
var BpsInputDirective = /** @class */ (function () {
    function BpsInputDirective(renderer, elementRef) {
        this.bpsSize = 'default';
        this.disabled = false;
        this.centered = false;
        this.opened = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    BpsInputDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BpsInputDirective.prototype, "bpsSize", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputDirective.prototype, "disabled", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputDirective.prototype, "centered", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputDirective.prototype, "opened", void 0);
    BpsInputDirective = __decorate([
        Directive({
            selector: '[bps-input]',
            exportAs: 'bpsInput',
            host: {
                '[class.ant-input-disabled]': 'disabled',
                '[class.ant-input-lg]': "bpsSize === 'large'",
                '[class.ant-input-sm]': "bpsSize === 'small'",
                '[class.bps-input-centered]': "centered",
                '[class.bps-input-opened]': "opened"
            }
        })
    ], BpsInputDirective);
    return BpsInputDirective;
}());
export { BpsInputDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9icHMtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFhakU7SUFNRSwyQkFBWSxRQUFtQixFQUFFLFVBQXNCO1FBTDlDLFlBQU8sR0FBa0IsU0FBUyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3RDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFGcUIsU0FBUztnQkFBYyxVQUFVOztJQUw5QztRQUFSLEtBQUssRUFBRTtzREFBb0M7SUFDbkI7UUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO3VEQUFrQjtJQUNqQjtRQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7dURBQWtCO0lBQ2pCO1FBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTtxREFBZ0I7SUFKN0IsaUJBQWlCO1FBWDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRTtnQkFDSiw0QkFBNEIsRUFBRSxVQUFVO2dCQUN4QyxzQkFBc0IsRUFBRSxxQkFBcUI7Z0JBQzdDLHNCQUFzQixFQUFFLHFCQUFxQjtnQkFDN0MsNEJBQTRCLEVBQUUsVUFBVTtnQkFDeEMsMEJBQTBCLEVBQUUsUUFBUTthQUNyQztTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FTN0I7SUFBRCx3QkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Jwcy1pbnB1dF0nLFxuICBleHBvcnRBczogJ2Jwc0lucHV0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJzogYGJwc1NpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNtXSc6IGBicHNTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmJwcy1pbnB1dC1jZW50ZXJlZF0nOiBgY2VudGVyZWRgLFxuICAgICdbY2xhc3MuYnBzLWlucHV0LW9wZW5lZF0nOiBgb3BlbmVkYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0lucHV0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjZW50ZXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1pbnB1dCcpO1xuICB9XG59XG4iXX0=