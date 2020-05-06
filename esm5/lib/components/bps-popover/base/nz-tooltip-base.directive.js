import { __decorate } from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
var NzTooltipBaseDirective = /** @class */ (function () {
    function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, 
    /**
     * @deprecated 9.0.0. This will always be `null`.
     */
    _tooltip, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this._tooltip = _tooltip;
        this.noAnimation = noAnimation;
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 9.0.0. This is deprecated and going to be removed in 9.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         */
        this.nzPlacement = 'top';
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'noAnimation'
        ];
        this.nzVisibleChange = new EventEmitter();
        this.isTooltipComponentVisible = false;
        /**
         * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
         */
        this.isDynamicTooltip = false;
        this.triggerUnlisteners = [];
        this.$destroy = new Subject();
    }
    Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
        /**
         * This true title that would be used in other parts on this component.
         */
        get: function () {
            return this.specificTitle || this.directiveNameTitle || this.nzTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
        get: function () {
            return this.specificContent || this.directiveNameContent || this.nzContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
        get: function () {
            return this.specificPlacement || this.nzPlacement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "type", {
        get: function () {
            return this.popoverType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
        get: function () {
            return this.specificTrigger || this.nzTrigger;
        },
        enumerable: true,
        configurable: true
    });
    NzTooltipBaseDirective.prototype.ngOnChanges = function (changes) {
        var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
        var trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.tooltip && this.isDynamicTooltip) {
            this.updateChangedProperties(changes);
        }
        // TODO: enable these warning in 9.0.0.
        // if (changes.nzTitle) {
        //   warnDeprecation(
        //     `'nzTitle' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTitle' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzContent) {
        //   warnDeprecation(
        //     `'nzContent' of 'nz-popover' is deprecated and will be removed in 10.0.0. Please use 'nzPopoverContent' instead.`
        //   );
        // }
        // if (changes.nzPlacement) {
        //   warnDeprecation(
        //     `'nzPlacement' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipContent' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
        // if (changes.nzTrigger) {
        //   warnDeprecation(
        //     `'nzTrigger' of 'nz-tooltip' is deprecated and will be removed in 10.0.0. Please use 'nzTooltipTrigger' instead. The same with 'nz-popover' and 'nz-popconfirm'.`
        //   );
        // }
    };
    NzTooltipBaseDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._tooltip) {
            this.createDynamicTooltipComponent();
        }
        else {
            warnDeprecation("'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .");
            this.tooltip = this._tooltip;
            this.tooltip.setOverlayOrigin(this);
        }
        this.tooltip.nzVisibleChange
            .pipe(distinctUntilChanged(), takeUntil(this.$destroy))
            .subscribe(function (visible) {
            _this.isTooltipComponentVisible = visible;
            _this.nzVisibleChange.emit(visible);
        });
    };
    NzTooltipBaseDirective.prototype.ngAfterViewInit = function () {
        this.registerTriggers();
    };
    NzTooltipBaseDirective.prototype.ngOnDestroy = function () {
        this.$destroy.next();
        this.$destroy.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
        if (this.tooltipRef) {
            this.tooltipRef.destroy();
        }
    };
    NzTooltipBaseDirective.prototype.show = function () {
        this.tooltip.show();
    };
    NzTooltipBaseDirective.prototype.hide = function () {
        this.tooltip.hide();
    };
    /**
     * Force the component to update its position.
     */
    NzTooltipBaseDirective.prototype.updatePosition = function () {
        if (this.tooltip && this.isDynamicTooltip) {
            this.tooltip.updatePosition();
        }
    };
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    NzTooltipBaseDirective.prototype.createDynamicTooltipComponent = function () {
        this.isDynamicTooltip = true;
        this.tooltipRef = this.hostView.createComponent(this.componentFactory);
        this.tooltip = this.tooltipRef.instance;
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.tooltipRef.location.nativeElement); // Remove the component's DOM because it should be in the overlay container.
        // If the tooltip component is dynamically created, we should set its origin before updating properties to
        // the component.
        this.tooltip.setOverlayOrigin(this);
        // Update all properties to the component.
        this.updateChangedProperties(this.needProxyProperties);
    };
    NzTooltipBaseDirective.prototype.registerTriggers = function () {
        var _this = this;
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        var el = this.elementRef.nativeElement;
        var trigger = this.isDynamicTooltip ? this.trigger : this.tooltip.nzTrigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            var overlayElement_1;
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseenter', function () {
                _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay);
            }));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'mouseleave', function () {
                _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) {
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseenter', function () {
                        _this.delayEnterLeave(false, true);
                    }));
                    _this.triggerUnlisteners.push(_this.renderer.listen(overlayElement_1, 'mouseleave', function () {
                        _this.delayEnterLeave(false, false);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'focus', function () { return _this.show(); }));
            this.triggerUnlisteners.push(this.renderer.listen(el, 'blur', function () { return _this.hide(); }));
        }
        else if (trigger === 'click') {
            this.triggerUnlisteners.push(this.renderer.listen(el, 'click', function (e) {
                e.preventDefault();
                _this.show();
            }));
        } // Else do nothing because user wants to control the visibility programmatically.
    };
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    NzTooltipBaseDirective.prototype.updateChangedProperties = function (propertiesOrChanges) {
        var _this = this;
        var isArray = Array.isArray(propertiesOrChanges);
        var keys_ = isArray ? propertiesOrChanges : Object.keys(propertiesOrChanges);
        // tslint:disable-next-line no-any
        keys_.forEach(function (property) {
            if (_this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                _this.updateComponentValue(property, _this[property]);
            }
        });
        if (isArray) {
            this.updateComponentValue('nzTitle', this.title);
            this.updateComponentValue('nzContent', this.content);
            this.updateComponentValue('nzPlacement', this.placement);
            this.updateComponentValue('nzTrigger', this.trigger);
            this.updateComponentValue('bpsPopoverType', this.type);
        }
        else {
            var c = propertiesOrChanges;
            if (c.specificTitle || c.directiveNameTitle || c.nzTitle) {
                this.updateComponentValue('nzTitle', this.title);
            }
            if (c.specificContent || c.directiveNameContent || c.nzContent) {
                this.updateComponentValue('nzContent', this.content);
            }
            if (c.specificTrigger || c.nzTrigger) {
                this.updateComponentValue('nzTrigger', this.trigger);
            }
            if (c.specificPlacement || c.nzPlacement) {
                this.updateComponentValue('nzPlacement', this.placement);
            }
        }
        this.tooltip.updateByDirective();
    };
    // tslint:disable-next-line no-any
    NzTooltipBaseDirective.prototype.updateComponentValue = function (key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.tooltip[key] = value;
        }
    };
    NzTooltipBaseDirective.prototype.delayEnterLeave = function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(function () {
                _this.delayTimer = undefined;
                isEnter ? _this.show() : _this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    };
    NzTooltipBaseDirective.prototype.removeTriggerListeners = function () {
        this.triggerUnlisteners.forEach(function (cancel) { return cancel(); });
        this.triggerUnlisteners.length = 0;
    };
    NzTooltipBaseDirective.prototype.clearTogglingTimer = function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    };
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzTitle", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzContent", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzTrigger", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzPlacement", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzMouseEnterDelay", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzMouseLeaveDelay", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzOverlayClassName", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzOverlayStyle", void 0);
    __decorate([
        Input()
    ], NzTooltipBaseDirective.prototype, "nzVisible", void 0);
    __decorate([
        Output()
    ], NzTooltipBaseDirective.prototype, "nzVisibleChange", void 0);
    return NzTooltipBaseDirective;
}());
export { NzTooltipBaseDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1wb3BvdmVyL2Jhc2UvbnotdG9vbHRpcC1iYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQU1MLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQXNELE1BQU0sb0JBQW9CLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJakU7SUE4RkUsZ0NBQ1MsVUFBc0IsRUFDbkIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUI7SUFDN0I7O09BRUc7SUFDTyxRQUF1QyxFQUN2QyxXQUFvQztRQVJ2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJbkIsYUFBUSxHQUFSLFFBQVEsQ0FBK0I7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBakZoRDs7O1dBR0c7UUFDTSxjQUFTLEdBQXFCLE9BQU8sQ0FBQztRQUUvQzs7O1dBR0c7UUFDTSxnQkFBVyxHQUFXLEtBQUssQ0FBQztRQW9DM0Isd0JBQW1CLEdBQUc7WUFDOUIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxhQUFhO1NBQ2QsQ0FBQztRQUVpQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFJakUsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBRWxDOztX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QU0sRUFBRTttRUFBd0Q7SUF3UW5FLDZCQUFDO0NBQUEsQUFyVkQsSUFxVkM7U0FyVnFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka092ZXJsYXlPcmlnaW4gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uLCBOZ1N0eWxlSW50ZXJmYWNlLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIsIE56VG9vbHRpcEJhc2VDb21wb25lbnQsIE56VG9vbHRpcEJhc2VDb21wb25lbnRMZWdhY3kgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgZGlyZWN0aXZlTmFtZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHNwZWNpZmljVHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgc3BlY2lmaWNQbGFjZW1lbnQ/OiBzdHJpbmc7XHJcbiAgcG9wb3ZlclR5cGU/OiBzdHJpbmc7XHJcbiAgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVGl0bGVgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IE56VFNUeXBlIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56UG9wb3ZlckNvbnRlbnRgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG56Q29udGVudDogTnpUU1R5cGUgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLlxyXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpUb29sdGlwVHJpZ2dlcmAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC5cclxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFBsYWNlbWVudGAuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG5cclxuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgbnpWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sdGlwQmFzZUNvbXBvbmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgdHJ1ZSB0aXRsZSB0aGF0IHdvdWxkIGJlIHVzZWQgaW4gb3RoZXIgcGFydHMgb24gdGhpcyBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldCB0aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUaXRsZSB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVUaXRsZSB8fCB0aGlzLm56VGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljQ29udGVudCB8fCB0aGlzLmRpcmVjdGl2ZU5hbWVDb250ZW50IHx8IHRoaXMubnpDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWNpZmljUGxhY2VtZW50IHx8IHRoaXMubnpQbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnBvcG92ZXJUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNUcmlnZ2VyIHx8IHRoaXMubnpUcmlnZ2VyO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXHJcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcclxuICAgICduek92ZXJsYXlTdHlsZScsXHJcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxyXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcclxuICAgICduelZpc2libGUnLFxyXG4gICAgJ25vQW5pbWF0aW9uJ1xyXG4gIF07XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHRvb2x0aXA6IE56VG9vbHRpcEJhc2VDb21wb25lbnQ7XHJcblxyXG4gIGlzVG9vbHRpcENvbXBvbmVudFZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAuIFRvb2x0aXBzIHdvdWxkIGFsd2F5cyBiZSBkeW5hbWljIGluIDkuMC4wLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCByZWFkb25seSB0cmlnZ2VyVW5saXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XHJcblxyXG4gIHByb3RlY3RlZCAkZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgZGVsYXlUaW1lcj86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDkuMC4wLiBUaGlzIHdpbGwgYWx3YXlzIGJlIGBudWxsYC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF90b29sdGlwPzogTnpUb29sdGlwQmFzZUNvbXBvbmVudExlZ2FjeSxcclxuICAgIHByb3RlY3RlZCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpUcmlnZ2VyLCBzcGVjaWZpY1RyaWdnZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gc3BlY2lmaWNUcmlnZ2VyIHx8IG56VHJpZ2dlcjtcclxuXHJcbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmlzRHluYW1pY1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhjaGFuZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBlbmFibGUgdGhlc2Ugd2FybmluZyBpbiA5LjAuMC5cclxuICAgIC8vIGlmIChjaGFuZ2VzLm56VGl0bGUpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpUaXRsZScgb2YgJ256LXRvb2x0aXAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256VG9vbHRpcFRpdGxlJyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uekNvbnRlbnQpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpDb250ZW50JyBvZiAnbnotcG9wb3ZlcicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpQb3BvdmVyQ29udGVudCcgaW5zdGVhZC5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKGNoYW5nZXMubnpQbGFjZW1lbnQpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpQbGFjZW1lbnQnIG9mICduei10b29sdGlwJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelRvb2x0aXBDb250ZW50JyBpbnN0ZWFkLiBUaGUgc2FtZSB3aXRoICduei1wb3BvdmVyJyBhbmQgJ256LXBvcGNvbmZpcm0nLmBcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZiAoY2hhbmdlcy5uelRyaWdnZXIpIHtcclxuICAgIC8vICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgLy8gICAgIGAnbnpUcmlnZ2VyJyBvZiAnbnotdG9vbHRpcCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpUb29sdGlwVHJpZ2dlcicgaW5zdGVhZC4gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdG9vbHRpcCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgYCc8bnotdG9vbHRpcD48L256LXRvb2x0aXA+JywgJzxuei1wb3BvdmVyPjwvbnotcG9wb3Zlcj4nIGFuZCAnPG56LXBvcGNvbmZpcm0+PC9uei1wb3Bjb25maXJtPicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBSZWZlcjogaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvdG9vbHRpcC96aCAuYFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLl90b29sdGlwO1xyXG4gICAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzIGFzIENka092ZXJsYXlPcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9vbHRpcC5uelZpc2libGVDaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy4kZGVzdHJveSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1Rvb2x0aXBDb21wb25lbnRWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiRkZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuJGRlc3Ryb3kuY29tcGxldGUoKTtcclxuXHJcbiAgICAvLyBDbGVhciB0b2dnbGluZyB0aW1lci4gSXNzdWUgIzM4NzUgIzQzMTcgIzQzODZcclxuICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbHRpcCAmJiB0aGlzLmlzRHluYW1pY1Rvb2x0aXApIHtcclxuICAgICAgdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkeW5hbWljIHRvb2x0aXAgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGUuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUR5bmFtaWNUb29sdGlwQ29tcG9uZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0R5bmFtaWNUb29sdGlwID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xyXG5cclxuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgIHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXHJcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XHJcbiAgICApOyAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXHJcblxyXG4gICAgLy8gSWYgdGhlIHRvb2x0aXAgY29tcG9uZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQsIHdlIHNob3VsZCBzZXQgaXRzIG9yaWdpbiBiZWZvcmUgdXBkYXRpbmcgcHJvcGVydGllcyB0b1xyXG4gICAgLy8gdGhlIGNvbXBvbmVudC5cclxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMgYXMgQ2RrT3ZlcmxheU9yaWdpbik7XHJcbiAgICAvLyBVcGRhdGUgYWxsIHByb3BlcnRpZXMgdG8gdGhlIGNvbXBvbmVudC5cclxuICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXModGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xyXG4gICAgLy8gV2hlbiB0aGUgbWV0aG9kIGdldHMgaW52b2tlZCwgYWxsIHByb3BlcnRpZXMgaGFzIGJlZW4gc3luY2VkIHRvIHRoZSBkeW5hbWljIGNvbXBvbmVudC5cclxuICAgIC8vIEFmdGVyIHJlbW92aW5nIHRoZSBvbGQgQVBJLCB3ZSBjYW4ganVzdCBjaGVjayB0aGUgZGlyZWN0aXZlJ3Mgb3duIGBuelRyaWdnZXJgLlxyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPyB0aGlzLnRyaWdnZXIgOiB0aGlzLnRvb2x0aXAubnpUcmlnZ2VyO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlclVubGlzdGVuZXJzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSkpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJVbmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnYmx1cicsICgpID0+IHRoaXMuaGlkZSgpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bmMgY2hhbmdlZCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGF0IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMocHJvcGVydGllc09yQ2hhbmdlczogc3RyaW5nW10gfCBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcclxuICAgIGNvbnN0IGtleXNfID0gaXNBcnJheSA/IChwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIHN0cmluZ1tdKSA6IE9iamVjdC5rZXlzKHByb3BlcnRpZXNPckNoYW5nZXMpO1xyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgIGtleXNfLmZvckVhY2goKHByb3BlcnR5OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTEpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNBcnJheSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256Q29udGVudCcsIHRoaXMuY29udGVudCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnQpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCdicHNQb3BvdmVyVHlwZScsIHRoaXMudHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjID0gcHJvcGVydGllc09yQ2hhbmdlcyBhcyBTaW1wbGVDaGFuZ2VzO1xyXG4gICAgICBpZiAoYy5zcGVjaWZpY1RpdGxlIHx8IGMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IGMubnpUaXRsZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VGl0bGUnLCB0aGlzLnRpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY0NvbnRlbnQgfHwgYy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCBjLm56Q29udGVudCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256Q29udGVudCcsIHRoaXMuY29udGVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGMuc3BlY2lmaWNUcmlnZ2VyIHx8IGMubnpUcmlnZ2VyKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5zcGVjaWZpY1BsYWNlbWVudCB8fCBjLm56UGxhY2VtZW50KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvb2x0aXAudXBkYXRlQnlEaXJlY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMudG9vbHRpcFtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGF5RW50ZXJMZWF2ZShpc09yaWdpbjogYm9vbGVhbiwgaXNFbnRlcjogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaXNFbnRlciA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBgaXNPcmlnaW5gIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHlcclxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXHJcbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMuZm9yRWFjaChjYW5jZWwgPT4gY2FuY2VsKCkpO1xyXG4gICAgdGhpcy50cmlnZ2VyVW5saXN0ZW5lcnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJUb2dnbGluZ1RpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=