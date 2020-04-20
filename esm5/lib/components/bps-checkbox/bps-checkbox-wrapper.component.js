import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, Renderer2, ViewEncapsulation } from '@angular/core';
var BpsCheckboxWrapperComponent = /** @class */ (function () {
    function BpsCheckboxWrapperComponent(renderer, elementRef) {
        this.bpsOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    BpsCheckboxWrapperComponent.prototype.addCheckbox = function (value) {
        this.checkboxList.push(value);
    };
    BpsCheckboxWrapperComponent.prototype.removeCheckbox = function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    BpsCheckboxWrapperComponent.prototype.outputValue = function () {
        var checkedList = this.checkboxList.filter(function (item) { return item.bpsChecked; });
        return checkedList.map(function (item) { return item.bpsValue; });
    };
    BpsCheckboxWrapperComponent.prototype.onChange = function () {
        this.bpsOnChange.emit(this.outputValue());
    };
    BpsCheckboxWrapperComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Output()
    ], BpsCheckboxWrapperComponent.prototype, "bpsOnChange", void 0);
    BpsCheckboxWrapperComponent = __decorate([
        Component({
            selector: 'bps-checkbox-wrapper',
            exportAs: 'bpsCheckboxWrapper',
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<ng-content></ng-content>"
        })
    ], BpsCheckboxWrapperComponent);
    return BpsCheckboxWrapperComponent;
}());
export { BpsCheckboxWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWNoZWNrYm94L2Jwcy1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVl2QjtJQXFCRSxxQ0FBWSxRQUFtQixFQUFFLFVBQXNCO1FBcEJwQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDdEQsaUJBQVksR0FBMkIsRUFBRSxDQUFDO1FBb0JoRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBbkJELGlEQUFXLEdBQVgsVUFBWSxLQUEyQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0RBQWMsR0FBZCxVQUFlLEtBQTJCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsVUFBVSxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFFcUIsU0FBUztnQkFBYyxVQUFVOztJQXBCN0M7UUFBVCxNQUFNLEVBQUU7b0VBQXFEO0lBRG5ELDJCQUEyQjtRQVJ2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxxQ0FBb0Q7U0FDckQsQ0FBQztPQUNXLDJCQUEyQixDQXdCdkM7SUFBRCxrQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCcHNDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vYnBzLWNoZWNrYm94LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1jaGVja2JveC13cmFwcGVyJyxcbiAgZXhwb3J0QXM6ICdicHNDaGVja2JveFdyYXBwZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQnBzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IEJwc0NoZWNrYm94Q29tcG9uZW50W10gPSBbXTtcblxuICBhZGRDaGVja2JveCh2YWx1ZTogQnBzQ2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUNoZWNrYm94KHZhbHVlOiBCcHNDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnNwbGljZSh0aGlzLmNoZWNrYm94TGlzdC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICBvdXRwdXRWYWx1ZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB0aGlzLmNoZWNrYm94TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmJwc0NoZWNrZWQpO1xuICAgIHJldHVybiBjaGVja2VkTGlzdC5tYXAoaXRlbSA9PiBpdGVtLmJwc1ZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuYnBzT25DaGFuZ2UuZW1pdCh0aGlzLm91dHB1dFZhbHVlKCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jaGVja2JveC1ncm91cCcpO1xuICB9XG59XG4iXX0=