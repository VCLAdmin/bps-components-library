import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, AfterViewInit, } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd';
let BpsConfigurationSelectorComponent = 
// tslint:disable-next-line no-any
class BpsConfigurationSelectorComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.currentDisplayedDataIndex = null;
        this._data = [];
        this._currentDisplayedData = null;
        this.propertyName = '';
        this.disabled = false;
        this.currentDisplayedDataChange = new EventEmitter();
    }
    set currentDisplayedData(value) {
        this._currentDisplayedData = value;
        this.currentDisplayedDataIndex = this.getCurrentElementIndex();
    }
    ;
    set data(data) {
        this._data = data;
        if (this._data.length) {
            if (!this.currentDisplayedData) {
                this._currentDisplayedData = this._data[0];
                this.currentDisplayedDataIndex = 0;
            }
            else {
                this.currentDisplayedDataIndex = this.getCurrentElementIndex();
            }
        }
        this.cdr.detectChanges();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getCurrentElementIndex() {
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i] === this._currentDisplayedData) {
                return i;
            }
        }
    }
    getPrevElement() {
        if (this.currentDisplayedDataIndex && !this.disabled) {
            this.currentDisplayedDataIndex--;
            this._currentDisplayedData = this._data[this.currentDisplayedDataIndex];
            this.currentDisplayedDataChange.emit(this._currentDisplayedData);
        }
    }
    getNextElement() {
        if (this.currentDisplayedDataIndex + 1 < this._data.length && !this.disabled) {
            this.currentDisplayedDataIndex++;
            this._currentDisplayedData = this._data[this.currentDisplayedDataIndex];
            this.currentDisplayedDataChange.emit(this._currentDisplayedData);
        }
    }
};
BpsConfigurationSelectorComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], BpsConfigurationSelectorComponent.prototype, "currentDisplayedData", null);
__decorate([
    Input()
], BpsConfigurationSelectorComponent.prototype, "propertyName", void 0);
__decorate([
    Input(), InputBoolean()
], BpsConfigurationSelectorComponent.prototype, "disabled", void 0);
__decorate([
    Output()
], BpsConfigurationSelectorComponent.prototype, "currentDisplayedDataChange", void 0);
__decorate([
    Input()
], BpsConfigurationSelectorComponent.prototype, "data", null);
BpsConfigurationSelectorComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'bps-configuration-selector',
        exportAs: 'bpsConfigurationSelector',
        template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:1px solid #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:1px solid #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow::after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow::after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}"]
    })
    // tslint:disable-next-line no-any
], BpsConfigurationSelectorComponent);
export { BpsConfigurationSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IvYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixhQUFhLEdBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzdDLElBQWEsaUNBQWlDO0FBRDlDLGtDQUFrQztBQUNsQyxNQUFhLGlDQUFpQztJQThCNUMsWUFDVSxHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTdCeEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDdkMsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCwwQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFRcEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDRixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLCtCQUEwQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBaUI3RSxDQUFDO0lBeEJOLElBQUksb0JBQW9CLENBQUMsS0FBSztRQUM1QixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBQUEsQ0FBQztJQU1GLElBQUksSUFBSSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUNoRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBTUQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUNoRCxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLHlCQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0NBRUYsQ0FBQTs7WUF2Q2dCLGlCQUFpQjs7QUF2QmhDO0lBREMsS0FBSyxFQUFFOzZFQUlQO0FBRVE7SUFBUixLQUFLLEVBQUU7dUVBQW1CO0FBQ0Y7SUFBeEIsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFO21FQUFrQjtBQUNoQztJQUFULE1BQU0sRUFBRTtxRkFBeUU7QUFFbEY7SUFEQyxLQUFLLEVBQUU7NkRBWVA7QUE1QlUsaUNBQWlDO0lBVDdDLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsczJCQUEwRDtRQUUxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztJQUNGLGtDQUFrQztHQUNyQixpQ0FBaUMsQ0FzRTdDO1NBdEVZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3InLFxyXG4gIGV4cG9ydEFzOiAnYnBzQ29uZmlndXJhdGlvblNlbGVjdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBCcHNDb25maWd1cmF0aW9uU2VsZWN0b3JDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IG51bGw7XHJcbiAgX2RhdGEgPSBbXTtcclxuICBfY3VycmVudERpc3BsYXllZERhdGEgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjdXJyZW50RGlzcGxheWVkRGF0YSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fY3VycmVudERpc3BsYXllZERhdGEgPSB2YWx1ZTtcclxuICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEVsZW1lbnRJbmRleCgpO1xyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpIHByb3BlcnR5TmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBjdXJyZW50RGlzcGxheWVkRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgaWYgKHRoaXMuX2RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gdGhpcy5fZGF0YVswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEVsZW1lbnRJbmRleCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50RWxlbWVudEluZGV4KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9kYXRhW2ldID09PSB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2RWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4LS07XHJcbiAgICAgIHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gdGhpcy5fZGF0YVt0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXhdO1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudERpc3BsYXllZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dEVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ICsgMSA8IHRoaXMuX2RhdGEubGVuZ3RoICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCsrO1xyXG4gICAgICB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSA9IHRoaXMuX2RhdGFbdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4XTtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUNoYW5nZS5lbWl0KHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==