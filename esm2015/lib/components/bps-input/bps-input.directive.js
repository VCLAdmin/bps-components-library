import { __decorate } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
let BpsInputDirective = class BpsInputDirective {
    constructor(renderer, elementRef) {
        this.bpsSize = 'default';
        this.disabled = false;
        this.centered = false;
        this.opened = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
};
BpsInputDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
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
            '[class.ant-input-lg]': `bpsSize === 'large'`,
            '[class.ant-input-sm]': `bpsSize === 'small'`,
            '[class.bps-input-centered]': `centered`,
            '[class.bps-input-opened]': `opened`
        }
    })
], BpsInputDirective);
export { BpsInputDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9icHMtaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFhakUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFNNUIsWUFBWSxRQUFtQixFQUFFLFVBQXNCO1FBTDlDLFlBQU8sR0FBa0IsU0FBUyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR3RDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0YsQ0FBQTs7WUFIdUIsU0FBUztZQUFjLFVBQVU7O0FBTDlDO0lBQVIsS0FBSyxFQUFFO2tEQUFvQztBQUNuQjtJQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7bURBQWtCO0FBQ2pCO0lBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTttREFBa0I7QUFDakI7SUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO2lEQUFnQjtBQUo3QixpQkFBaUI7SUFYN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFO1lBQ0osNEJBQTRCLEVBQUUsVUFBVTtZQUN4QyxzQkFBc0IsRUFBRSxxQkFBcUI7WUFDN0Msc0JBQXNCLEVBQUUscUJBQXFCO1lBQzdDLDRCQUE0QixFQUFFLFVBQVU7WUFDeEMsMEJBQTBCLEVBQUUsUUFBUTtTQUNyQztLQUNGLENBQUM7R0FDVyxpQkFBaUIsQ0FTN0I7U0FUWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ticHMtaW5wdXRdJyxcbiAgZXhwb3J0QXM6ICdicHNJbnB1dCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWxnXSc6IGBicHNTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zbV0nOiBgYnBzU2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5icHMtaW5wdXQtY2VudGVyZWRdJzogYGNlbnRlcmVkYCxcbiAgICAnW2NsYXNzLmJwcy1pbnB1dC1vcGVuZWRdJzogYG9wZW5lZGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGJwc1NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2VudGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5lZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtaW5wdXQnKTtcbiAgfVxufVxuIl19