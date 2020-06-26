import { __decorate, __param } from "tslib";
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, Renderer2, Self, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from 'ng-zorro-antd';
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var BpsDropdownMenuComponent = /** @class */ (function () {
    function BpsDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.open = false;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.visible$ = new Subject();
        this.bpsTrigger = 'hover';
        this.bpsPlacement = 'bottomLeft';
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsTableFilter = false;
    }
    BpsDropdownMenuComponent.prototype.setVisibleStateWhen = function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.bpsTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    BpsDropdownMenuComponent.prototype.setValue = function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    BpsDropdownMenuComponent.prototype.ngAfterContentInit = function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
    BpsDropdownMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: NzMenuDropdownService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        ViewChild(TemplateRef, { static: true })
    ], BpsDropdownMenuComponent.prototype, "templateRef", void 0);
    BpsDropdownMenuComponent = __decorate([
        Component({
            selector: "bps-dropdown-menu",
            template: "<ng-template>\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown bps-dropdown nz-dropdown ant-dropdown-placement-'+bpsPlacement}}\"\n       [ngClass]=\"bpsOverlayClassName\"\n       [ngStyle]=\"bpsOverlayStyle\"\n       [@slideMotion]=\"dropDownPosition\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"bpsTableFilter\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            exportAs: "bpsDropdownMenu",
            animations: [slideMotion],
            providers: [
                NzMenuDropdownService,
                {
                    provide: NzDropdownHigherOrderServiceToken,
                    useFactory: dropdownMenuServiceFactory,
                    deps: [[new Self(), Injector]]
                }
            ],
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;transition:.3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:17px;right:calc(100% - 8px);transition:.3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before{background-color:#353535!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}", "\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
        }),
        __param(5, Host()), __param(5, Optional())
    ], BpsDropdownMenuComponent);
    return BpsDropdownMenuComponent;
}());
export { BpsDropdownMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxpQ0FBaUMsRUFDakMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN2QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXRELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFrQjtJQUMzRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBZ0NEO0lBd0JFLGtDQUNVLEdBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ3BCLGdCQUFrQyxFQUNsQyxxQkFBNEMsRUFDeEIsV0FBb0M7UUFMdkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUE3QmpFLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixxQkFBZ0IsR0FBZ0MsUUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xDLGVBQVUsR0FBc0IsT0FBTyxDQUFDO1FBQ3hDLGlCQUFZLEdBQW9CLFlBQVksQ0FBQztRQUM3Qyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBOEIsRUFBRSxDQUFDO1FBQ2hELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBc0JwQixDQUFDO0lBbEJKLHNEQUFtQixHQUFuQixVQUFvQixPQUFnQixFQUFFLE9BQTBDO1FBQTFDLHdCQUFBLEVBQUEsZUFBMEM7UUFDOUUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBbUQsR0FBTSxFQUFFLEtBQWM7UUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFXRCxxREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Z0JBVmMsaUJBQWlCO2dCQUNWLFVBQVU7Z0JBQ1osU0FBUztnQkFDRixnQkFBZ0I7Z0JBQ1gscUJBQXFCO2dCQUNWLHNCQUFzQix1QkFBOUQsSUFBSSxZQUFJLFFBQVE7O0lBbkJ1QjtRQUF6QyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2lFQUErQjtJQVg3RCx3QkFBd0I7UUE5QnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsbW5CQUFpRDtZQUNqRCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUV6QixTQUFTLEVBQUU7Z0JBQ1QscUJBQXFCO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsaUNBQWlDO29CQUMxQyxVQUFVLEVBQUUsMEJBQTBCO29CQUN0QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7WUFhRCxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2toRUFiN0MsdU1BU0M7U0FLSixDQUFDO1FBK0JHLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BOUJWLHdCQUF3QixDQW9DcEM7SUFBRCwrQkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIEluamVjdG9yLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgc2xpZGVNb3Rpb24sXHJcbiAgTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gIE56TWVudUJhc2VTZXJ2aWNlLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JyB8ICdyaWdodFRvcCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJvcGRvd25NZW51U2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpNZW51QmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoTnpNZW51RHJvcGRvd25TZXJ2aWNlKTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IGBicHMtZHJvcGRvd24tbWVudWAsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogYGJwc0Ryb3Bkb3duTWVudWAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtZHJvcGRvd24tbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56RHJvcGRvd25IaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogZHJvcGRvd25NZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIDpyb290IC5hbnQtZHJvcGRvd24ubnotZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBvcGVuID0gZmFsc2U7XHJcbiAgdHJpZ2dlcldpZHRoID0gMDtcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICB2aXNpYmxlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgYnBzVHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIGJwc1BsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIGJwc092ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBicHNPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBicHNUYWJsZUZpbHRlciA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgc2V0VmlzaWJsZVN0YXRlV2hlbih2aXNpYmxlOiBib29sZWFuLCB0cmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyB8ICdhbGwnID0gJ2FsbCcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc1RyaWdnZXIgPT09IHRyaWdnZXIgfHwgdHJpZ2dlciA9PT0gJ2FsbCcpIHtcclxuICAgICAgdGhpcy52aXNpYmxlJC5uZXh0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudD4oa2V5OiBULCB2YWx1ZTogdGhpc1tUXSk6IHZvaWQge1xyXG4gICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwdWJsaWMgbnpNZW51RHJvcGRvd25TZXJ2aWNlOiBOek1lbnVEcm9wZG93blNlcnZpY2UsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=