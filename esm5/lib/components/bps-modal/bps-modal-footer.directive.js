import { __decorate, __param } from "tslib";
import { Directive, Optional, TemplateRef } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
var BpsModalFooterDirective = /** @class */ (function () {
    function BpsModalFooterDirective(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    BpsModalFooterDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: Optional }] },
        { type: TemplateRef }
    ]; };
    BpsModalFooterDirective = __decorate([
        Directive({
            selector: '[bpsModalFooter]',
            exportAs: 'bpsModalFooter'
        }),
        __param(0, Optional())
    ], BpsModalFooterDirective);
    return BpsModalFooterDirective;
}());
export { BpsModalFooterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icHMtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9icHMtbW9kYWwvYnBzLW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDO0lBQ0UsaUNBQWdDLFVBQXNCLEVBQVMsV0FBNEI7UUFBM0QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUN6RixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOztnQkFKMkMsVUFBVSx1QkFBekMsUUFBUTtnQkFBdUQsV0FBVzs7SUFENUUsdUJBQXVCO1FBSm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO1FBRWEsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQURaLHVCQUF1QixDQU1uQztJQUFELDhCQUFDO0NBQUEsQUFORCxJQU1DO1NBTlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnBzTW9kYWxGb290ZXJdJyxcbiAgZXhwb3J0QXM6ICdicHNNb2RhbEZvb3Rlcidcbn0pXG5leHBvcnQgY2xhc3MgQnBzTW9kYWxGb290ZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIG56TW9kYWxSZWY6IE56TW9kYWxSZWYsIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XG4gICAgaWYgKHRoaXMubnpNb2RhbFJlZikge1xuICAgICAgdGhpcy5uek1vZGFsUmVmLmdldEluc3RhbmNlKCkuc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxufVxuIl19