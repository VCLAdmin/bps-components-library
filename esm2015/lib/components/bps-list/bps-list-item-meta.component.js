import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
let BpsListItemMetaComponent = class BpsListItemMetaComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    set bpsAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
};
BpsListItemMetaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], BpsListItemMetaComponent.prototype, "bpsAvatar", null);
__decorate([
    Input()
], BpsListItemMetaComponent.prototype, "bpsTitle", void 0);
__decorate([
    Input()
], BpsListItemMetaComponent.prototype, "bpsDescription", void 0);
BpsListItemMetaComponent = __decorate([
    Component({
        selector: 'bps-list-item-meta, [bps-list-item-meta]',
        exportAs: 'bpsListItemMeta',
        template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\n  </h4>\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\n  </div>\n</div>\n",
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
], BpsListItemMetaComponent);
export { BpsListItemMetaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1saXN0L2Jwcy1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFVdkIsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFrQm5DLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQnRFLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFrQmIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFmRCxJQUFJLFNBQVMsQ0FBQyxLQUFpQztRQUM3QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztDQVNGLENBQUE7O1lBSGdDLFVBQVU7WUFBb0IsU0FBUzs7QUFidEU7SUFEQyxLQUFLLEVBQUU7eURBUVA7QUFFUTtJQUFSLEtBQUssRUFBRTswREFBc0M7QUFFckM7SUFBUixLQUFLLEVBQUU7Z0VBQTRDO0FBaEJ6Qyx3QkFBd0I7SUFScEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBDQUEwQztRQUNwRCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLHlvQkFBa0Q7UUFDbEQsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtLQUN0QyxDQUFDO0dBQ1csd0JBQXdCLENBcUJwQztTQXJCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1saXN0LWl0ZW0tbWV0YSwgW2Jwcy1saXN0LWl0ZW0tbWV0YV0nLFxuICBleHBvcnRBczogJ2Jwc0xpc3RJdGVtTWV0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50IHtcbiAgYXZhdGFyU3RyID0gJyc7XG4gIGF2YXRhclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGJwc0F2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSAnJztcbiAgICAgIHRoaXMuYXZhdGFyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgYnBzVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIGJwc0Rlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtLW1ldGEnKTtcbiAgfVxufVxuIl19