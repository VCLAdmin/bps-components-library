import { __decorate, __param } from "tslib";
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Injector, Optional, Renderer2, Self, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { slideMotion, NzDropdownHigherOrderServiceToken, NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from 'ng-zorro-antd';
export function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
let BpsDropdownMenuComponent = class BpsDropdownMenuComponent {
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
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
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.bpsTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
};
BpsDropdownMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: NzMenuDropdownService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
__decorate([
    ViewChild(TemplateRef, { static: true })
], BpsDropdownMenuComponent.prototype, "templateRef", void 0);
BpsDropdownMenuComponent = __decorate([
    Component({
        selector: `bps-dropdown-menu`,
        template: "<ng-template>\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown bps-dropdown nz-dropdown ant-dropdown-placement-'+bpsPlacement}}\"\n       [ngClass]=\"bpsOverlayClassName\"\n       [ngStyle]=\"bpsOverlayStyle\"\n       [@slideMotion]=\"dropDownPosition\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"bpsTableFilter\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
        exportAs: `bpsDropdownMenu`,
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
        styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child::before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;transition:.3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:17px;right:calc(100% - 8px);transition:.3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover::before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}", `
      :root .ant-dropdown.nz-dropdown {
        top: 0;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
    }),
    __param(5, Host()), __param(5, Optional())
], BpsDropdownMenuComponent);
export { BpsDropdownMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxpQ0FBaUMsRUFDakMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN2QixNQUFNLG9CQUFvQixDQUFDO0FBRTVCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXRELE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFrQjtJQUMzRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBZ0NELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBd0JuQyxZQUNVLEdBQXNCLEVBQ3RCLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ3BCLGdCQUFrQyxFQUNsQyxxQkFBNEMsRUFDeEIsV0FBb0M7UUFMdkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUE3QmpFLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixxQkFBZ0IsR0FBZ0MsUUFBUSxDQUFDO1FBQ3pELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2xDLGVBQVUsR0FBc0IsT0FBTyxDQUFDO1FBQ3hDLGlCQUFZLEdBQW9CLFlBQVksQ0FBQztRQUM3Qyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBOEIsRUFBRSxDQUFDO1FBQ2hELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBc0JwQixDQUFDO0lBbEJKLG1CQUFtQixDQUFDLE9BQWdCLEVBQUUsVUFBcUMsS0FBSztRQUM5RSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUEyQyxHQUFNLEVBQUUsS0FBYztRQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQVdELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEgsQ0FBQztDQUNGLENBQUE7O1lBWGdCLGlCQUFpQjtZQUNWLFVBQVU7WUFDWixTQUFTO1lBQ0YsZ0JBQWdCO1lBQ1gscUJBQXFCO1lBQ1Ysc0JBQXNCLHVCQUE5RCxJQUFJLFlBQUksUUFBUTs7QUFuQnVCO0lBQXpDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7NkRBQStCO0FBWDdELHdCQUF3QjtJQTlCcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixtbkJBQWlEO1FBQ2pELFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBRXpCLFNBQVMsRUFBRTtZQUNULHFCQUFxQjtZQUNyQjtnQkFDRSxPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQyxVQUFVLEVBQUUsMEJBQTBCO2dCQUN0QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDL0I7U0FDRjtRQWFELG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07dzZFQWI3Qzs7Ozs7Ozs7O0tBU0M7S0FLSixDQUFDO0lBK0JHLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO0dBOUJWLHdCQUF3QixDQW9DcEM7U0FwQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBzbGlkZU1vdGlvbixcclxuICBOekRyb3Bkb3duSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgTnpNZW51QmFzZVNlcnZpY2UsXHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TWVudURyb3Bkb3duU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnIHwgJ3JpZ2h0VG9wJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wZG93bk1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChOek1lbnVEcm9wZG93blNlcnZpY2UpO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogYGJwcy1kcm9wZG93bi1tZW51YCxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiBgYnBzRHJvcGRvd25NZW51YCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpEcm9wZG93bkhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBkcm9wZG93bk1lbnVTZXJ2aWNlRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgOnJvb3QgLmFudC1kcm9wZG93bi5uei1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIG9wZW4gPSBmYWxzZTtcclxuICB0cmlnZ2VyV2lkdGggPSAwO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHZpc2libGUkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBicHNUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgYnBzUGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgYnBzT3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIGJwc092ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIGJwc1RhYmxlRmlsdGVyID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBzZXRWaXNpYmxlU3RhdGVXaGVuKHZpc2libGU6IGJvb2xlYW4sIHRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInIHwgJ2FsbCcgPSAnYWxsJyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVHJpZ2dlciA9PT0gdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnYWxsJykge1xyXG4gICAgICB0aGlzLnZpc2libGUkLm5leHQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZTxUIGV4dGVuZHMga2V5b2YgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiB0aGlzW1RdKTogdm9pZCB7XHJcbiAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHB1YmxpYyBuek1lbnVEcm9wZG93blNlcnZpY2U6IE56TWVudURyb3Bkb3duU2VydmljZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==