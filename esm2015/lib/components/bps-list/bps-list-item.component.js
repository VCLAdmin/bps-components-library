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
        this.ondeletehover = new EventEmitter();
        this.hover = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.bpsExtra;
    }
    onDeleteHover(event) {
        this._onDeleteHover = event;
        this.ondeletehover.emit(event);
    }
    onHover(event) {
        this.hover.emit(event);
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
__decorate([
    Output()
], BpsListItemComponent.prototype, "ondeletehover", void 0);
__decorate([
    Output()
], BpsListItemComponent.prototype, "hover", void 0);
BpsListItemComponent = __decorate([
    Component({
        selector: 'bps-list-item, [bps-list-item]',
        exportAs: 'bpsListItem',
        template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <div class=\"bps-list-item-content\"\r\n       (mouseenter)=\"onHover(true)\"\r\n       (mouseleave)=\"onHover(false)\">\r\n    <ng-content></ng-content>\r\n  </div>\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"onDeleteHover(true)\"\r\n         (mouseleave)=\"onDeleteHover(false)\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\n  <ng-container *ngIf=\"bpsContent\">\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  </div>\n</ng-container>\n",
        preserveWhitespaces: false,
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            '[class.bps-delete-icon-hovered]': '_onDeleteHover'
        }
    })
], BpsListItemComponent);
export { BpsListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtbGlzdC9icHMtbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sb0JBQW9CLENBQUM7QUFFckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFheEQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFtQy9CLFlBQ0UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxVQUE0QixFQUM1QixHQUFzQjtRQUR0QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJDaEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHZCxlQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUdrQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ3ZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFakMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0QsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBNEIzRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQXhCRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzNELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQVdELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBcEJlLFVBQVU7WUFDWixTQUFTO1lBQ0MsZ0JBQWdCO1lBQ3ZCLGlCQUFpQjs7QUFuQ1c7SUFBMUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDO21EQUE2QztBQUM5RTtJQUFSLEtBQUssRUFBRTt3REFBMkM7QUFDMUM7SUFBUixLQUFLLEVBQUU7d0RBQXdDO0FBQ3ZDO0lBQVIsS0FBSyxFQUFFO3NEQUE2QjtBQUNnQztJQUFwRSxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXLENBQUMsNkJBQTZCLENBQUM7dURBQTRCO0FBQ3ZFO0lBQXhCLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRTt1REFBbUI7QUFFakM7SUFBVCxNQUFNLEVBQUU7c0RBQXVEO0FBQ3REO0lBQVQsTUFBTSxFQUFFOzJEQUE0RDtBQUMzRDtJQUFULE1BQU0sRUFBRTttREFBb0Q7QUFibEQsb0JBQW9CO0lBWGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQ0FBZ0M7UUFDMUMsUUFBUSxFQUFFLGFBQWE7UUFDdkIsd3hFQUE2QztRQUM3QyxtQkFBbUIsRUFBRSxLQUFLO1FBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLElBQUksRUFBRTtZQUNKLGlDQUFpQyxFQUFFLGdCQUFnQjtTQUNwRDtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0F3RGhDO1NBeERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpEaXJlY3Rpb25WSFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnBzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYnBzLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWxpc3QtaXRlbSwgW2Jwcy1saXN0LWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICdicHNMaXN0SXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5icHMtZGVsZXRlLWljb24taG92ZXJlZF0nOiAnX29uRGVsZXRlSG92ZXInXHJcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgX29uRGVsZXRlSG92ZXIgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkcmVuKEJwc0xpc3RJdGVtTWV0YUNvbXBvbmVudCkgbWV0YXMhOiBRdWVyeUxpc3Q8QnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50PjtcbiAgQElucHV0KCkgYnBzQWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XG4gIEBJbnB1dCgpIGJwc0NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBicHNFeHRyYTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1saXN0LWl0ZW0tbm8tZmxleCcpIGJwc05vRmxleDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGVsZXRlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9uZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25kZWxldGVob3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgaXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGU7XG4gIHByaXZhdGUgaXRlbUxheW91dCQ6IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgaXNWZXJ0aWNhbEFuZEV4dHJhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgISF0aGlzLmJwc0V4dHJhO1xuICB9XG5cbiAgb25EZWxldGVIb3ZlcihldmVudCkge1xuICAgIHRoaXMuX29uRGVsZXRlSG92ZXIgPSBldmVudDtcclxuICAgIHRoaXMub25kZWxldGVob3Zlci5lbWl0KGV2ZW50KTtcclxuICB9XG5cbiAgb25Ib3ZlcihldmVudCkge1xyXG4gICAgdGhpcy5ob3Zlci5lbWl0KGV2ZW50KTtcclxuICB9XG5cbiAgb25EZWxldGUoKSB7XG4gICAgdGhpcy5vbmRlbGV0ZS5lbWl0KCk7XHJcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBhcmVudENvbXA6IEJwc0xpc3RDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1MYXlvdXQkID0gdGhpcy5wYXJlbnRDb21wLml0ZW1MYXlvdXROb3RpZnkkLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgdGhpcy5pdGVtTGF5b3V0ID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXRlbUxheW91dCQpIHtcbiAgICAgIHRoaXMuaXRlbUxheW91dCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==