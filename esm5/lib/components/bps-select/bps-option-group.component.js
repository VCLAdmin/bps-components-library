import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BpsOptionComponent } from './bps-option.component';
var BpsOptionGroupComponent = /** @class */ (function () {
    function BpsOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(BpsOptionGroupComponent.prototype, "bpsLabel", {
        get: function () {
            return this.label;
        },
        set: function (value) {
            this.label = value;
            this.isLabelString = !(this.bpsLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ContentChildren(BpsOptionComponent)
    ], BpsOptionGroupComponent.prototype, "listOfNzOptionComponent", void 0);
    __decorate([
        Input()
    ], BpsOptionGroupComponent.prototype, "bpsLabel", null);
    BpsOptionGroupComponent = __decorate([
        Component({
            selector: 'bps-option-group',
            exportAs: 'bpsOptionGroup',
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>"
        })
    ], BpsOptionGroupComponent);
    return BpsOptionGroupComponent;
}());
export { BpsOptionGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW9wdGlvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUVMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTNUQ7SUFBQTtRQUNFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBYXhCLENBQUM7SUFSQyxzQkFBSSw2Q0FBUTthQUtaO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFQRCxVQUFhLEtBQWlDO1lBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFOb0M7UUFBcEMsZUFBZSxDQUFDLGtCQUFrQixDQUFDOzRFQUF3RDtJQUc1RjtRQURDLEtBQUssRUFBRTsyREFJUDtJQVRVLHVCQUF1QjtRQVBuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MscUNBQWdEO1NBQ2pELENBQUM7T0FDVyx1QkFBdUIsQ0FjbkM7SUFBRCw4QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnBzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1vcHRpb24tZ3JvdXAnLFxuICBleHBvcnRBczogJ2Jwc09wdGlvbkdyb3VwJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25Hcm91cENvbXBvbmVudCB7XG4gIGlzTGFiZWxTdHJpbmcgPSBmYWxzZTtcbiAgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAQ29udGVudENoaWxkcmVuKEJwc09wdGlvbkNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxCcHNPcHRpb25Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBicHNMYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmxhYmVsID0gdmFsdWU7XG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh0aGlzLmJwc0xhYmVsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICB9XG5cbiAgZ2V0IGJwc0xhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxufVxuIl19