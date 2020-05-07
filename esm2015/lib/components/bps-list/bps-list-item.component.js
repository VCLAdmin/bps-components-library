import { __decorate } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, OnDestroy, QueryList, Renderer2, TemplateRef, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { BpsListItemMetaComponent } from './bps-list-item-meta.component';
import { BpsListComponent } from './bps-list.component';
let BpsListItemComponent = class BpsListItemComponent {
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this._onDeleteHover = false;
        this.bpsActions = [];
        this.bpsNoFlex = false;
        this.bpsDelete = false;
        this.ondelete = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.bpsExtra;
    }
    onDelete() {
        this.ondelete.emit();
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
};
BpsListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: BpsListComponent },
    { type: ChangeDetectorRef }
];
__decorate([
    ContentChildren(BpsListItemMetaComponent)
], BpsListItemComponent.prototype, "metas", void 0);
__decorate([
    Input()
], BpsListItemComponent.prototype, "bpsActions", void 0);
__decorate([
    Input()
], BpsListItemComponent.prototype, "bpsContent", void 0);
__decorate([
    Input()
], BpsListItemComponent.prototype, "bpsExtra", void 0);
__decorate([
    Input(), InputBoolean(), HostBinding('class.ant-list-item-no-flex')
], BpsListItemComponent.prototype, "bpsNoFlex", void 0);
__decorate([
    Input(), InputBoolean()
], BpsListItemComponent.prototype, "bpsDelete", void 0);
__decorate([
    Output()
], BpsListItemComponent.prototype, "ondelete", void 0);
BpsListItemComponent = __decorate([
    Component({
        selector: 'bps-list-item, [bps-list-item]',
        exportAs: 'bpsListItem',
        template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <div class=\"bps-list-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"_onDeleteHover = true;\"\r\n         (mouseleave)=\"_onDeleteHover = false;\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\n  <ng-container *ngIf=\"bpsContent\">\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  </div>\n</ng-container>\n",
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.bps-delete-icon-hovered]': '_onDeleteHover'
        }
    })
], BpsListItemComponent);
export { BpsListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtbGlzdC9icHMtbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFheEQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUF3Qi9CLFlBQ0UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxVQUE0QixFQUM1QixHQUFzQjtRQUR0QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCaEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHZCxlQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUdrQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ3ZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFakMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBbUI5RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQWZELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFXRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7Q0FDRixDQUFBOztZQXBCZSxVQUFVO1lBQ1osU0FBUztZQUNDLGdCQUFnQjtZQUN2QixpQkFBaUI7O0FBeEJXO0lBQTFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQzttREFBNkM7QUFDOUU7SUFBUixLQUFLLEVBQUU7d0RBQTJDO0FBQzFDO0lBQVIsS0FBSyxFQUFFO3dEQUF3QztBQUN2QztJQUFSLEtBQUssRUFBRTtzREFBNkI7QUFDZ0M7SUFBcEUsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsV0FBVyxDQUFDLDZCQUE2QixDQUFDO3VEQUE0QjtBQUN2RTtJQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7dURBQW1CO0FBRWpDO0lBQVQsTUFBTSxFQUFFO3NEQUF1RDtBQVhyRCxvQkFBb0I7SUFYaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdDQUFnQztRQUMxQyxRQUFRLEVBQUUsYUFBYTtRQUN2Qiwyc0VBQTZDO1FBQzdDLG1CQUFtQixFQUFFLEtBQUs7UUFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsSUFBSSxFQUFFO1lBQ0osaUNBQWlDLEVBQUUsZ0JBQWdCO1NBQ3BEO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQTZDaEM7U0E3Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekRpcmVjdGlvblZIVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJwc0xpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9icHMtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtbGlzdC1pdGVtLCBbYnBzLWxpc3QtaXRlbV0nLFxuICBleHBvcnRBczogJ2Jwc0xpc3RJdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmJwcy1kZWxldGUtaWNvbi1ob3ZlcmVkXSc6ICdfb25EZWxldGVIb3ZlcidcclxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0xpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBfb25EZWxldGVIb3ZlciA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50KSBtZXRhcyE6IFF1ZXJ5TGlzdDxCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQ+O1xuICBASW5wdXQoKSBicHNBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgYnBzQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0V4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxpc3QtaXRlbS1uby1mbGV4JykgYnBzTm9GbGV4OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEZWxldGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb25kZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBpdGVtTGF5b3V0OiBOekRpcmVjdGlvblZIVHlwZTtcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JDogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBpc1ZlcnRpY2FsQW5kRXh0cmEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiAhIXRoaXMuYnBzRXh0cmE7XG4gIH1cblxuICBvbkRlbGV0ZSgpIHtcbiAgICB0aGlzLm9uZGVsZXRlLmVtaXQoKTtcclxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFyZW50Q29tcDogQnBzTGlzdENvbXBvbmVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUxheW91dCQgPSB0aGlzLnBhcmVudENvbXAuaXRlbUxheW91dE5vdGlmeSQuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICB0aGlzLml0ZW1MYXlvdXQgPSB2YWw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pdGVtTGF5b3V0JCkge1xuICAgICAgdGhpcy5pdGVtTGF5b3V0JC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19