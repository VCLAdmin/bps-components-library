import { __decorate } from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
let BpsGridComponent = class BpsGridComponent {
    constructor() {
        this._columns = [];
        this._rows = [];
        this._selection = [1, 2];
        this._latestSelection = [1, 2];
        this.disabled = false;
        this.selectionChange = new EventEmitter();
    }
    set columns(value) {
        if (value >= 1) {
            this._columns = new Array(value);
        }
    }
    set rows(value) {
        if (value >= 1) {
            this._rows = new Array(value);
        }
    }
    set selection(value) {
        this._selection = value;
        this._latestSelection = value;
    }
    get selection() {
        return this._selection;
    }
    onSelectionChange(row, column) {
        this.selection = [row, column];
        this._latestSelection = [row, column];
        this.selectionChange.emit(this.selection);
    }
    isSelected(row, column) {
        return (row <= this.selection[0] && !column) || (!row && column <= this.selection[1]) || (row <= this.selection[0] && column === this.selection[1]) || (row === this.selection[0] && column <= this.selection[1]);
    }
    previewSelection(row, column) {
        const newSel = [row, column];
        this._selection = [...newSel];
    }
    endPreviewSelection() {
        this._selection = this._latestSelection;
    }
};
__decorate([
    Input(), InputBoolean()
], BpsGridComponent.prototype, "disabled", void 0);
__decorate([
    Output()
], BpsGridComponent.prototype, "selectionChange", void 0);
__decorate([
    Input()
], BpsGridComponent.prototype, "columns", null);
__decorate([
    Input()
], BpsGridComponent.prototype, "rows", null);
__decorate([
    Input()
], BpsGridComponent.prototype, "selection", null);
BpsGridComponent = __decorate([
    Component({
        selector: 'bps-grid',
        template: "<div class=\"bps-grid-selected-value-wrapper\">\n  <span>{{selection[0] + 1}} x {{selection[1] + 1}}</span>\n</div>\n\n<div class=\"bps-grid-wrapper\">\r\n  <ng-container *ngFor=\"let row of _rows; index as i\">\r\n    <div class=\"bps-grid-row\" [class.bps-grid-row-first]=\"i === 0\" [class.bps-grid-row-last]=\"i === _rows.length - 1\">\r\n      <ng-container *ngFor=\"let column of _columns; index as j\">\r\n        <div class=\"bps-grid-square\"\r\n             (mouseenter)=\"previewSelection(i, j)\"\r\n             (mouseleave)=\"endPreviewSelection()\"\r\n             [class.bps-grid-selected-square-top]=\"isSelected(i, j) && !i\"\r\n             [class.bps-grid-selected-square-bottom]=\"isSelected(i, j) && i === selection[0]\"\r\n             [class.bps-grid-selected-square-left]=\"isSelected(i, j) && !j\"\r\n             [class.bps-grid-selected-square-right]=\"isSelected(i, j) && j === selection[1]\"\r\n             [class.bps-grid-first-square-in-row]=\"!j\"\r\n             [class.bps-grid-left-top-corner]=\"i === j && !i\"\r\n             [class.bps-grid-left-bottom-corner]=\"i === _rows.length - 1 && !j\"\r\n             [class.bps-grid-right-bottom-corner]=\"i === _rows.length - 1 && j === _columns.length - 1\"\r\n             [class.bps-grid-right-top-corner]=\"!i && j === _columns.length - 1\"\r\n             (click)=\"onSelectionChange(i, j)\">\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".bps-grid-square{width:25px;height:25px;transition:.3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}"]
    })
], BpsGridComponent);
export { BpsGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWdyaWQvYnBzLWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTN0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFpQzNCO1FBL0JBLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIscUJBQWdCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUEwQnZELENBQUM7SUF2QmpCLElBQUksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFHRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBR0QsSUFBSSxTQUFTLENBQUMsS0FBZTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUlELGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BOLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsTUFBTTtRQUMxQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7Q0FFRixDQUFBO0FBaEQwQjtJQUF4QixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUU7a0RBQWtCO0FBQ2hDO0lBQVQsTUFBTSxFQUFFO3lEQUE4RDtBQUd2RTtJQURDLEtBQUssRUFBRTsrQ0FLUDtBQUdEO0lBREMsS0FBSyxFQUFFOzRDQUtQO0FBR0Q7SUFEQyxLQUFLLEVBQUU7aURBSVA7QUEzQlUsZ0JBQWdCO0lBUDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLDA4Q0FBd0M7UUFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyxnQkFBZ0IsQ0FzRDVCO1NBdERZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icHMtZ3JpZC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQnBzR3JpZENvbXBvbmVudCB7XG5cbiAgX2NvbHVtbnM6IGFueVtdID0gW107XG4gIF9yb3dzOiBhbnlbXSA9IFtdO1xuICBfc2VsZWN0aW9uOiBudW1iZXJbXSA9IFsxLCAyXTtcbiAgX2xhdGVzdFNlbGVjdGlvbjogbnVtYmVyW10gPSBbMSwgMl07XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPj0gMSkge1xyXG4gICAgICB0aGlzLl9jb2x1bW5zID0gbmV3IEFycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3ModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+PSAxKSB7XHJcbiAgICAgIHRoaXMuX3Jvd3MgPSBuZXcgQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0aW9uKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3NlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5fbGF0ZXN0U2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgfVxuXG4gIGdldCBzZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcclxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShyb3csIGNvbHVtbikge1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW3JvdywgY29sdW1uXTtcclxuICAgIHRoaXMuX2xhdGVzdFNlbGVjdGlvbiA9IFtyb3csIGNvbHVtbl07XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0aW9uKTtcclxuICB9XG5cbiAgaXNTZWxlY3RlZChyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKHJvdyA8PSB0aGlzLnNlbGVjdGlvblswXSAmJiAhY29sdW1uKSB8fCAoIXJvdyAmJiBjb2x1bW4gPD0gdGhpcy5zZWxlY3Rpb25bMV0pIHx8IChyb3cgPD0gdGhpcy5zZWxlY3Rpb25bMF0gJiYgY29sdW1uID09PSB0aGlzLnNlbGVjdGlvblsxXSkgfHwgKHJvdyA9PT0gdGhpcy5zZWxlY3Rpb25bMF0gJiYgY29sdW1uIDw9IHRoaXMuc2VsZWN0aW9uWzFdKTsgXHJcbiAgfVxuXG4gIHByZXZpZXdTZWxlY3Rpb24ocm93LCBjb2x1bW4pIHtcclxuICAgIGNvbnN0IG5ld1NlbCA9IFtyb3csIGNvbHVtbl07XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSBbLi4ubmV3U2VsXTtcclxuICB9XHJcblxyXG4gIGVuZFByZXZpZXdTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gdGhpcy5fbGF0ZXN0U2VsZWN0aW9uO1xyXG4gIH1cblxufVxuIl19