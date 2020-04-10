import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
let BpsButtonGroupComponent = class BpsButtonGroupComponent {
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    get bpsSize() {
        return this._size;
    }
    set bpsSize(value) {
        this._size = value;
        this.setClassMap();
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.bpsSize === 'large',
            [`${prefixCls}-sm`]: this.bpsSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
};
BpsButtonGroupComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef }
];
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
export { BpsButtonGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtYnV0dG9uL2Jwcy1idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVc3RSxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQWNsQyxZQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVp0RyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQVlvRixDQUFDO0lBVDFHLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxXQUFXO1FBQ1QsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxHQUFHO1lBQ2YsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJO1lBQ2pCLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMxQyxDQUFDLEdBQUcsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU87WUFDN0MsQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPO1NBQzlDLENBQUM7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFBOztZQWhCK0Msd0JBQXdCO1lBQXNCLFVBQVU7O0FBVHRHO0lBREMsS0FBSyxFQUFFO3NEQUdQO0FBUFUsdUJBQXVCO0lBVG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxtQkFBbUIsRUFBRSxLQUFLO1FBQzFCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ3JDLHVDQUFnRDtLQUNqRCxDQUFDO0dBQ1csdUJBQXVCLENBOEJuQztTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNpemVMRFNUeXBlLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtYnV0dG9uLWdyb3VwJyxcbiAgZXhwb3J0QXM6ICdicHNCdXR0b25Hcm91cCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGJwc1NpemUoKTogTnpTaXplTERTVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgYnBzU2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4tZ3JvdXAnO1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW3ByZWZpeENsc106IHRydWUsXG4gICAgICBbYGFudC1kcm9wZG93bi1idXR0b25gXTogdGhpcy5pc0luRHJvcGRvd24sXG4gICAgICBbYCR7cHJlZml4Q2xzfS1sZ2BdOiB0aGlzLmJwc1NpemUgPT09ICdsYXJnZScsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1zbWBdOiB0aGlzLmJwc1NpemUgPT09ICdzbWFsbCdcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=