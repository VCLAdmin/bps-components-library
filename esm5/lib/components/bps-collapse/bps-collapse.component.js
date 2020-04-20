import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
var NZ_CONFIG_COMPONENT_NAME = 'collapse';
var BpsCollapseComponent = /** @class */ (function () {
    function BpsCollapseComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    BpsCollapseComponent.prototype.addPanel = function (value) {
        this.listOfNzCollapsePanelComponent.push(value);
    };
    BpsCollapseComponent.prototype.removePanel = function (value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    };
    BpsCollapseComponent.prototype.click = function (collapse) {
        if (this.bpsAccordion && !collapse.bpsActive) {
            this.listOfNzCollapsePanelComponent
                .filter(function (item) { return item !== collapse; })
                .forEach(function (item) {
                if (item.bpsActive) {
                    item.bpsActive = false;
                    item.bpsActiveChange.emit(item.bpsActive);
                    item.markForCheck();
                }
            });
        }
        collapse.bpsActive = !collapse.bpsActive;
        collapse.bpsActiveChange.emit(collapse.bpsActive);
    };
    BpsCollapseComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    __decorate([
        Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean()
    ], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
    __decorate([
        Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean()
    ], BpsCollapseComponent.prototype, "bpsBordered", void 0);
    BpsCollapseComponent = __decorate([
        Component({
            selector: 'bps-collapse',
            exportAs: 'bpsCollapse',
            template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\n  <ng-content></ng-content>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: ["\n      bps-collapse {\n        display: block;\n      }\n    "]
        })
    ], BpsCollapseComponent);
    return BpsCollapseComponent;
}());
export { BpsCollapseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUkvRSxJQUFNLHdCQUF3QixHQUFHLFVBQVUsQ0FBQztBQWdCNUM7SUFLRSw4QkFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSjNDLG1DQUE4QixHQUFnQyxFQUFFLENBQUM7SUFJbkIsQ0FBQztJQUV2RCx1Q0FBUSxHQUFSLFVBQVMsS0FBZ0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLEtBQWdDO1FBQzFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLFFBQW1DO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsSUFBSSxDQUFDLDhCQUE4QjtpQkFDaEMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLFFBQVEsRUFBakIsQ0FBaUIsQ0FBQztpQkFDakMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDekMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2dCQXhCbUMsZUFBZTs7SUFIbUI7UUFBckUsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVksRUFBRTs4REFBdUI7SUFDdkI7UUFBcEUsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRTs2REFBc0I7SUFIL0Usb0JBQW9CO1FBZGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGdJQUE0QztZQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtxQkFFbkMsZ0VBSUM7U0FFSixDQUFDO09BQ1csb0JBQW9CLENBOEJoQztJQUFELDJCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1jb2xsYXBzZScsXG4gIGV4cG9ydEFzOiAnYnBzQ29sbGFwc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGJwcy1jb2xsYXBzZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCcHNDb2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgbGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50OiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIGJwc0FjY29yZGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgYnBzQm9yZGVyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxuXG4gIGFkZFBhbmVsKHZhbHVlOiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVQYW5lbCh2YWx1ZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LnNwbGljZSh0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICBjbGljayhjb2xsYXBzZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJwc0FjY29yZGlvbiAmJiAhY29sbGFwc2UuYnBzQWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudFxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gY29sbGFwc2UpXG4gICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmJwc0FjdGl2ZSkge1xuICAgICAgICAgICAgaXRlbS5icHNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW0uYnBzQWN0aXZlQ2hhbmdlLmVtaXQoaXRlbS5icHNBY3RpdmUpO1xuICAgICAgICAgICAgaXRlbS5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb2xsYXBzZS5icHNBY3RpdmUgPSAhY29sbGFwc2UuYnBzQWN0aXZlO1xuICAgIGNvbGxhcHNlLmJwc0FjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLmJwc0FjdGl2ZSk7XG4gIH1cbn1cbiJdfQ==