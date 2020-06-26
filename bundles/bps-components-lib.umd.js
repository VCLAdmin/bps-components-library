(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd'), require('@angular/common'), require('@angular/cdk/overlay'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/empty'), require('@angular/forms'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/grid'), require('@angular/cdk/layout'), require('@angular/platform-browser/animations'), require('@angular/cdk/a11y'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/resizable'), require('@angular/cdk/portal')) :
    typeof define === 'function' && define.amd ? define('bps-components-lib', ['exports', '@angular/core', 'ng-zorro-antd', '@angular/common', '@angular/cdk/overlay', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', 'ng-zorro-antd/empty', '@angular/forms', '@angular/cdk/observers', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', 'ng-zorro-antd/grid', '@angular/cdk/layout', '@angular/platform-browser/animations', '@angular/cdk/a11y', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/i18n', 'ng-zorro-antd/resizable', '@angular/cdk/portal'], factory) :
    (global = global || self, factory(global['bps-components-lib'] = {}, global.ng.core, global.ngZorroAntd, global.ng.common, global.ng.cdk.overlay, global.core$1, global.icon, global.empty, global.ng.forms, global.ng.cdk.observers, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.grid, global.ng.cdk.layout, global.ng.platformBrowser.animations, global.ng.cdk.a11y, global.tooltip, global.i18n, global.resizable, global.ng.cdk.portal));
}(this, (function (exports, core, ngZorroAntd, common, overlay, core$1, icon, empty, forms, observers, platform, rxjs, operators, keycodes, grid, layout, animations, a11y, tooltip, i18n, resizable, portal) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BpsComponentsLibService = /** @class */ (function () {
        function BpsComponentsLibService() {
        }
        BpsComponentsLibService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function BpsComponentsLibService_Factory() { return new BpsComponentsLibService(); }, token: BpsComponentsLibService, providedIn: "root" });
        BpsComponentsLibService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], BpsComponentsLibService);
        return BpsComponentsLibService;
    }());

    var BpsComponentsLibComponent = /** @class */ (function () {
        function BpsComponentsLibComponent() {
        }
        BpsComponentsLibComponent.prototype.ngOnInit = function () {
        };
        BpsComponentsLibComponent = __decorate([
            core.Component({
                selector: 'lib-bps-components-lib',
                template: "\n    <p>\n      bps-components-lib works!\n    </p>\n  "
            })
        ], BpsComponentsLibComponent);
        return BpsComponentsLibComponent;
    }());

    var BpsInputDirective = /** @class */ (function () {
        function BpsInputDirective(renderer, elementRef) {
            this.bpsSize = 'default';
            this.disabled = false;
            this.centered = false;
            this.opened = false;
            this.bpsDisabled = false;
            renderer.addClass(elementRef.nativeElement, 'ant-input');
        }
        BpsInputDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BpsInputDirective.prototype, "bpsSize", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsInputDirective.prototype, "disabled", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsInputDirective.prototype, "centered", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsInputDirective.prototype, "opened", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsInputDirective.prototype, "bpsDisabled", void 0);
        BpsInputDirective = __decorate([
            core.Directive({
                selector: '[bps-input]',
                exportAs: 'bpsInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': "bpsSize === 'large'",
                    '[class.ant-input-sm]': "bpsSize === 'small'",
                    '[class.bps-input-centered]': "centered",
                    '[class.bps-input-opened]': "opened",
                    '[class.bps-custom-disabled]': "bpsDisabled",
                }
            })
        ], BpsInputDirective);
        return BpsInputDirective;
    }());

    function isAutoSizeType(value) {
        return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
    }
    var BpsAutosizeDirective = /** @class */ (function () {
        function BpsAutosizeDirective(elementRef, ngZone, platform, nzDomEventService) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.autosize = false;
            this.el = this.elementRef.nativeElement;
            this.destroy$ = new rxjs.Subject();
            this.inputGap = 10;
        }
        Object.defineProperty(BpsAutosizeDirective.prototype, "bpsAutosize", {
            get: function () {
                return this.autosize;
            },
            set: function (value) {
                if (typeof value === 'string') {
                    this.autosize = true;
                }
                else if (isAutoSizeType(value)) {
                    this.autosize = value;
                    this.minRows = value.minRows;
                    this.maxRows = value.maxRows;
                    this.setMaxHeight();
                    this.setMinHeight();
                }
            },
            enumerable: true,
            configurable: true
        });
        BpsAutosizeDirective.prototype.resizeToFitContent = function (force) {
            var _this = this;
            if (force === void 0) { force = false; }
            this.cacheTextareaLineHeight();
            // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.
            if (!this.cachedLineHeight) {
                return;
            }
            var textarea = this.el;
            var value = textarea.value;
            // Only resize if the value or minRows have changed since these calculations can be expensive.
            if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
                return;
            }
            var placeholderText = textarea.placeholder;
            // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.
            textarea.classList.add('cdk-textarea-autosize-measuring');
            textarea.placeholder = '';
            var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
                this.inputGap;
            // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
            textarea.style.height = height + "px";
            textarea.classList.remove('cdk-textarea-autosize-measuring');
            textarea.placeholder = placeholderText;
            // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
            // We need to re-set the selection in order for it to scroll to the proper position.
            if (typeof requestAnimationFrame !== 'undefined') {
                this.ngZone.runOutsideAngular(function () {
                    return requestAnimationFrame(function () {
                        var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                        // IE will throw an "Unspecified error" if we try to set the selection range after the
                        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                        // between the time we requested the animation frame and when it was executed.
                        // Also note that we have to assert that the textarea is focused before we set the
                        // selection range. Setting the selection range on a non-focused textarea will cause
                        // it to receive focus on IE and Edge.
                        if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                            textarea.setSelectionRange(selectionStart, selectionEnd);
                        }
                    });
                });
            }
            this.previousValue = value;
            this.previousMinRows = this.minRows;
        };
        BpsAutosizeDirective.prototype.cacheTextareaLineHeight = function () {
            if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
                return;
            }
            // Use a clone element because we have to override some styles.
            var textareaClone = this.el.cloneNode(false);
            textareaClone.rows = 1;
            // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.
            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = '';
            // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
            textareaClone.style.overflow = 'hidden';
            this.el.parentNode.appendChild(textareaClone);
            this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
            this.el.parentNode.removeChild(textareaClone);
            // Min and max heights have to be re-calculated if the cached line height changes
            this.setMinHeight();
            this.setMaxHeight();
        };
        BpsAutosizeDirective.prototype.setMinHeight = function () {
            var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
            if (minHeight) {
                this.el.style.minHeight = minHeight;
            }
        };
        BpsAutosizeDirective.prototype.setMaxHeight = function () {
            var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
            if (maxHeight) {
                this.el.style.maxHeight = maxHeight;
            }
        };
        BpsAutosizeDirective.prototype.noopInputHandler = function () {
            // no-op handler that ensures we're running change detection on input events.
        };
        BpsAutosizeDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.bpsAutosize && this.platform.isBrowser) {
                this.resizeToFitContent();
                this.nzDomEventService
                    .registerResizeListener()
                    .pipe(operators.takeUntil(this.destroy$), operators.finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            }
        };
        BpsAutosizeDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BpsAutosizeDirective.prototype.ngDoCheck = function () {
            if (this.bpsAutosize && this.platform.isBrowser) {
                this.resizeToFitContent();
            }
        };
        BpsAutosizeDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: core$1.NzDomEventService }
        ]; };
        __decorate([
            core.Input()
        ], BpsAutosizeDirective.prototype, "bpsAutosize", null);
        BpsAutosizeDirective = __decorate([
            core.Directive({
                selector: 'textarea[bpsAutosize]',
                exportAs: 'bpsAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            })
        ], BpsAutosizeDirective);
        return BpsAutosizeDirective;
    }());

    var BpsInputGroupComponent = /** @class */ (function () {
        function BpsInputGroupComponent() {
            this._size = 'default';
            this.bpsSearch = false;
            this.bpsCompact = false;
        }
        Object.defineProperty(BpsInputGroupComponent.prototype, "bpsSize", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._size = value;
                this.updateChildrenInputSize();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isLarge", {
            get: function () {
                return this.bpsSize === 'large';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isSmall", {
            get: function () {
                return this.bpsSize === 'small';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isAffix", {
            get: function () {
                return !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isAddOn", {
            get: function () {
                return !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isAffixWrapper", {
            get: function () {
                return this.isAffix && !this.isAddOn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isGroup", {
            get: function () {
                return !this.isAffix && !this.isAddOn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeGroup", {
            get: function () {
                return this.isGroup && this.isLarge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeGroupWrapper", {
            get: function () {
                return this.isAddOn && this.isLarge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeAffix", {
            get: function () {
                return this.isAffixWrapper && this.isLarge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeSearch", {
            get: function () {
                return this.bpsSearch && this.isLarge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallGroup", {
            get: function () {
                return this.isGroup && this.isSmall;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallAffix", {
            get: function () {
                return this.isAffixWrapper && this.isSmall;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallGroupWrapper", {
            get: function () {
                return this.isAddOn && this.isSmall;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallSearch", {
            get: function () {
                return this.bpsSearch && this.isSmall;
            },
            enumerable: true,
            configurable: true
        });
        BpsInputGroupComponent.prototype.updateChildrenInputSize = function () {
            var _this = this;
            if (this.listOfNzInputDirective) {
                this.listOfNzInputDirective.forEach(function (item) { return (item.bpsSize = _this.bpsSize); });
            }
        };
        BpsInputGroupComponent.prototype.ngAfterContentInit = function () {
            this.updateChildrenInputSize();
        };
        __decorate([
            core.ContentChildren(BpsInputDirective)
        ], BpsInputGroupComponent.prototype, "listOfNzInputDirective", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsAddOnBeforeIcon", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsAddOnAfterIcon", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsPrefixIcon", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsSuffixIcon", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsAddOnBefore", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsAddOnAfter", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsPrefix", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsSuffix", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
        __decorate([
            core.Input()
        ], BpsInputGroupComponent.prototype, "bpsSize", null);
        BpsInputGroupComponent = __decorate([
            core.Component({
                selector: 'bps-input-group',
                exportAs: 'bpsInputGroup',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"bpsAddOnBefore || bpsAddOnBeforeIcon\">\n    <i nz-icon [nzType]=\"bpsAddOnBeforeIcon\" *ngIf=\"bpsAddOnBeforeIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsAddOnBefore\">{{ bpsAddOnBefore }}</ng-container>\n  </span>\n  <ng-container *ngIf=\"!isAffix\">\n    <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  </ng-container>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"bpsAddOnAfter || bpsAddOnAfterIcon\">\n    <i nz-icon [nzType]=\"bpsAddOnAfterIcon\" *ngIf=\"bpsAddOnAfterIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsAddOnAfter\">{{ bpsAddOnAfter }}</ng-container>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"bpsPrefix || bpsPrefixIcon\">\n    <!-- TODO: should have a class to set its color, cc: antd-->\n    <i nz-icon [nzType]=\"bpsPrefixIcon\" *ngIf=\"bpsPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsPrefix\">{{ bpsPrefix }}</ng-container>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"bpsSuffix || bpsSuffixIcon\">\n    <i nz-icon [nzType]=\"bpsSuffixIcon\" *ngIf=\"bpsSuffixIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsSuffix\">{{ bpsSuffix }}</ng-container>\n  </span>\n</ng-template>\n<ng-container *ngIf=\"isGroup\">\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n</ng-container>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n",
                host: {
                    '[class.ant-input-group-compact]': 'bpsCompact',
                    '[class.ant-input-search-enter-button]': 'bpsSearch',
                    '[class.ant-input-search]': 'bpsSearch',
                    '[class.ant-input-search-sm]': 'isSmallSearch',
                    '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                    '[class.ant-input-group-wrapper]': 'isAddOn',
                    '[class.ant-input-group]': 'isGroup',
                    '[class.ant-input-group-lg]': 'isLargeGroup',
                    '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                    '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                    '[class.ant-input-search-lg]': 'isLargeSearch',
                    '[class.ant-input-group-sm]': 'isSmallGroup',
                    '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                    '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                }
            })
        ], BpsInputGroupComponent);
        return BpsInputGroupComponent;
    }());

    var BpsOptionComponent = /** @class */ (function () {
        function BpsOptionComponent() {
            this.changes = new rxjs.Subject();
            this.bpsDisabled = false;
            this.bpsHide = false;
            this.bpsCustomContent = false;
        }
        BpsOptionComponent.prototype.ngOnChanges = function () {
            this.changes.next();
        };
        __decorate([
            core.ViewChild(core.TemplateRef, { static: false })
        ], BpsOptionComponent.prototype, "template", void 0);
        __decorate([
            core.Input()
        ], BpsOptionComponent.prototype, "bpsLabel", void 0);
        __decorate([
            core.Input()
        ], BpsOptionComponent.prototype, "bpsValue", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsOptionComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsOptionComponent.prototype, "bpsHide", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsOptionComponent.prototype, "bpsCustomContent", void 0);
        BpsOptionComponent = __decorate([
            core.Component({
                selector: 'bps-option',
                exportAs: 'bpsOption',
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
            })
        ], BpsOptionComponent);
        return BpsOptionComponent;
    }());

    var BpsFilterOptionPipe = /** @class */ (function () {
        function BpsFilterOptionPipe() {
        }
        BpsFilterOptionPipe.prototype.transform = function (options, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return options;
            }
            else {
                return options.filter(function (o) { return filterOption(searchValue, o); });
            }
        };
        BpsFilterOptionPipe = __decorate([
            core.Pipe({ name: 'bpsFilterOption' })
        ], BpsFilterOptionPipe);
        return BpsFilterOptionPipe;
    }());
    var BpsFilterGroupOptionPipe = /** @class */ (function () {
        function BpsFilterGroupOptionPipe() {
        }
        BpsFilterGroupOptionPipe.prototype.transform = function (groups, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return groups;
            }
            else {
                return groups.filter(function (g) {
                    return g.listOfNzOptionComponent.some(function (o) { return filterOption(searchValue, o); });
                });
            }
        };
        BpsFilterGroupOptionPipe = __decorate([
            core.Pipe({ name: 'bpsFilterGroupOption' })
        ], BpsFilterGroupOptionPipe);
        return BpsFilterGroupOptionPipe;
    }());
    function defaultFilterOption(searchValue, option) {
        if (option && option.bpsLabel) {
            return option.bpsLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }

    var BpsSelectService = /** @class */ (function () {
        function BpsSelectService() {
            var _this = this;
            // tslint:disable-next-line:jsdoc-format
            /** Input params **/
            this.autoClearSearchValue = true;
            this.serverSearch = false;
            this.filterOption = defaultFilterOption;
            this.mode = 'default';
            this.maxMultipleCount = Infinity;
            this.disabled = false;
            // tslint:disable-next-line:jsdoc-format
            /** selectedValueChanged should emit ngModelChange or not **/
            // tslint:disable-next-line:no-any
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false
            });
            // tslint:disable-next-line:jsdoc-format
            /** ContentChildren Change **/
            this.mapOfTemplateOption$ = new rxjs.BehaviorSubject({
                listOfNzOptionComponent: [],
                listOfNzOptionGroupComponent: []
            });
            // tslint:disable-next-line:jsdoc-format
            /** searchValue Change **/
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.open = false;
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.isShowNotFound = false;
            // tslint:disable-next-line:jsdoc-format
            /** animation event **/
            this.animationEvent$ = new rxjs.Subject();
            // tslint:disable-next-line:jsdoc-format
            /** open event **/
            this.open$ = this.openRaw$.pipe(operators.distinctUntilChanged());
            this.activatedOption$ = new rxjs.ReplaySubject(1);
            this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(operators.map(function (data) { return data.value; }));
            this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(operators.filter(function (item) { return item.emit; }), operators.map(function (data) {
                var selectedList = data.value;
                var modelValue = null; // tslint:disable-line:no-any
                if (_this.isSingleMode) {
                    if (selectedList.length) {
                        modelValue = selectedList[0];
                    }
                }
                else {
                    modelValue = selectedList;
                }
                return modelValue;
            }));
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap(function (value) {
                _this.searchValue = value;
                if (value) {
                    _this.updateActivatedOption(_this.listOfFilteredOption[0]);
                }
                _this.updateListOfFilteredOption();
            }));
            // tslint:disable-next-line:no-any
            this.listOfSelectedValue = [];
            // tslint:disable-next-line:jsdoc-format
            /** flat ViewChildren **/
            this.listOfTemplateOption = [];
            // tslint:disable-next-line:jsdoc-format
            /** tag option **/
            this.listOfTagOption = [];
            // tslint:disable-next-line:jsdoc-format
            /** tag option concat template option **/
            this.listOfTagAndTemplateOption = [];
            // tslint:disable-next-line:jsdoc-format
            /** ViewChildren **/
            this.listOfNzOptionComponent = [];
            this.listOfNzOptionGroupComponent = [];
            // tslint:disable-next-line:jsdoc-format
            /** display in top control **/
            this.listOfCachedSelectedOption = [];
            // tslint:disable-next-line:jsdoc-format
            /** selected value or ViewChildren change **/
            this.valueOrOption$ = rxjs.combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(operators.tap(function (data) {
                var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
                _this.listOfSelectedValue = listOfSelectedValue;
                _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
                _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
                _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
                _this.updateListOfTagOption();
                _this.updateListOfFilteredOption();
                _this.resetActivatedOptionIfNeeded();
                _this.updateListOfCachedOption();
            }), operators.share());
            this.check$ = rxjs.merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(operators.share());
            // tslint:disable-next-line:no-any
            this.compareWith = function (o1, o2) { return o1 === o2; };
        }
        Object.defineProperty(BpsSelectService.prototype, "isSingleMode", {
            get: function () {
                return this.mode === 'default';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectService.prototype, "isTagsMode", {
            get: function () {
                return this.mode === 'tags';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectService.prototype, "isMultipleMode", {
            get: function () {
                return this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectService.prototype, "isMultipleOrTags", {
            get: function () {
                return this.mode === 'tags' || this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        BpsSelectService.prototype.clickOption = function (option) {
            var _this = this;
            // tslint:disable-next-line:jsdoc-format
            /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
            if (!option.bpsDisabled) {
                this.updateActivatedOption(option);
                var listOfSelectedValue = __spread(this.listOfSelectedValue);
                if (this.isMultipleOrTags) {
                    var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.bpsValue); });
                    if (core$1.isNotNil(targetValue)) {
                        listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                    else if (listOfSelectedValue.length < this.maxMultipleCount) {
                        listOfSelectedValue.push(option.bpsValue);
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                }
                else if (!this.compareWith(listOfSelectedValue[0], option.bpsValue)) {
                    listOfSelectedValue = [option.bpsValue];
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                if (this.isSingleMode) {
                    this.setOpenState(false);
                }
                else if (this.autoClearSearchValue) {
                    this.clearInput();
                }
            }
        };
        BpsSelectService.prototype.updateListOfCachedOption = function () {
            var _this = this;
            if (this.isSingleMode) {
                var selectedOption = this.listOfTemplateOption.find(function (o) {
                    return _this.compareWith(o.bpsValue, _this.listOfSelectedValue[0]);
                });
                if (!core$1.isNil(selectedOption)) {
                    this.listOfCachedSelectedOption = [selectedOption];
                }
            }
            else {
                var listOfCachedSelectedOption_1 = [];
                this.listOfSelectedValue.forEach(function (v) {
                    var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                    var option = listOfMixedOption.find(function (o) { return _this.compareWith(o.bpsValue, v); });
                    if (option) {
                        listOfCachedSelectedOption_1.push(option);
                    }
                });
                this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
            }
        };
        BpsSelectService.prototype.updateListOfTagOption = function () {
            var _this = this;
            if (this.isTagsMode) {
                var listOfMissValue = this.listOfSelectedValue.filter(function (value) { return !_this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.bpsValue, value); }); });
                this.listOfTagOption = listOfMissValue.map(function (value) {
                    var cachedOption = _this.listOfCachedSelectedOption.find(function (o) { return _this.compareWith(o.bpsValue, value); });
                    if (cachedOption) {
                        return cachedOption;
                    }
                    else {
                        var nzOptionComponent = new BpsOptionComponent();
                        nzOptionComponent.bpsValue = value;
                        nzOptionComponent.bpsLabel = value;
                        return nzOptionComponent;
                    }
                });
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
            }
            else {
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
            }
        };
        BpsSelectService.prototype.updateAddTagOption = function () {
            var _this = this;
            var isMatch = this.listOfTagAndTemplateOption.find(function (item) { return item.bpsLabel === _this.searchValue; });
            if (this.isTagsMode && this.searchValue && !isMatch) {
                var option = new BpsOptionComponent();
                option.bpsValue = this.searchValue;
                option.bpsLabel = this.searchValue;
                this.addedTagOption = option;
                this.updateActivatedOption(option);
            }
            else {
                this.addedTagOption = null;
            }
        };
        BpsSelectService.prototype.updateListOfFilteredOption = function () {
            this.updateAddTagOption();
            var listOfFilteredOption = new BpsFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
            this.listOfFilteredOption = this.addedTagOption
                ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
            this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
        };
        BpsSelectService.prototype.clearInput = function () {
            this.clearInput$.next();
        };
        // tslint:disable-next-line:no-any
        BpsSelectService.prototype.updateListOfSelectedValue = function (value, emit) {
            this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
        };
        BpsSelectService.prototype.updateActivatedOption = function (option) {
            this.activatedOption$.next(option);
            this.activatedOption = option;
        };
        BpsSelectService.prototype.tokenSeparate = function (inputValue, tokenSeparators) {
            // tslint:disable-next-line:jsdoc-format
            /** auto tokenSeparators **/
            if (inputValue &&
                inputValue.length &&
                tokenSeparators.length &&
                this.isMultipleOrTags &&
                this.includesSeparators(inputValue, tokenSeparators)) {
                var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
                this.updateSelectedValueByLabelList(listOfLabel);
                this.clearInput();
            }
        };
        BpsSelectService.prototype.includesSeparators = function (str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        BpsSelectService.prototype.splitBySeparators = function (str, separators) {
            var reg = new RegExp("[" + separators.join() + "]");
            var array = str.split(reg).filter(function (token) { return token; });
            return Array.from(new Set(array));
        };
        BpsSelectService.prototype.resetActivatedOptionIfNeeded = function () {
            var _this = this;
            var resetActivatedOption = function () {
                var activatedOption = _this.listOfFilteredOption.find(function (item) {
                    return _this.compareWith(item.bpsValue, _this.listOfSelectedValue[0]);
                });
                _this.updateActivatedOption(activatedOption || null);
            };
            if (this.activatedOption) {
                if (
                // tslint:disable-next-line:no-non-null-assertion
                !this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.bpsValue, _this.activatedOption.bpsValue); }) ||
                    // tslint:disable-next-line:no-non-null-assertion
                    !this.listOfSelectedValue.find(function (item) { return _this.compareWith(item, _this.activatedOption.bpsValue); })) {
                    resetActivatedOption();
                }
            }
            else {
                resetActivatedOption();
            }
        };
        BpsSelectService.prototype.updateTemplateOption = function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
            this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
        };
        BpsSelectService.prototype.updateSearchValue = function (value) {
            this.searchValueRaw$.next(value);
        };
        BpsSelectService.prototype.updateSelectedValueByLabelList = function (listOfLabel) {
            var _this = this;
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            var listOfMatchOptionValue = this.listOfTagAndTemplateOption
                .filter(function (item) { return listOfLabel.indexOf(item.bpsLabel) !== -1; })
                .map(function (item) { return item.bpsValue; })
                .filter(function (item) { return !core$1.isNotNil(_this.listOfSelectedValue.find(function (v) { return _this.compareWith(v, item); })); });
            if (this.isMultipleMode) {
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
            }
            else {
                var listOfUnMatchOptionValue = listOfLabel.filter(function (label) { return _this.listOfTagAndTemplateOption.map(function (item) { return item.bpsLabel; }).indexOf(label) === -1; });
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
            }
        };
        BpsSelectService.prototype.onKeyDown = function (e) {
            var _this = this;
            if (this.disabled) {
                return;
            }
            var keyCode = e.keyCode;
            var eventTarget = e.target;
            var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter(function (item) { return !item.bpsDisabled && !item.bpsHide; });
            var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex(function (item) { return item === _this.activatedOption; });
            switch (keyCode) {
                case keycodes.UP_ARROW:
                    e.preventDefault();
                    var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                    break;
                case keycodes.DOWN_ARROW:
                    e.preventDefault();
                    var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.ENTER:
                    e.preventDefault();
                    if (this.open) {
                        if (this.activatedOption && !this.activatedOption.bpsDisabled) {
                            this.clickOption(this.activatedOption);
                        }
                    }
                    else {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.BACKSPACE:
                    if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                        e.preventDefault();
                        this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                    }
                    break;
                case keycodes.SPACE:
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                        e.preventDefault();
                    }
                    break;
                case keycodes.TAB:
                    this.setOpenState(false);
                    break;
            }
        };
        // tslint:disable-next-line:no-any
        BpsSelectService.prototype.removeValueFormSelected = function (option) {
            var _this = this;
            if (this.disabled || option.bpsDisabled) {
                return;
            }
            var listOfSelectedValue = this.listOfSelectedValue.filter(function (item) { return !_this.compareWith(item, option.bpsValue); });
            this.updateListOfSelectedValue(listOfSelectedValue, true);
            this.clearInput();
        };
        BpsSelectService.prototype.setOpenState = function (value) {
            this.openRaw$.next(value);
            this.open = value;
        };
        BpsSelectService.prototype.check = function () {
            this.checkRaw$.next();
        };
        BpsSelectService = __decorate([
            core.Injectable()
        ], BpsSelectService);
        return BpsSelectService;
    }());

    var BpsOptionLiComponent = /** @class */ (function () {
        function BpsOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
            this.elementRef = elementRef;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.el = this.elementRef.nativeElement;
            this.selected = false;
            this.active = false;
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
        }
        BpsOptionLiComponent.prototype.clickOption = function () {
            this.nzSelectService.clickOption(this.bpsOption);
        };
        BpsOptionLiComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.listOfSelectedValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (list) {
                _this.selected = core$1.isNotNil(list.find(function (v) { return _this.nzSelectService.compareWith(v, _this.bpsOption.bpsValue); }));
                _this.cdr.markForCheck();
            });
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (option) {
                if (option) {
                    _this.active = _this.nzSelectService.compareWith(option.bpsValue, _this.bpsOption.bpsValue);
                }
                else {
                    _this.active = false;
                }
                _this.cdr.markForCheck();
            });
        };
        BpsOptionLiComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BpsOptionLiComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: BpsSelectService },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input()
        ], BpsOptionLiComponent.prototype, "bpsOption", void 0);
        __decorate([
            core.Input()
        ], BpsOptionLiComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
        BpsOptionLiComponent = __decorate([
            core.Component({
                selector: '[bps-option-li]',
                exportAs: 'bpsOptionLi',
                template: "<ng-container *ngIf=\"!bpsOption.bpsCustomContent; else bpsOption.template\">\n  {{bpsOption.bpsLabel}}\n</ng-container>\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!bpsMenuItemSelectedIcon; else bpsMenuItemSelectedIcon\"></i>\n</ng-container>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !bpsOption.bpsDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'bpsOption.bpsDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !bpsOption.bpsDisabled',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                }
            })
        ], BpsOptionLiComponent);
        return BpsOptionLiComponent;
    }());

    var BpsOptionContainerComponent = /** @class */ (function () {
        function BpsOptionContainerComponent(nzSelectService, cdr, ngZone) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.destroy$ = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.bpsScrollToBottom = new core.EventEmitter();
        }
        BpsOptionContainerComponent.prototype.scrollIntoViewIfNeeded = function (option) {
            var _this = this;
            // delay after open
            setTimeout(function () {
                if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                    var targetOption = _this.listOfNzOptionLiComponent.find(function (o) {
                        return _this.nzSelectService.compareWith(o.bpsOption.bpsValue, option.bpsValue);
                    });
                    // tslint:disable:no-any
                    if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                        targetOption.el.scrollIntoViewIfNeeded(false);
                    }
                }
            });
        };
        BpsOptionContainerComponent.prototype.trackLabel = function (_index, option) {
            return option.bpsLabel;
        };
        // tslint:disable-next-line:no-any
        BpsOptionContainerComponent.prototype.trackValue = function (_index, option) {
            return option.bpsValue;
        };
        BpsOptionContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (option) {
                _this.scrollIntoViewIfNeeded(option);
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
            this.ngZone.runOutsideAngular(function () {
                var ul = _this.dropdownUl.nativeElement;
                rxjs.fromEvent(ul, 'scroll')
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                        _this.lastScrollTop = ul.scrollTop;
                        _this.ngZone.run(function () {
                            _this.bpsScrollToBottom.emit();
                        });
                    }
                });
            });
        };
        BpsOptionContainerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.listOfNzOptionLiComponent.changes
                .pipe(operators.map(function (list) { return list.length; }), operators.pairwise(), operators.filter(function (_a) {
                var _b = __read(_a, 2), before = _b[0], after = _b[1];
                return after < before;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function () { return (_this.lastScrollTop = 0); });
        };
        BpsOptionContainerComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BpsOptionContainerComponent.ctorParameters = function () { return [
            { type: BpsSelectService },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.ViewChildren(BpsOptionLiComponent)
        ], BpsOptionContainerComponent.prototype, "listOfNzOptionLiComponent", void 0);
        __decorate([
            core.ViewChild('dropdownUl', { static: true })
        ], BpsOptionContainerComponent.prototype, "dropdownUl", void 0);
        __decorate([
            core.Input()
        ], BpsOptionContainerComponent.prototype, "bpsNotFoundContent", void 0);
        __decorate([
            core.Input()
        ], BpsOptionContainerComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
        __decorate([
            core.Output()
        ], BpsOptionContainerComponent.prototype, "bpsScrollToBottom", void 0);
        BpsOptionContainerComponent = __decorate([
            core.Component({
                selector: '[bps-option-container]',
                exportAs: 'bpsOptionContainer',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: "<ul #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  tabindex=\"0\">\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\n    bps-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"bpsNotFoundContent\"></nz-embed-empty>\n  </li>\n  <li bps-option-li\n    *ngIf=\"nzSelectService.addedTagOption\"\n    [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n    [bpsOption]=\"nzSelectService.addedTagOption\">\n  </li>\n  <ng-container *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\">\n    <li bps-option-li\n      *ngIf=\"!option.bpsHide\"\n      [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n      [bpsOption]=\"option\">\n    </li>\n  </ng-container>\n  <li class=\"ant-select-dropdown-menu-item-group\"\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | bpsFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.bpsLabel : ''\">\n      <ng-container *nzStringTemplateOutlet=\"group.bpsLabel\"> {{group.bpsLabel}} </ng-container>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <ng-container *ngFor=\"let option of group.listOfNzOptionComponent | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\">\n        <li bps-option-li\n          *ngIf=\"!option.bpsHide\"\n          [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n          [bpsOption]=\"option\">\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n  <li bps-option-li\n    *ngFor=\"let option of nzSelectService.listOfTagOption | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\n    [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n    [bpsOption]=\"option\">\n  </li>\n</ul>\n"
            })
        ], BpsOptionContainerComponent);
        return BpsOptionContainerComponent;
    }());

    var BpsOptionGroupComponent = /** @class */ (function () {
        function BpsOptionGroupComponent() {
            this.isLabelString = false;
        }
        Object.defineProperty(BpsOptionGroupComponent.prototype, "bpsLabel", {
            get: function () {
                return this.label;
            },
            set: function (value) {
                this.label = value;
                this.isLabelString = !(this.bpsLabel instanceof core.TemplateRef);
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.ContentChildren(BpsOptionComponent)
        ], BpsOptionGroupComponent.prototype, "listOfNzOptionComponent", void 0);
        __decorate([
            core.Input()
        ], BpsOptionGroupComponent.prototype, "bpsLabel", null);
        BpsOptionGroupComponent = __decorate([
            core.Component({
                selector: 'bps-option-group',
                exportAs: 'bpsOptionGroup',
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            })
        ], BpsOptionGroupComponent);
        return BpsOptionGroupComponent;
    }());

    var BpsSelectTopControlComponent = /** @class */ (function () {
        function BpsSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
            this.renderer = renderer;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.isComposing = false;
            this.destroy$ = new rxjs.Subject();
            this.bpsShowSearch = false;
            this.bpsOpen = false;
            this.bpsAllowClear = false;
            this.bpsShowArrow = true;
            this.bpsLoading = false;
            this.bpsTokenSeparators = [];
        }
        BpsSelectTopControlComponent.prototype.onClearSelection = function (e) {
            e.stopPropagation();
            this.nzSelectService.updateListOfSelectedValue([], true);
        };
        BpsSelectTopControlComponent.prototype.setInputValue = function (value) {
            /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
            if (this.inputDOM && !value) {
                this.inputDOM.value = value;
            }
            this.inputValue = value;
            this.updateWidth();
            this.nzSelectService.updateSearchValue(value);
            this.nzSelectService.tokenSeparate(this.inputValue, this.bpsTokenSeparators);
        };
        Object.defineProperty(BpsSelectTopControlComponent.prototype, "mirrorDOM", {
            get: function () {
                return this.mirrorElement && this.mirrorElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectTopControlComponent.prototype, "inputDOM", {
            get: function () {
                return this.inputElement && this.inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: function () {
                return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectTopControlComponent.prototype, "selectedValueStyle", {
            get: function () {
                var showSelectedValue = false;
                var opacity = 1;
                if (!this.bpsShowSearch) {
                    showSelectedValue = true;
                }
                else {
                    if (this.bpsOpen) {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                        if (showSelectedValue) {
                            opacity = 0.4;
                        }
                    }
                    else {
                        showSelectedValue = true;
                    }
                }
                return {
                    display: showSelectedValue ? 'block' : 'none',
                    opacity: "" + opacity
                };
            },
            enumerable: true,
            configurable: true
        });
        // tslint:disable-next-line:no-any
        BpsSelectTopControlComponent.prototype.trackValue = function (_index, option) {
            return option.bpsValue;
        };
        BpsSelectTopControlComponent.prototype.updateWidth = function () {
            if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
                this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
                this.renderer.removeStyle(this.inputDOM, 'width');
                this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
            }
            else if (this.inputDOM) {
                this.renderer.removeStyle(this.inputDOM, 'width');
                this.mirrorDOM.innerText = '';
            }
        };
        BpsSelectTopControlComponent.prototype.removeSelectedValue = function (option, e) {
            this.nzSelectService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        BpsSelectTopControlComponent.prototype.animationEnd = function () {
            this.nzSelectService.animationEvent$.next();
        };
        BpsSelectTopControlComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (open) {
                if (_this.inputElement && open) {
                    setTimeout(function () { return _this.inputDOM.focus(); });
                }
            });
            this.nzSelectService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.setInputValue('');
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        BpsSelectTopControlComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BpsSelectTopControlComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: BpsSelectService },
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.ViewChild('inputElement', { static: false })
        ], BpsSelectTopControlComponent.prototype, "inputElement", void 0);
        __decorate([
            core.ViewChild('mirrorElement', { static: false })
        ], BpsSelectTopControlComponent.prototype, "mirrorElement", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsShowSearch", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsPlaceHolder", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsOpen", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsMaxTagCount", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsAllowClear", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsShowArrow", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsLoading", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsCustomTemplate", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsSuffixIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsClearIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsRemoveIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsMaxTagPlaceholder", void 0);
        __decorate([
            core.Input()
        ], BpsSelectTopControlComponent.prototype, "bpsTokenSeparators", void 0);
        BpsSelectTopControlComponent = __decorate([
            core.Component({
                selector: '[bps-select-top-control]',
                exportAs: 'bpsSelectTopControl',
                preserveWhitespaces: false,
                animations: [core$1.zoomMotion],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-template #inputTemplate>\n  <input #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzSelectService.disabled\">\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"bpsPlaceHolder\"\n    bps-select-unselectable\n    [style.display]=\"placeHolderDisplay\"\n    class=\"ant-select-selection__placeholder\">{{ bpsPlaceHolder }}</div>\n  <!--single mode-->\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\n    <!--selected label-->\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel\"\n      [ngStyle]=\"selectedValueStyle\">\n      <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel }}</ng-container>\n      </ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"bpsShowSearch\"\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"bpsOpen ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </div>\n    </div>\n  </ng-container>\n  <!--multiple or tags mode-->\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : bpsMaxTagCount;trackBy:trackValue; let index = index\">\n      <li [@zoomMotion]\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [attr.title]=\"option.bpsLabel\"\n        [class.ant-select-selection__choice__disabled]=\"option.bpsDisabled\"\n        (@zoomMotion.done)=\"animationEnd()\"\n        class=\"ant-select-selection__choice\">\n        <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\n          <div class=\"ant-select-selection__choice__content\">{{ option.bpsLabel }}</div>\n        </ng-container>\n        <span *ngIf=\"!option.bpsDisabled\"\n          class=\"ant-select-selection__choice__remove\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"removeSelectedValue(option, $event)\">\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!bpsRemoveIcon; else bpsRemoveIcon\"></i>\n        </span>\n      </li>\n    </ng-container>\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > bpsMaxTagCount\"\n      [@zoomMotion]\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      (@zoomMotion.done)=\"animationEnd()\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">\n        <ng-container *ngIf=\"bpsMaxTagPlaceholder\">\n          <ng-template\n            [ngTemplateOutlet]=\"bpsMaxTagPlaceholder\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: bpsMaxTagCount}\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!bpsMaxTagPlaceholder\">\n          + {{ nzSelectService.listOfCachedSelectedOption.length - bpsMaxTagCount }} ...\n        </ng-container>\n      </div>\n    </li>\n    <li class=\"ant-select-search ant-select-search--inline\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n    </li>\n  </ul>\n</div>\n<span *ngIf=\"bpsAllowClear && nzSelectService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  bps-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!bpsClearIcon; else bpsClearIcon\" class=\"ant-select-close-icon\"></i>\n  </span>\n<span class=\"ant-select-arrow\" bps-select-unselectable *ngIf=\"bpsShowArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.078\" height=\"5.098\" viewBox=\"0 0 8.078 5.098\">\n        <path id=\"prefix__sps_arrowdown_icon_white\" d=\"M-20718.77 13286l2.977 2.977 2.977-2.977\" transform=\"translate(20719.832 -13284.939)\" style=\"fill:none;stroke:#fff;stroke-linecap:round;stroke-width:1.5px\"/>\n    </svg>\n    <!--<i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!bpsSuffixIcon; else bpsSuffixIcon\"></i>-->\n  </ng-template>\n</span>\n"
            }),
            __param(3, core.Host()), __param(3, core.Optional())
        ], BpsSelectTopControlComponent);
        return BpsSelectTopControlComponent;
    }());

    var BpsSelectComponent = /** @class */ (function () {
        function BpsSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this.open = false;
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.dropDownPosition = 'bottom';
            this._disabled = false;
            this.isInit = false;
            this.destroy$ = new rxjs.Subject();
            this.bpsOnSearch = new core.EventEmitter();
            this.bpsScrollToBottom = new core.EventEmitter();
            this.bpsOpenChange = new core.EventEmitter();
            this.bpsBlur = new core.EventEmitter();
            this.bpsFocus = new core.EventEmitter();
            this.bpsSize = 'default';
            this.bpsDropdownMatchSelectWidth = true;
            this.bpsAllowClear = false;
            this.bpsShowSearch = false;
            this.bpsLoading = false;
            this.bpsAutoFocus = false;
            this.bpsShowArrow = true;
            this.bpsTokenSeparators = [];
            renderer.addClass(elementRef.nativeElement, 'ant-select');
        }
        BpsSelectComponent_1 = BpsSelectComponent;
        Object.defineProperty(BpsSelectComponent.prototype, "bpsAutoClearSearchValue", {
            set: function (value) {
                this.nzSelectService.autoClearSearchValue = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsMaxMultipleCount", {
            set: function (value) {
                this.nzSelectService.maxMultipleCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsServerSearch", {
            set: function (value) {
                this.nzSelectService.serverSearch = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsMode", {
            set: function (value) {
                this.nzSelectService.mode = value;
                this.nzSelectService.check();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsFilterOption", {
            set: function (value) {
                this.nzSelectService.filterOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "compareWith", {
            set: function (value) {
                this.nzSelectService.compareWith = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsOpen", {
            set: function (value) {
                this.open = value;
                this.nzSelectService.setOpenState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsDisabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = core$1.toBoolean(value);
                this.nzSelectService.disabled = this._disabled;
                this.nzSelectService.check();
                if (this.bpsDisabled && this.isInit) {
                    this.closeDropDown();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsSelectComponent.prototype, "bpsSelectTopControlDOM", {
            get: function () {
                return this.bpsSelectTopControlElement && this.bpsSelectTopControlElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        BpsSelectComponent.prototype.updateAutoFocus = function () {
            if (this.bpsSelectTopControlDOM && this.bpsAutoFocus) {
                this.bpsSelectTopControlDOM.focus();
            }
        };
        BpsSelectComponent.prototype.focus = function () {
            if (this.bpsSelectTopControlDOM) {
                this.bpsSelectTopControlDOM.focus();
            }
        };
        BpsSelectComponent.prototype.blur = function () {
            if (this.bpsSelectTopControlDOM) {
                this.bpsSelectTopControlDOM.blur();
            }
        };
        BpsSelectComponent.prototype.onFocus = function () {
            this.bpsFocus.emit();
        };
        BpsSelectComponent.prototype.onBlur = function () {
            this.bpsBlur.emit();
        };
        BpsSelectComponent.prototype.onKeyDown = function (event) {
            this.nzSelectService.onKeyDown(event);
        };
        BpsSelectComponent.prototype.toggleDropDown = function () {
            if (!this.bpsDisabled) {
                this.nzSelectService.setOpenState(!this.open);
            }
        };
        BpsSelectComponent.prototype.closeDropDown = function () {
            this.nzSelectService.setOpenState(false);
        };
        BpsSelectComponent.prototype.onPositionChange = function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        BpsSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
            if (this.platform.isBrowser) {
                this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
            }
        };
        BpsSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        };
        /** update ngModel -> update listOfSelectedValue **/
        // tslint:disable-next-line:no-any
        BpsSelectComponent.prototype.writeValue = function (value) {
            this.value = value;
            var listValue = []; // tslint:disable-line:no-any
            if (core$1.isNotNil(value)) {
                if (this.nzSelectService.isMultipleOrTags) {
                    listValue = value;
                }
                else {
                    listValue = [value];
                }
            }
            this.nzSelectService.updateListOfSelectedValue(listValue, false);
            this.cdr.markForCheck();
        };
        BpsSelectComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BpsSelectComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BpsSelectComponent.prototype.setDisabledState = function (isDisabled) {
            this.bpsDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        BpsSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.animationEvent$
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.updateCdkConnectedOverlayPositions(); });
            this.nzSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                _this.bpsOnSearch.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            });
            this.nzSelectService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (modelValue) {
                if (_this.value !== modelValue) {
                    _this.value = modelValue;
                    _this.onChange(_this.value);
                }
            });
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (value) {
                if (_this.open !== value) {
                    _this.bpsOpenChange.emit(value);
                }
                if (value) {
                    _this.focus();
                    _this.updateCdkConnectedOverlayStatus();
                }
                else {
                    _this.blur();
                    _this.onTouched();
                }
                _this.open = value;
                _this.nzSelectService.clearInput();
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        BpsSelectComponent.prototype.ngAfterViewInit = function () {
            this.updateCdkConnectedOverlayStatus();
            this.updateAutoFocus();
            this.isInit = true;
        };
        BpsSelectComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.listOfNzOptionGroupComponent.changes
                .pipe(operators.startWith(true), operators.flatMap(function () {
                return rxjs.merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                    _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map(function (option) { return option.changes; }), _this.listOfNzOptionGroupComponent.map(function (group) {
                    return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : rxjs.EMPTY;
                }))).pipe(operators.startWith(true));
            }))
                .subscribe(function () {
                _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
            });
        };
        BpsSelectComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        var BpsSelectComponent_1;
        BpsSelectComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: BpsSelectService },
            { type: core.ChangeDetectorRef },
            { type: platform.Platform },
            { type: core.ElementRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.ViewChild(overlay.CdkOverlayOrigin, { static: false })
        ], BpsSelectComponent.prototype, "cdkOverlayOrigin", void 0);
        __decorate([
            core.ViewChild(overlay.CdkConnectedOverlay, { static: false })
        ], BpsSelectComponent.prototype, "cdkConnectedOverlay", void 0);
        __decorate([
            core.ViewChild(BpsSelectTopControlComponent, { static: true })
        ], BpsSelectComponent.prototype, "bpsSelectTopControlComponent", void 0);
        __decorate([
            core.ViewChild(BpsSelectTopControlComponent, { static: true, read: core.ElementRef })
        ], BpsSelectComponent.prototype, "bpsSelectTopControlElement", void 0);
        __decorate([
            core.ContentChildren(BpsOptionComponent)
        ], BpsSelectComponent.prototype, "listOfNzOptionComponent", void 0);
        __decorate([
            core.ContentChildren(BpsOptionGroupComponent)
        ], BpsSelectComponent.prototype, "listOfNzOptionGroupComponent", void 0);
        __decorate([
            core.Output()
        ], BpsSelectComponent.prototype, "bpsOnSearch", void 0);
        __decorate([
            core.Output()
        ], BpsSelectComponent.prototype, "bpsScrollToBottom", void 0);
        __decorate([
            core.Output()
        ], BpsSelectComponent.prototype, "bpsOpenChange", void 0);
        __decorate([
            core.Output()
        ], BpsSelectComponent.prototype, "bpsBlur", void 0);
        __decorate([
            core.Output()
        ], BpsSelectComponent.prototype, "bpsFocus", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsSize", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsDropdownClassName", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsDropdownMatchSelectWidth", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsDropdownStyle", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsNotFoundContent", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSelectComponent.prototype, "bpsAllowClear", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSelectComponent.prototype, "bpsShowSearch", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSelectComponent.prototype, "bpsLoading", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSelectComponent.prototype, "bpsAutoFocus", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsPlaceHolder", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsMaxTagCount", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsDropdownRender", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsCustomTemplate", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsSuffixIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsClearIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsRemoveIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsShowArrow", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsTokenSeparators", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsMaxTagPlaceholder", void 0);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsAutoClearSearchValue", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsMaxMultipleCount", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsServerSearch", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsMode", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsFilterOption", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "compareWith", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsOpen", null);
        __decorate([
            core.Input()
        ], BpsSelectComponent.prototype, "bpsDisabled", null);
        BpsSelectComponent = BpsSelectComponent_1 = __decorate([
            core.Component({
                selector: 'bps-select',
                exportAs: 'bpsSelect',
                preserveWhitespaces: false,
                providers: [
                    BpsSelectService,
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsSelectComponent_1; }),
                        multi: true
                    }
                ],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                animations: [core$1.slideMotion],
                template: "<div cdkOverlayOrigin\n  bps-select-top-control\n  tabindex=\"0\"\n  class=\"ant-select-selection\"\n  [bpsOpen]=\"open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [bpsMaxTagPlaceholder]=\"bpsMaxTagPlaceholder\"\n  [bpsPlaceHolder]=\"bpsPlaceHolder\"\n  [bpsAllowClear]=\"bpsAllowClear\"\n  [bpsMaxTagCount]=\"bpsMaxTagCount\"\n  [bpsShowArrow]=\"bpsShowArrow\"\n  [bpsLoading]=\"bpsLoading\"\n  [bpsCustomTemplate]=\"bpsCustomTemplate\"\n  [bpsSuffixIcon]=\"bpsSuffixIcon\"\n  [bpsClearIcon]=\"bpsClearIcon\"\n  [bpsRemoveIcon]=\"bpsRemoveIcon\"\n  [bpsShowSearch]=\"bpsShowSearch\"\n  [bpsTokenSeparators]=\"bpsTokenSeparators\"\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\n  (focus)=\"onFocus()\"\n  (blur)=\"onBlur()\"\n  (keydown)=\"onKeyDown($event)\">\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"bpsDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"bpsDropdownMatchSelectWidth? triggerWidth - 21 : null\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"open\">\n  <div\n    class=\"ant-select-dropdown\"\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[bpsDropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"bpsDropdownStyle\">\n    <div bps-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      (keydown)=\"onKeyDown($event)\"\n      [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n      [bpsNotFoundContent]=\"bpsNotFoundContent\"\n      (bpsScrollToBottom)=\"bpsScrollToBottom.emit()\">\n    </div>\n    <ng-template [ngTemplateOutlet]=\"bpsDropdownRender\"></ng-template>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                host: {
                    '[class.ant-select-lg]': 'bpsSize==="large"',
                    '[class.ant-select-sm]': 'bpsSize==="small"',
                    '[class.ant-select-enabled]': '!bpsDisabled',
                    '[class.ant-select-no-arrow]': '!bpsShowArrow',
                    '[class.ant-select-disabled]': 'bpsDisabled',
                    '[class.ant-select-allow-clear]': 'bpsAllowClear',
                    '[class.ant-select-open]': 'open',
                    '(click)': 'toggleDropDown()'
                },
                styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
            }),
            __param(5, core.Host()), __param(5, core.Optional())
        ], BpsSelectComponent);
        return BpsSelectComponent;
    }());

    var BpsSelectUnselectableDirective = /** @class */ (function () {
        function BpsSelectUnselectableDirective() {
        }
        BpsSelectUnselectableDirective = __decorate([
            core.Directive({
                selector: '[bps-select-unselectable]',
                exportAs: 'bpsSelectUnselectable',
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            })
        ], BpsSelectUnselectableDirective);
        return BpsSelectUnselectableDirective;
    }());

    var BpsFormExplainComponent = /** @class */ (function () {
        function BpsFormExplainComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
            core$1.warnDeprecation("'bps-form-explain' is going to be removed in 9.0.0. Use [bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip] in bps-form-control instead. Read https://ng.ant.design/components/form/en");
        }
        BpsFormExplainComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        BpsFormExplainComponent = __decorate([
            core.Component({
                selector: 'bps-form-explain',
                exportAs: 'bpsFormExplain',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                animations: [core$1.helpMotion],
                template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>",
                styles: ["\n      bps-form-explain {\n        display: block;\n      }\n    "]
            })
            /**
             * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
             */
        ], BpsFormExplainComponent);
        return BpsFormExplainComponent;
    }());

    /** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
    var BpsFormItemComponent = /** @class */ (function (_super) {
        __extends(BpsFormItemComponent, _super);
        function BpsFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
            var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) || this;
            _this.cdr = cdr;
            _this.bpsFlex = false;
            _this.withHelpClass = false;
            _this.tipsMode = false;
            renderer.addClass(elementRef.nativeElement, 'ant-form-item');
            return _this;
        }
        BpsFormItemComponent.prototype.updateFlexStyle = function () {
            if (this.bpsFlex) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
            }
            else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            }
        };
        BpsFormItemComponent.prototype.setWithHelpViaTips = function (value) {
            this.tipsMode = true;
            this.withHelpClass = value;
            this.cdr.markForCheck();
        };
        BpsFormItemComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.tipsMode) {
                this.listOfNzFormExplainComponent.changes
                    .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.withHelpClass = _this.listOfNzFormExplainComponent && _this.listOfNzFormExplainComponent.length > 0;
                    _this.cdr.markForCheck();
                });
            }
        };
        BpsFormItemComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.updateFlexStyle();
        };
        BpsFormItemComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        BpsFormItemComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
            if (changes.hasOwnProperty('bpsFlex')) {
                this.updateFlexStyle();
            }
        };
        BpsFormItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core$1.NzUpdateHostClassService },
            { type: layout.MediaMatcher },
            { type: core.NgZone },
            { type: platform.Platform },
            { type: core$1.NzDomEventService },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsFormItemComponent.prototype, "bpsFlex", void 0);
        __decorate([
            core.ContentChildren(BpsFormExplainComponent, { descendants: true })
        ], BpsFormItemComponent.prototype, "listOfNzFormExplainComponent", void 0);
        BpsFormItemComponent = __decorate([
            core.Component({
                selector: 'bps-form-item',
                exportAs: 'bpsFormItem',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                providers: [core$1.NzUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                styles: ["\n      bps-form-item {\n        display: block;\n      }\n    "]
            })
        ], BpsFormItemComponent);
        return BpsFormItemComponent;
    }(grid.NzRowDirective));

    var BpsFormLabelComponent = /** @class */ (function (_super) {
        __extends(BpsFormLabelComponent, _super);
        function BpsFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
            var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
            _this.cdr = cdr;
            _this.bpsRequired = false;
            _this.defaultNoColon = false;
            _this.noColon = 'default';
            renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
            return _this;
        }
        Object.defineProperty(BpsFormLabelComponent.prototype, "bpsNoColon", {
            get: function () {
                return !!this.noColon;
            },
            set: function (value) {
                this.noColon = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        BpsFormLabelComponent.prototype.setDefaultNoColon = function (value) {
            this.defaultNoColon = core$1.toBoolean(value);
            this.cdr.markForCheck();
        };
        BpsFormLabelComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        BpsFormLabelComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        BpsFormLabelComponent.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: BpsFormItemComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: grid.NzRowDirective, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], BpsFormLabelComponent.prototype, "bpsFor", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
        __decorate([
            core.Input()
        ], BpsFormLabelComponent.prototype, "bpsNoColon", null);
        BpsFormLabelComponent = __decorate([
            core.Component({
                selector: 'bps-form-label',
                exportAs: 'bpsFormLabel',
                providers: [core$1.NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n"
            }),
            __param(2, core.Optional()), __param(2, core.Host()),
            __param(3, core.Optional()), __param(3, core.Host())
        ], BpsFormLabelComponent);
        return BpsFormLabelComponent;
    }(grid.NzColDirective));

    var NZ_CONFIG_COMPONENT_NAME = 'form';
    var BpsFormDirective = /** @class */ (function () {
        function BpsFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
            this.nzConfigService = nzConfigService;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.bpsLayout = 'horizontal';
            this.destroy$ = new rxjs.Subject();
            this.renderer.addClass(elementRef.nativeElement, 'ant-form');
        }
        BpsFormDirective.prototype.setClassMap = function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["ant-form-" + this.bpsLayout] = this.bpsLayout,
                _a));
        };
        BpsFormDirective.prototype.updateItemsDefaultColon = function () {
            var _this = this;
            if (this.bpsFormLabelComponent) {
                this.bpsFormLabelComponent.forEach(function (item) { return item.setDefaultNoColon(_this.bpsNoColon); });
            }
        };
        BpsFormDirective.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        BpsFormDirective.prototype.ngOnChanges = function (changes) {
            this.setClassMap();
            if (changes.hasOwnProperty('bpsNoColon')) {
                this.updateItemsDefaultColon();
            }
        };
        BpsFormDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.bpsFormLabelComponent.changes
                .pipe(operators.startWith(null), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.updateItemsDefaultColon();
            });
        };
        BpsFormDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BpsFormDirective.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        __decorate([
            core.Input()
        ], BpsFormDirective.prototype, "bpsLayout", void 0);
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean()
        ], BpsFormDirective.prototype, "bpsNoColon", void 0);
        __decorate([
            core.ContentChildren(BpsFormLabelComponent, { descendants: true })
        ], BpsFormDirective.prototype, "bpsFormLabelComponent", void 0);
        BpsFormDirective = __decorate([
            core.Directive({
                selector: '[bps-form]',
                exportAs: 'bpsForm',
                providers: [core$1.NzUpdateHostClassService]
            })
        ], BpsFormDirective);
        return BpsFormDirective;
    }());

    var BpsFormControlComponent = /** @class */ (function (_super) {
        __extends(BpsFormControlComponent, _super);
        function BpsFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
            var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
            _this.nzFormItemComponent = nzFormItemComponent;
            _this.cdr = cdr;
            _this._hasFeedback = false;
            _this.validateChanges = rxjs.Subscription.EMPTY;
            _this.status = null;
            _this.controlClassMap = {};
            renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
            return _this;
        }
        Object.defineProperty(BpsFormControlComponent.prototype, "bpsHasFeedback", {
            get: function () {
                return this._hasFeedback;
            },
            set: function (value) {
                this._hasFeedback = core$1.toBoolean(value);
                this.setControlClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsFormControlComponent.prototype, "bpsValidateStatus", {
            set: function (value) {
                if (value instanceof forms.FormControl || value instanceof forms.NgModel) {
                    this.validateControl = value;
                    this.validateString = null;
                    this.watchControl();
                }
                else if (value instanceof forms.FormControlName) {
                    this.validateControl = value.control;
                    this.validateString = null;
                    this.watchControl();
                }
                else {
                    this.validateString = value;
                    this.validateControl = null;
                    this.setControlClassMap();
                }
            },
            enumerable: true,
            configurable: true
        });
        BpsFormControlComponent.prototype.removeSubscribe = function () {
            this.validateChanges.unsubscribe();
        };
        BpsFormControlComponent.prototype.watchControl = function () {
            var _this = this;
            this.removeSubscribe();
            /** miss detect https://github.com/angular/angular/issues/10887 **/
            if (this.validateControl && this.validateControl.statusChanges) {
                this.validateChanges = this.validateControl.statusChanges.pipe(operators.startWith(null)).subscribe(function () {
                    _this.setControlClassMap();
                    _this.cdr.markForCheck();
                });
            }
        };
        BpsFormControlComponent.prototype.validateControlStatus = function (status) {
            return (!!this.validateControl &&
                (this.validateControl.dirty || this.validateControl.touched) &&
                this.validateControl.status === status);
        };
        BpsFormControlComponent.prototype.setControlClassMap = function () {
            var _a;
            if (this.validateString === 'warning') {
                this.status = 'warning';
                this.iconType = 'exclamation-circle-fill';
            }
            else if (this.validateString === 'validating' ||
                this.validateString === 'pending' ||
                this.validateControlStatus('PENDING')) {
                this.status = 'validating';
                this.iconType = 'loading';
            }
            else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
                this.status = 'error';
                this.iconType = 'close-circle-fill';
            }
            else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
                this.status = 'success';
                this.iconType = 'check-circle-fill';
            }
            else {
                this.status = null;
                this.iconType = '';
            }
            if (this.hasTips) {
                this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
            }
            this.controlClassMap = (_a = {},
                _a["has-warning"] = this.status === 'warning',
                _a["is-validating"] = this.status === 'validating',
                _a["has-error"] = this.status === 'error',
                _a["has-success"] = this.status === 'success',
                _a["has-feedback"] = this.bpsHasFeedback && this.status,
                _a);
        };
        Object.defineProperty(BpsFormControlComponent.prototype, "hasTips", {
            get: function () {
                return !!(this.bpsSuccessTip || this.bpsWarningTip || this.bpsErrorTip || this.bpsValidatingTip);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsFormControlComponent.prototype, "showSuccessTip", {
            get: function () {
                return this.status === 'success' && !!this.bpsSuccessTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsFormControlComponent.prototype, "showWarningTip", {
            get: function () {
                return this.status === 'warning' && !!this.bpsWarningTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsFormControlComponent.prototype, "showErrorTip", {
            get: function () {
                return this.status === 'error' && !!this.bpsErrorTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsFormControlComponent.prototype, "showValidatingTip", {
            get: function () {
                return this.status === 'validating' && !!this.bpsValidatingTip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BpsFormControlComponent.prototype, "showInnerTip", {
            get: function () {
                return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
            },
            enumerable: true,
            configurable: true
        });
        BpsFormControlComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.setControlClassMap();
        };
        BpsFormControlComponent.prototype.ngOnDestroy = function () {
            this.removeSubscribe();
            _super.prototype.ngOnDestroy.call(this);
        };
        BpsFormControlComponent.prototype.ngAfterContentInit = function () {
            if (!this.validateControl && !this.validateString) {
                if (this.defaultValidateControl instanceof forms.FormControlDirective) {
                    this.bpsValidateStatus = this.defaultValidateControl.control;
                }
                else {
                    this.bpsValidateStatus = this.defaultValidateControl;
                }
            }
        };
        BpsFormControlComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        BpsFormControlComponent.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: BpsFormItemComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: grid.NzRowDirective, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.ContentChild(forms.NgControl, { static: false })
        ], BpsFormControlComponent.prototype, "defaultValidateControl", void 0);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsSuccessTip", void 0);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsWarningTip", void 0);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsErrorTip", void 0);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsValidatingTip", void 0);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsExtra", void 0);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsHasFeedback", null);
        __decorate([
            core.Input()
        ], BpsFormControlComponent.prototype, "bpsValidateStatus", null);
        BpsFormControlComponent = __decorate([
            core.Component({
                selector: 'bps-form-control',
                exportAs: 'bpsFormControl',
                preserveWhitespaces: false,
                animations: [core$1.helpMotion],
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [core$1.NzUpdateHostClassService],
                template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                styles: ["\n      bps-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "]
            }),
            __param(2, core.Optional()), __param(2, core.Host()),
            __param(3, core.Optional()), __param(3, core.Host())
        ], BpsFormControlComponent);
        return BpsFormControlComponent;
    }(grid.NzColDirective));

    var BpsFormExtraComponent = /** @class */ (function () {
        function BpsFormExtraComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
            core$1.warnDeprecation("'bps-form-extra' is going to be removed in 9.0.0. Use [bpsExtra] in bps-form-control instead. Read https://ng.ant.design/components/form/en");
        }
        BpsFormExtraComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        BpsFormExtraComponent = __decorate([
            core.Component({
                selector: 'bps-form-extra',
                exportAs: 'bpsFormExtra',
                template: "<ng-content></ng-content>",
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["\n      bps-form-extra {\n        display: block;\n      }\n    "]
            })
            /**
             * @deprecated Use `[bpsExtra]` in `BpsFormControlComponent` instead, will remove in 9.0.0.
             */
        ], BpsFormExtraComponent);
        return BpsFormExtraComponent;
    }());

    var BpsFormSplitComponent = /** @class */ (function () {
        function BpsFormSplitComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
        }
        BpsFormSplitComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        BpsFormSplitComponent = __decorate([
            core.Component({
                selector: 'bps-form-split',
                exportAs: 'bpsFormSplit',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            })
        ], BpsFormSplitComponent);
        return BpsFormSplitComponent;
    }());

    var BpsFormTextComponent = /** @class */ (function () {
        function BpsFormTextComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
        }
        BpsFormTextComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        BpsFormTextComponent = __decorate([
            core.Component({
                selector: 'bps-form-text',
                exportAs: 'bpsFormText',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            })
        ], BpsFormTextComponent);
        return BpsFormTextComponent;
    }());

    var NZ_CONFIG_COMPONENT_NAME$1 = 'button';
    var BpsButtonComponent = /** @class */ (function () {
        function BpsButtonComponent(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
            var _this = this;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.renderer = renderer;
            this.contentObserver = contentObserver;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.ngZone = ngZone;
            this.nzConfigService = nzConfigService;
            this.waveConfig = waveConfig;
            this.animationType = animationType;
            this.isSelected = false;
            this.showEditionMode = false;
            this.nzWave = new core$1.NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
            this.bpsBlock = false;
            this.bpsGhost = false;
            this.bpsSearch = false;
            this.bpsComputed = false;
            this.bpsLoading = false;
            this.bpsType = 'default';
            this.bpsValue = '';
            this.bpsValueChange = new core.EventEmitter();
            this.bpsShape = null;
            this.el = this.elementRef.nativeElement;
            this.isInDropdown = false;
            this.iconOnly = false;
            this.destroy$ = new rxjs.Subject();
            this.clicks = 0;
            this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME$1)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.setClassMap();
                _this.cdr.markForCheck();
            });
        }
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
        BpsButtonComponent.prototype.setClassMap = function () {
            var _a;
            var prefixCls = 'ant-btn';
            var sizeMap = { large: 'lg', small: 'sm' };
            this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
                _a[prefixCls + "-" + this.bpsType] = this.bpsType,
                _a[prefixCls + "-" + this.bpsShape] = this.bpsShape,
                _a[prefixCls + "-" + sizeMap[this.bpsSize]] = sizeMap[this.bpsSize],
                _a[prefixCls + "-loading"] = this.bpsLoading,
                _a[prefixCls + "-icon-only"] = this.iconOnly && !this.bpsSearch && !this.isInDropdown,
                _a[prefixCls + "-background-ghost"] = this.bpsGhost,
                _a[prefixCls + "-block"] = this.bpsBlock,
                _a["ant-input-search-button"] = this.bpsSearch,
                _a));
        };
        BpsButtonComponent.prototype.updateIconDisplay = function (value) {
            if (this.iconElement) {
                this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
            }
        };
        BpsButtonComponent.prototype.checkContent = function () {
            var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
            if (hasIcon) {
                this.moveIcon();
            }
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            /** https://github.com/angular/angular/issues/12530 **/
            if (core$1.isEmpty(this.contentElement.nativeElement)) {
                this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
                this.iconOnly = !!hasIcon;
            }
            else {
                this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
                this.iconOnly = false;
            }
            this.setClassMap();
            this.updateIconDisplay(this.bpsLoading);
            if (!this.cdr.destroyed) {
                this.cdr.detectChanges();
            }
        };
        BpsButtonComponent.prototype.moveIcon = function () {
            if (this.listOfIconElement && this.listOfIconElement.length) {
                var firstChildElement = core$1.findFirstNotEmptyNode(this.contentElement.nativeElement);
                var lastChildElement = core$1.findLastNotEmptyNode(this.contentElement.nativeElement);
                if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                    this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                    this.iconElement = firstChildElement;
                }
                else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                    this.renderer.appendChild(this.el, lastChildElement);
                }
            }
        };
        BpsButtonComponent.prototype.preventDefault = function ($event) {
            $event.preventDefault();
            $event.stopImmediatePropagation();
        };
        BpsButtonComponent.prototype.handleClick = function (e) {
            if (this.bpsType !== 'editable') {
                return;
            }
            if (this.showEditionMode && this.inputElement && this.inputElement.nativeElement !== e.target) {
                this.showEditionMode = false;
                this.bpsValueChange.emit(this.bpsValue);
            }
        };
        BpsButtonComponent.prototype.endEditMode = function ($event) {
            this.preventDefault($event);
            if ($event.key === ('Enter' || 'enter')) {
                this.showEditionMode = false;
                this.bpsValueChange.emit(this.bpsValue);
            }
        };
        BpsButtonComponent.prototype.onClick = function (event) {
            var _this = this;
            if (this.bpsType !== 'editable') {
                return;
            }
            this.clicks++;
            setTimeout(function () {
                if (_this.clicks === 1) {
                    _this.isSelected = !_this.isSelected;
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
                _this.clicks = 0;
            }, 300);
        };
        BpsButtonComponent.prototype.onDblClick = function (event) {
            if (this.bpsType !== 'editable') {
                return;
            }
            event.preventDefault();
            event.stopImmediatePropagation();
            this.showEditionMode = true;
            this.inputElement.nativeElement.focus();
            this.inputElement.nativeElement.select();
        };
        BpsButtonComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.contentElement) {
                return;
            }
            this.contentObserver
                .observe(this.contentElement)
                .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
                Promise.resolve().then(function () { return _this.checkContent(); });
            });
        };
        BpsButtonComponent.prototype.ngOnInit = function () {
            this.setClassMap();
            this.nzWave.ngOnInit();
        };
        BpsButtonComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.nzWave.ngOnDestroy();
        };
        BpsButtonComponent.prototype.ngOnChanges = function (changes) {
            if (changes.bpsBlock ||
                changes.bpsGhost ||
                changes.bpsSearch ||
                changes.bpsType ||
                changes.bpsShape ||
                changes.bpsSize ||
                changes.bpsLoading) {
                this.setClassMap();
            }
            if (changes.bpsLoading) {
                this.updateIconDisplay(this.bpsLoading);
            }
            if (changes.bpsType && changes.bpsType.currentValue === 'link') {
                this.nzWave.disable();
            }
            else {
                this.nzWave.enable();
            }
        };
        BpsButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: observers.ContentObserver },
            { type: core$1.NzUpdateHostClassService },
            { type: core.NgZone },
            { type: core$1.NzConfigService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.NZ_WAVE_GLOBAL_CONFIG,] }] },
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
        ]; };
        __decorate([
            core.ViewChild('contentElement', { static: true })
        ], BpsButtonComponent.prototype, "contentElement", void 0);
        __decorate([
            core.ContentChildren(icon.NzIconDirective, { read: core.ElementRef })
        ], BpsButtonComponent.prototype, "listOfIconElement", void 0);
        __decorate([
            core.HostBinding('attr.nz-wave')
        ], BpsButtonComponent.prototype, "nzWave", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsButtonComponent.prototype, "bpsBlock", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsButtonComponent.prototype, "bpsGhost", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsButtonComponent.prototype, "bpsSearch", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsButtonComponent.prototype, "bpsComputed", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsButtonComponent.prototype, "bpsLoading", void 0);
        __decorate([
            core.Input()
        ], BpsButtonComponent.prototype, "bpsType", void 0);
        __decorate([
            core.Input()
        ], BpsButtonComponent.prototype, "bpsValue", void 0);
        __decorate([
            core.Output()
        ], BpsButtonComponent.prototype, "bpsValueChange", void 0);
        __decorate([
            core.Input()
        ], BpsButtonComponent.prototype, "bpsShape", void 0);
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$1, 'default')
        ], BpsButtonComponent.prototype, "bpsSize", void 0);
        __decorate([
            core.ViewChild(BpsInputDirective, { static: true, read: core.ElementRef })
        ], BpsButtonComponent.prototype, "inputElement", void 0);
        __decorate([
            core.HostListener('window:mouseup', ['$event'])
        ], BpsButtonComponent.prototype, "handleClick", null);
        __decorate([
            core.HostListener('click', ['$event'])
        ], BpsButtonComponent.prototype, "onClick", null);
        __decorate([
            core.HostListener('dblclick', ['$event'])
        ], BpsButtonComponent.prototype, "onDblClick", null);
        BpsButtonComponent = __decorate([
            core.Component({
                selector: '[bps-button]',
                exportAs: 'bpsButton',
                providers: [core$1.NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\n\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\n<input #inputElement bps-input\n       autofocus\n       (focus)=\"$event.target.select()\"\n       [class.bps-invisible]=\"!showEditionMode\"\n       (click)=\"preventDefault($event)\"\n       (dblclick)=\"preventDefault($event)\"\n       (keyup)=\"endEditMode($event)\"\n       class=\"bps-button-editable-input\"\n       [(ngModel)]=\"bpsValue\"\n/>\n\n<span class=\"bps-computed-icon\" *ngIf=\"bpsType === 'editable'\">\n  <img *ngIf=\"bpsComputed\" src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\n  <img *ngIf=\"!bpsComputed\" src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\n</span>\n",
                host: {
                    '[class.bps-button-editable-selected]': 'isSelected',
                    '[class.bps-button-editable-onedition]': 'showEditionMode'
                },
                styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:2px solid #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1.active,.ant-btn-variation-1:active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:focus{box-shadow:0 0 12px 0 #00a2d1!important;color:#00a2d1!important;border:2px solid #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:2px solid #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2.active,.ant-btn-variation-2:active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:focus{box-shadow:0 0 12px 0 #00a2d1!important;color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-editable,.ant-btn-variation-6,.ant-btn-variation-7,.ant-btn-variation-8{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover,.ant-btn-variation-3[disabled],.ant-btn-variation-3[disabled]:hover,.ant-btn-variation-4[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-5[disabled],.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-6[disabled],.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-7[disabled],.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-8[disabled],.ant-btn-variation-8[disabled]:hover,.ant-btn-variation-9[disabled],.ant-btn-variation-9[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-3:hover,.ant-btn-variation-4:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important}.ant-btn-editable[disabled]:hover{background-color:#363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3.active,.ant-btn-variation-3:active,.ant-btn-variation-4.active,.ant-btn-variation-4:active,.ant-btn-variation-5.active,.ant-btn-variation-5:active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9.active,.ant-btn-variation-9:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7.active,.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6.active,.ant-btn-variation-6:active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8.active,.ant-btn-variation-8:active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:focus,.ant-btn-variation-7:focus,.ant-btn-variation-8:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-10:hover,.ant-btn-variation-11,.ant-btn-variation-11:hover,.ant-btn-variation-13,.ant-btn-variation-13:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11,.ant-btn-variation-11:hover{background-color:#253d47!important}.ant-btn-variation-10[disabled],.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled],.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled],.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled],.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled],.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled],.ant-btn-variation-20[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled] svg,.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-16[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-10.active,.ant-btn-variation-10:active,.ant-btn-variation-11.active,.ant-btn-variation-11:active,.ant-btn-variation-13.active,.ant-btn-variation-13:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:2px solid #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled] svg,.ant-btn-variation-12[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-12.active,.ant-btn-variation-12:active{background-color:#00a2d1!important}.ant-btn-variation-12:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important}.ant-btn-variation-14,.ant-btn-variation-15,.ant-btn-variation-16{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14.active,.ant-btn-variation-14:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16.active,.ant-btn-variation-16:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15.active,.ant-btn-variation-15:active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#00a2d1!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-15:focus,.ant-btn-variation-16:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-17,.ant-btn-variation-17:hover{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:2px solid #fff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17.active,.ant-btn-variation-17:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#888!important}.ant-btn-variation-17[disabled],.ant-btn-variation-17[disabled]:hover{border:2px solid #666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18,.ant-btn-variation-18:hover,.ant-btn-variation-19,.ant-btn-variation-19:hover{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19,.ant-btn-variation-19:hover{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18.active,.ant-btn-variation-18:active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-19:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#262626!important}.ant-btn-variation-18[disabled],.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-19[disabled]:hover{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled] svg,.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-20[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20.active,.ant-btn-variation-20:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:focus{background-color:#363636!important;box-shadow:0 0 8px 0 #00a2d1!important;border:none!important}.bps-button-editable-selected{border:1px solid #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}"]
            }),
            __param(7, core.Optional()), __param(7, core.Inject(core$1.NZ_WAVE_GLOBAL_CONFIG)),
            __param(8, core.Optional()), __param(8, core.Inject(animations.ANIMATION_MODULE_TYPE))
        ], BpsButtonComponent);
        return BpsButtonComponent;
    }());

    var BpsButtonGroupComponent = /** @class */ (function () {
        function BpsButtonGroupComponent(nzUpdateHostClassService, elementRef) {
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.isInDropdown = false;
        }
        Object.defineProperty(BpsButtonGroupComponent.prototype, "bpsSize", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._size = value;
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        BpsButtonGroupComponent.prototype.setClassMap = function () {
            var _a;
            var prefixCls = 'ant-btn-group';
            var classMap = (_a = {},
                _a[prefixCls] = true,
                _a["ant-dropdown-button"] = this.isInDropdown,
                _a[prefixCls + "-lg"] = this.bpsSize === 'large',
                _a[prefixCls + "-sm"] = this.bpsSize === 'small',
                _a);
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
        };
        BpsButtonGroupComponent.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        BpsButtonGroupComponent.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], BpsButtonGroupComponent.prototype, "bpsSize", null);
        BpsButtonGroupComponent = __decorate([
            core.Component({
                selector: 'bps-button-group',
                exportAs: 'bpsButtonGroup',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [core$1.NzUpdateHostClassService],
                template: "<ng-content></ng-content>\n"
            })
        ], BpsButtonGroupComponent);
        return BpsButtonGroupComponent;
    }());

    var NZ_CONFIG_COMPONENT_NAME$2 = 'switch';
    var BpsSwitchComponent = /** @class */ (function () {
        function BpsSwitchComponent(nzConfigService, cdr, focusMonitor) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.checked = false;
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.bpsLoading = false;
            this.bpsDual = false;
            this.bpsDualValues = [];
            this.bpsDualValuesChange = new core.EventEmitter();
            this.bpsDisabled = false;
            this.bpsControl = false;
        }
        BpsSwitchComponent_1 = BpsSwitchComponent;
        BpsSwitchComponent.prototype.hostClick = function (e) {
            e.preventDefault();
            if (!this.bpsDisabled && !this.bpsLoading && !this.bpsControl) {
                this.updateValue(!this.checked);
            }
        };
        BpsSwitchComponent.prototype.checkNode = function (nodeA, nodeB) {
            if (!this.bpsDisabled) {
                nodeA.checked = true;
                nodeB.checked = false;
                this.bpsDualValuesChange.emit(this.bpsDualValues);
            }
        };
        BpsSwitchComponent.prototype.updateValue = function (value) {
            if (this.checked !== value) {
                this.checked = value;
                this.onChange(this.checked);
            }
        };
        BpsSwitchComponent.prototype.onKeyDown = function (e) {
            if (!this.bpsControl && !this.bpsDisabled && !this.bpsLoading) {
                if (e.keyCode === keycodes.LEFT_ARROW) {
                    this.updateValue(false);
                    e.preventDefault();
                }
                else if (e.keyCode === keycodes.RIGHT_ARROW) {
                    this.updateValue(true);
                    e.preventDefault();
                }
                else if (e.keyCode === keycodes.SPACE || e.keyCode === keycodes.ENTER) {
                    this.updateValue(!this.checked);
                    e.preventDefault();
                }
            }
        };
        BpsSwitchComponent.prototype.focus = function () {
            if (this.switchElement) {
                this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
            }
        };
        BpsSwitchComponent.prototype.blur = function () {
            if (this.switchElement) {
                this.switchElement.nativeElement.blur();
            }
        };
        BpsSwitchComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.switchElement) {
                this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(function (focusOrigin) {
                    if (!focusOrigin) {
                        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                        // Angular does not expect events to be raised during change detection, so any state change
                        // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                        // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                        // telling the form control it has been touched until the next tick.
                        Promise.resolve().then(function () { return _this.onTouched(); });
                    }
                });
            }
            this.cdr.detectChanges();
        };
        BpsSwitchComponent.prototype.ngOnDestroy = function () {
            if (this.switchElement) {
                this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
            }
        };
        BpsSwitchComponent.prototype.writeValue = function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        BpsSwitchComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BpsSwitchComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BpsSwitchComponent.prototype.setDisabledState = function (isDisabled) {
            this.bpsDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        var BpsSwitchComponent_1;
        BpsSwitchComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        __decorate([
            core.ViewChild('switchElement', { static: true })
        ], BpsSwitchComponent.prototype, "switchElement", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSwitchComponent.prototype, "bpsLoading", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSwitchComponent.prototype, "bpsDual", void 0);
        __decorate([
            core.Input()
        ], BpsSwitchComponent.prototype, "bpsDualValues", void 0);
        __decorate([
            core.Output()
        ], BpsSwitchComponent.prototype, "bpsDualValuesChange", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSwitchComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsSwitchComponent.prototype, "bpsControl", void 0);
        __decorate([
            core.Input()
        ], BpsSwitchComponent.prototype, "bpsCheckedChildren", void 0);
        __decorate([
            core.Input()
        ], BpsSwitchComponent.prototype, "bpsUnCheckedChildren", void 0);
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$2, 'default')
        ], BpsSwitchComponent.prototype, "bpsSize", void 0);
        BpsSwitchComponent = BpsSwitchComponent_1 = __decorate([
            core.Component({
                selector: 'bps-switch',
                exportAs: 'bpsSwitch',
                preserveWhitespaces: false,
                template: "<ng-container *ngIf=\"!bpsDual\">\r\n  <button type=\"button\" #switchElement\r\n          nz-wave\r\n          class=\"ant-switch\"\r\n          [disabled]=\"bpsDisabled\"\r\n          [class.ant-switch-checked]=\"checked\"\r\n          [class.ant-switch-loading]=\"bpsLoading\"\r\n          [class.ant-switch-disabled]=\"bpsDisabled\"\r\n          [class.ant-switch-small]=\"bpsSize === 'small'\"\r\n          [nzWaveExtraNode]=\"true\"\r\n          (keydown)=\"onKeyDown($event)\">\r\n    <i *ngIf=\"bpsLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n    <span class=\"ant-switch-inner\">\r\n      <span>\r\n        <ng-container *ngIf=\"checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"bpsCheckedChildren\">{{ bpsCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"bpsUnCheckedChildren\">{{ bpsUnCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </button>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"bpsDual\">\r\n  <button type=\"button\" #switchElement\r\n          nz-wave\r\n          class=\"ant-switch bps-switch\"\r\n          [disabled]=\"bpsDisabled\"\r\n          [class.bps-switch-disabled]=\"bpsDisabled\"\r\n          [nzWaveExtraNode]=\"true\"\r\n          (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngIf=\"bpsDualValues.length > 1\">\r\n      <div class=\"bps-switch-inner\">\r\n        <div class=\"bps-switch-node bps-switch-node-left\"\r\n             (click)=\"checkNode(bpsDualValues[0], bpsDualValues[1])\"\r\n             [class.bps-switch-checked]=\"bpsDualValues[0].checked\">\r\n          {{ bpsDualValues[0].title }}\r\n        </div>\r\n        <div class=\"bps-switch-node bps-switch-node-right\"\r\n             (click)=\"checkNode(bpsDualValues[1], bpsDualValues[0])\"\r\n             [class.bps-switch-checked]=\"bpsDualValues[1].checked\">\r\n          {{ bpsDualValues[1].title }}\r\n        </div>\r\n      </div>  \r\n    </ng-container>\r\n  </button>\r\n</ng-container>\r\n\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsSwitchComponent_1; }),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                },
                styles: [".ant-switch::after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:1px solid #666!important;background-color:#363636!important}.ant-switch-checked::after{left:100%!important;margin-left:1px!important;transform:translateX(-100%);border:1px solid #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked{border:1px solid #00a2d1!important}.ant-switch-disabled::after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:1px solid #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch.bps-switch::after{content:''!important;position:relative!important}.bps-switch-node{border-radius:4px;border:1px solid #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff;transition:.3s}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:1px solid #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}", "\n      bps-switch {\n        display: inline-block;\n      }\n    "]
            })
        ], BpsSwitchComponent);
        return BpsSwitchComponent;
    }());

    var BpsCheckboxGroupComponent = /** @class */ (function () {
        function BpsCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer) {
            this.elementRef = elementRef;
            this.focusMonitor = focusMonitor;
            this.cdr = cdr;
            // tslint:disable-next-line:no-any
            this.onChange = function () { return null; };
            // tslint:disable-next-line:no-any
            this.onTouched = function () { return null; };
            this.options = [];
            this.bpsDisabled = false;
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
        }
        BpsCheckboxGroupComponent_1 = BpsCheckboxGroupComponent;
        BpsCheckboxGroupComponent.prototype.onOptionChange = function () {
            this.onChange(this.options);
        };
        BpsCheckboxGroupComponent.prototype.trackByOption = function (_index, option) {
            return option.value;
        };
        BpsCheckboxGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                }
            });
        };
        BpsCheckboxGroupComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        BpsCheckboxGroupComponent.prototype.writeValue = function (value) {
            this.options = value;
            this.cdr.markForCheck();
        };
        BpsCheckboxGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BpsCheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BpsCheckboxGroupComponent.prototype.setDisabledState = function (isDisabled) {
            this.bpsDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        var BpsCheckboxGroupComponent_1;
        BpsCheckboxGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: a11y.FocusMonitor },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCheckboxGroupComponent.prototype, "bpsDisabled", void 0);
        BpsCheckboxGroupComponent = BpsCheckboxGroupComponent_1 = __decorate([
            core.Component({
                selector: 'bps-checkbox-group',
                exportAs: 'bpsCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                template: "<label bps-checkbox\n       class=\"ant-checkbox-group-item\"\n       *ngFor=\"let option of options; trackBy:trackByOption\"\n       [bpsDisabled]=\"option.disabled || bpsDisabled\"\n       [(bpsChecked)]=\"option.checked\"\n       (bpsCheckedChange)=\"onOptionChange()\">\n  <span>{{ option.label }}</span>\n</label>\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsCheckboxGroupComponent_1; }),
                        multi: true
                    }
                ]
            })
        ], BpsCheckboxGroupComponent);
        return BpsCheckboxGroupComponent;
    }());

    var BpsCheckboxWrapperComponent = /** @class */ (function () {
        function BpsCheckboxWrapperComponent(renderer, elementRef) {
            this.bpsOnChange = new core.EventEmitter();
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
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Output()
        ], BpsCheckboxWrapperComponent.prototype, "bpsOnChange", void 0);
        BpsCheckboxWrapperComponent = __decorate([
            core.Component({
                selector: 'bps-checkbox-wrapper',
                exportAs: 'bpsCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            })
        ], BpsCheckboxWrapperComponent);
        return BpsCheckboxWrapperComponent;
    }());

    var BpsCheckboxComponent = /** @class */ (function () {
        function BpsCheckboxComponent(elementRef, renderer, bpsCheckboxWrapperComponent, cdr, focusMonitor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.bpsCheckboxWrapperComponent = bpsCheckboxWrapperComponent;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            // tslint:disable-next-line:no-any
            this.onChange = function () { return null; };
            // tslint:disable-next-line:no-any
            this.onTouched = function () { return null; };
            this.bpsCheckedChange = new core.EventEmitter();
            this.bpsAutoFocus = false;
            this.bpsDisabled = false;
            this.bpsIndeterminate = false;
            this.bpsChecked = false;
            this.bpsType = 'variation2';
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
        }
        BpsCheckboxComponent_1 = BpsCheckboxComponent;
        BpsCheckboxComponent.prototype.hostClick = function (e) {
            e.preventDefault();
            this.focus();
            this.innerCheckedChange(!this.bpsChecked);
        };
        BpsCheckboxComponent.prototype.innerCheckedChange = function (checked) {
            if (!this.bpsDisabled) {
                this.bpsChecked = checked;
                this.onChange(this.bpsChecked);
                this.bpsCheckedChange.emit(this.bpsChecked);
                if (this.bpsCheckboxWrapperComponent) {
                    this.bpsCheckboxWrapperComponent.onChange();
                }
            }
        };
        BpsCheckboxComponent.prototype.updateAutoFocus = function () {
            if (this.inputElement && this.bpsAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        };
        BpsCheckboxComponent.prototype.writeValue = function (value) {
            this.bpsChecked = value;
            this.cdr.markForCheck();
        };
        BpsCheckboxComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BpsCheckboxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BpsCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
            this.bpsDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        BpsCheckboxComponent.prototype.focus = function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        BpsCheckboxComponent.prototype.blur = function () {
            this.inputElement.nativeElement.blur();
        };
        BpsCheckboxComponent.prototype.checkContent = function () {
            if (core$1.isEmpty(this.contentElement.nativeElement)) {
                this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            }
        };
        BpsCheckboxComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                }
            });
            if (this.bpsCheckboxWrapperComponent) {
                this.bpsCheckboxWrapperComponent.addCheckbox(this);
            }
        };
        BpsCheckboxComponent.prototype.ngOnChanges = function (changes) {
            if (changes.bpsAutoFocus) {
                this.updateAutoFocus();
            }
        };
        BpsCheckboxComponent.prototype.ngAfterViewInit = function () {
            this.updateAutoFocus();
            this.checkContent();
        };
        BpsCheckboxComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
            if (this.bpsCheckboxWrapperComponent) {
                this.bpsCheckboxWrapperComponent.removeCheckbox(this);
            }
        };
        var BpsCheckboxComponent_1;
        BpsCheckboxComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: BpsCheckboxWrapperComponent, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        __decorate([
            core.ViewChild('inputElement', { static: true })
        ], BpsCheckboxComponent.prototype, "inputElement", void 0);
        __decorate([
            core.ViewChild('contentElement', { static: false })
        ], BpsCheckboxComponent.prototype, "contentElement", void 0);
        __decorate([
            core.Output()
        ], BpsCheckboxComponent.prototype, "bpsCheckedChange", void 0);
        __decorate([
            core.Input()
        ], BpsCheckboxComponent.prototype, "bpsValue", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCheckboxComponent.prototype, "bpsAutoFocus", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCheckboxComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCheckboxComponent.prototype, "bpsIndeterminate", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCheckboxComponent.prototype, "bpsChecked", void 0);
        __decorate([
            core.Input()
        ], BpsCheckboxComponent.prototype, "bpsType", void 0);
        BpsCheckboxComponent = BpsCheckboxComponent_1 = __decorate([
            core.Component({
                selector: '[bps-checkbox]',
                exportAs: 'bpsCheckbox',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<ng-template #content><ng-content></ng-content></ng-template>\r\n\r\n<span class=\"ant-checkbox\"\r\n  [class.ant-checkbox-checked]=\"bpsChecked && !bpsIndeterminate\"\r\n  [class.ant-checkbox-disabled]=\"bpsDisabled\"\r\n  [class.bps-checkbox-variation1]=\"bpsType === 'variation1'\"\r\n  [class.bps-checkbox-variation3]=\"bpsType === 'variation3'\"\r\n  [class.ant-checkbox-indeterminate]=\"bpsIndeterminate\">\r\n  <input #inputElement [checked]=\"bpsChecked\" [ngModel]=\"bpsChecked\" [disabled]=\"bpsDisabled\" (ngModelChange)=\"innerCheckedChange($event)\" (click)=\"$event.stopPropagation();\" type=\"checkbox\" class=\"ant-checkbox-input\">\r\n  <span class=\"ant-checkbox-inner\">\r\n    <ng-container *ngIf=\"bpsType === 'variation1' || bpsType === 'variation3'\">\r\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n    </ng-container>\r\n  </span>\r\n</span>\r\n<span #contentElement (cdkObserveContent)=\"checkContent()\">\r\n  <ng-container *ngIf=\"bpsType === 'variation2'\">\r\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n  </ng-container>\r\n</span>\r\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsCheckboxComponent_1; }),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                },
                styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:1px solid #707070!important}.ant-checkbox-inner::after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3,.ant-checkbox.bps-checkbox-variation3:hover{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:.3s}.ant-checkbox-checked .ant-checkbox-inner::after{border-color:#00a2d1!important}.ant-checkbox-checked::after{border:none!important}.ant-checkbox-wrapper.cdk-focused .ant-checkbox-inner{box-shadow:0 0 8px 0 #00a2d1!important;border:1px solid #707070!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner::after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner{border:1px solid #666;display:table!important}.bps-checkbox-variation3 .ant-checkbox-inner,.bps-checkbox-variation3 .ant-checkbox-inner:hover{border:none!important;display:table!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:2px solid #00a2d1!important;transition:.1s!important}.bps-checkbox-variation1 .ant-checkbox-inner svg,.bps-checkbox-variation3 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner::after,.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner::after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:2px solid #00a2d1!important}.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner::after,.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}"]
            }),
            __param(2, core.Optional())
        ], BpsCheckboxComponent);
        return BpsCheckboxComponent;
    }());

    var BpsRadioComponent = /** @class */ (function () {
        /* tslint:disable-next-line:no-any */
        function BpsRadioComponent(elementRef, renderer, cdr, focusMonitor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.select$ = new rxjs.Subject();
            this.touched$ = new rxjs.Subject();
            this.checked = false;
            this.isNgModel = false;
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.bpsDisabled = false;
            this.bpsAutoFocus = false;
            this.bpsRadioButtonType = 'variation1';
            this.renderer.addClass(elementRef.nativeElement, 'ant-radio-wrapper');
        }
        BpsRadioComponent_1 = BpsRadioComponent;
        BpsRadioComponent.prototype.updateAutoFocus = function () {
            if (this.inputElement) {
                if (this.bpsAutoFocus) {
                    this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
                }
            }
        };
        BpsRadioComponent.prototype.onClick = function (event) {
            // Prevent label click triggered twice.
            event.stopPropagation();
            event.preventDefault();
            if (!this.bpsDisabled && !this.checked) {
                this.select$.next(this);
                if (this.isNgModel) {
                    this.checked = true;
                    this.onChange(true);
                }
            }
        };
        BpsRadioComponent.prototype.focus = function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        BpsRadioComponent.prototype.blur = function () {
            this.inputElement.nativeElement.blur();
        };
        BpsRadioComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        BpsRadioComponent.prototype.setDisabledState = function (isDisabled) {
            this.bpsDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        BpsRadioComponent.prototype.writeValue = function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        BpsRadioComponent.prototype.registerOnChange = function (fn) {
            this.isNgModel = true;
            this.onChange = fn;
        };
        BpsRadioComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BpsRadioComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                    _this.touched$.next();
                }
            });
            this.updateAutoFocus();
            this.renderer.addClass(this.elementRef.nativeElement, "bps-radio-button-" + this.bpsRadioButtonType);
        };
        BpsRadioComponent.prototype.ngOnChanges = function (changes) {
            if (changes.bpsAutoFocus) {
                this.updateAutoFocus();
            }
        };
        BpsRadioComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        var BpsRadioComponent_1;
        BpsRadioComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        __decorate([
            core.ViewChild('inputElement', { static: false })
        ], BpsRadioComponent.prototype, "inputElement", void 0);
        __decorate([
            core.Input()
        ], BpsRadioComponent.prototype, "bpsValue", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsRadioComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsRadioComponent.prototype, "bpsAutoFocus", void 0);
        __decorate([
            core.Input()
        ], BpsRadioComponent.prototype, "bpsRadioButtonType", void 0);
        __decorate([
            core.HostListener('click', ['$event'])
        ], BpsRadioComponent.prototype, "onClick", null);
        BpsRadioComponent = BpsRadioComponent_1 = __decorate([
            core.Component({
                selector: '[bps-radio]',
                exportAs: 'bpsRadio',
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio\" [class.ant-radio-checked]=\"checked\" [class.ant-radio-disabled]=\"bpsDisabled\">\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"bpsDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>\n",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsRadioComponent_1; }),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-checked]': 'checked',
                    '[class.ant-radio-wrapper-disabled]': 'bpsDisabled'
                }
            })
        ], BpsRadioComponent);
        return BpsRadioComponent;
    }());

    var BpsRadioGroupComponent = /** @class */ (function () {
        function BpsRadioGroupComponent(cdr, renderer, elementRef) {
            this.cdr = cdr;
            this.destroy$ = new rxjs.Subject();
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.bpsButtonStyle = 'outline';
            this.bpsSize = 'default';
            renderer.addClass(elementRef.nativeElement, 'ant-radio-group');
        }
        BpsRadioGroupComponent_1 = BpsRadioGroupComponent;
        BpsRadioGroupComponent.prototype.updateChildrenStatus = function () {
            var _this = this;
            if (this.radios) {
                Promise.resolve().then(function () {
                    _this.radios.forEach(function (radio) {
                        radio.checked = radio.bpsValue === _this.value;
                        if (core$1.isNotNil(_this.bpsDisabled)) {
                            radio.bpsDisabled = _this.bpsDisabled;
                        }
                        if (_this.bpsName) {
                            radio.name = _this.bpsName;
                        }
                        radio.markForCheck();
                    });
                });
            }
        };
        BpsRadioGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.radios.changes
                .pipe(operators.startWith(null), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.updateChildrenStatus();
                if (_this.selectSubscription) {
                    _this.selectSubscription.unsubscribe();
                }
                _this.selectSubscription = rxjs.merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.select$; }))).pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (radio) {
                    if (_this.value !== radio.bpsValue) {
                        _this.value = radio.bpsValue;
                        _this.updateChildrenStatus();
                        _this.onChange(_this.value);
                    }
                });
                if (_this.touchedSubscription) {
                    _this.touchedSubscription.unsubscribe();
                }
                _this.touchedSubscription = rxjs.merge.apply(void 0, __spread(_this.radios.map(function (radio) { return radio.touched$; }))).pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function () {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                });
            });
        };
        BpsRadioGroupComponent.prototype.ngOnChanges = function (changes) {
            if (changes.bpsDisabled || changes.bpsName) {
                this.updateChildrenStatus();
            }
        };
        BpsRadioGroupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /* tslint:disable-next-line:no-any */
        BpsRadioGroupComponent.prototype.writeValue = function (value) {
            this.value = value;
            this.updateChildrenStatus();
            this.cdr.markForCheck();
        };
        BpsRadioGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        BpsRadioGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        BpsRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
            this.bpsDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        var BpsRadioGroupComponent_1;
        BpsRadioGroupComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return BpsRadioComponent; }), { descendants: true })
        ], BpsRadioGroupComponent.prototype, "radios", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsRadioGroupComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input()
        ], BpsRadioGroupComponent.prototype, "bpsButtonStyle", void 0);
        __decorate([
            core.Input()
        ], BpsRadioGroupComponent.prototype, "bpsSize", void 0);
        __decorate([
            core.Input()
        ], BpsRadioGroupComponent.prototype, "bpsName", void 0);
        BpsRadioGroupComponent = BpsRadioGroupComponent_1 = __decorate([
            core.Component({
                selector: 'bps-radio-group',
                exportAs: 'bpsRadioGroup',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsRadioGroupComponent_1; }),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': "bpsSize === 'large'",
                    '[class.ant-radio-group-small]': "bpsSize === 'small'",
                    '[class.ant-radio-group-solid]': "bpsButtonStyle === 'solid'"
                }
            })
        ], BpsRadioGroupComponent);
        return BpsRadioGroupComponent;
    }());

    var BpsRadioButtonComponent = /** @class */ (function (_super) {
        __extends(BpsRadioButtonComponent, _super);
        /* tslint:disable-next-line:no-any */
        function BpsRadioButtonComponent(elementRef, renderer, cdr, focusMonitor) {
            var _this = _super.call(this, elementRef, renderer, cdr, focusMonitor) || this;
            renderer.removeClass(elementRef.nativeElement, 'ant-radio-wrapper');
            renderer.addClass(elementRef.nativeElement, 'ant-radio-button-wrapper');
            return _this;
        }
        BpsRadioButtonComponent_1 = BpsRadioButtonComponent;
        var BpsRadioButtonComponent_1;
        BpsRadioButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        BpsRadioButtonComponent = BpsRadioButtonComponent_1 = __decorate([
            core.Component({
                selector: '[bps-radio-button]',
                exportAs: 'bpsRadioButton',
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return BpsRadioComponent; }),
                        multi: true
                    },
                    {
                        provide: BpsRadioComponent,
                        useExisting: core.forwardRef(function () { return BpsRadioButtonComponent_1; })
                    }
                ],
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"bpsDisabled\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"bpsDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span class=\"bps-custom-content-radio\"><ng-content></ng-content></span>\n",
                host: {
                    '[class.ant-radio-button-wrapper-checked]': 'checked',
                    '[class.ant-radio-button-wrapper-disabled]': 'bpsDisabled'
                },
                styles: [".ant-radio-button-wrapper{margin-right:10px!important;height:40px!important;border-radius:8px!important;border:1px solid #666!important;padding:0!important;line-height:38px!important;background-color:transparent!important;color:#999!important;text-align:center!important}.bps-radio-button-variation2,.bps-radio-button-variation6,.bps-radio-button-variation7{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#999!important}.bps-radio-button-variation6,.bps-radio-button-variation7{font-size:12px!important;border-radius:8px!important;border:1px solid #666!important;margin-right:15px!important}.bps-radio-button-variation7{padding:0 15px!important;margin-bottom:15px!important}.bps-radio-button-variation3,.bps-radio-button-variation5{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:4px!important;background-color:#363636!important;border:1px solid #363636!important}.bps-radio-button-variation5{text-align:unset!important;padding:0 15px!important;margin-bottom:5px!important;margin-right:0!important;display:block!important}.bps-radio-button-variation5 .bps-custom-content-radio,.bps-radio-button-variation7 .bps-custom-content-radio{margin:0!important;width:100%!important}.bps-radio-button-variation5 .bps-custom-content-radio span{position:relative!important;float:left!important}.bps-radio-button-variation5 .bps-custom-content-radio img,.bps-radio-button-variation5 .bps-custom-content-radio svg{float:right!important}.bps-radio-button-variation7 .bps-custom-content-radio{text-align:center!important}.bps-radio-button-variation7 .bps-custom-content-radio img,.bps-radio-button-variation7 .bps-custom-content-radio svg{float:left!important}.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):hover{border:2px solid #7bc053!important;color:#7bc053!important;line-height:36px!important;box-shadow:none!important}.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled):hover{border:2px solid #445c67!important;color:#999!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper-checked.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled){border:2px solid #00a2d1!important;color:#00a2d1!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):hover{border:1px solid #445c67!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.bps-radio-button-variation3.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation5.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:1px solid #00a2d1!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.ant-radio-button-wrapper:not(:first-child)::before{content:unset!important}.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):focus{box-shadow:0 0 8px 0 #00a2d1!important;border:1px solid #666!important;background-color:#262626!important;outline:0!important;color:#999!important}.bps-custom-content-radio{display:table;margin:0 auto;height:100%}.bps-custom-content-radio svg{display:table-cell;vertical-align:middle;height:100%}.bps-custom-content-radio img{vertical-align:middle}.bps-radio-button-variation10{width:40px!important;border-radius:100px!important;border:none!important;line-height:unset!important}.bps-radio-button-variation12{border-radius:100px!important;border:1px solid #bfbfbf!important;line-height:unset!important;margin-right:7px!important;width:25px!important;height:25px!important}.bps-radio-button-variation12 img{max-height:16px;max-width:16px;text-align:center;margin:0 auto;position:relative;left:50%;transform:translateX(-50%)}.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):hover{border:1px solid #bfbfbf!important;line-height:unset!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper-checked.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):hover{border:1px solid #00a2d1!important;line-height:unset!important}.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):focus{line-height:unset!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):hover{border:none!important;line-height:unset!important}.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):focus{box-shadow:0 0 8px 0 #00a2d1!important;border:none!important}.ant-radio-button-wrapper-disabled{border:1px solid #474747!important;color:#474747!important}.bps-radio-button-variation10.ant-radio-button-wrapper-disabled{border:none!important}.ant-radio-button-wrapper-disabled svg{opacity:.2!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):focus,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):focus{box-shadow:0 0 8px 0 #00a2d1!important;border:none!important;background-color:#363636!important;color:#fff!important}.bps-radio-button-variation3.ant-radio-button-wrapper-disabled,.bps-radio-button-variation5.ant-radio-button-wrapper-disabled{color:#666!important;border:none!important;background-color:#363636!important}.bps-radio-button-variation8a span.ant-radio+*,.bps-radio-button-variation8b span.ant-radio+*,.bps-radio-button-variation8c span.ant-radio+*,.bps-radio-button-variation8d span.ant-radio+*,.bps-radio-button-variation8e span.ant-radio+*,.bps-radio-button-variation9 span.ant-radio+*{padding-right:10px!important;padding-left:0!important}.bps-radio-button-variation8a.ant-radio-wrapper,.bps-radio-button-variation8b.ant-radio-wrapper,.bps-radio-button-variation8c.ant-radio-wrapper,.bps-radio-button-variation8d.ant-radio-wrapper,.bps-radio-button-variation8e.ant-radio-wrapper,.bps-radio-button-variation9.ant-radio-wrapper{margin:0!important}.bps-radio-button-variation8a .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-inner{background-color:#262626!important;border-color:#778d98!important}.bps-radio-button-variation8a .ant-radio-inner{border-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner{border-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner{border-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner{border-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner{border-color:#445c67!important}.bps-radio-button-variation8a .ant-radio-inner::after,.bps-radio-button-variation8b .ant-radio-inner::after,.bps-radio-button-variation8c .ant-radio-inner::after,.bps-radio-button-variation8d .ant-radio-inner::after,.bps-radio-button-variation8e .ant-radio-inner::after,.bps-radio-button-variation9 .ant-radio-inner::after{background-color:#778d98!important;opacity:1!important;transform:scale(1)!important}.bps-radio-button-variation8a .ant-radio-inner::after{background-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner::after{background-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner::after{background-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner::after{background-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner::after{background-color:#445c67!important}.bps-radio-button-variation8a .ant-radio::after,.bps-radio-button-variation8b .ant-radio::after,.bps-radio-button-variation8c .ant-radio::after,.bps-radio-button-variation8d .ant-radio::after,.bps-radio-button-variation8e .ant-radio::after,.bps-radio-button-variation9 .ant-radio::after{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:1px solid #778d98!important;border-radius:50%!important;-webkit-animation:.36s ease-in-out both antRadioEffect!important;animation:.36s ease-in-out both antRadioEffect!important;content:' '!important}.bps-radio-button-variation8a .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-checked .ant-radio-inner{border-color:#f18700!important}.bps-radio-button-variation8a .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8b .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8c .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8d .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation8e .ant-radio-input:focus+.ant-radio-inner,.bps-radio-button-variation9 .ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 8px 0 #00a2d1!important;border:1px solid #778d98!important}.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner::after,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner::after{opacity:0!important}.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner{background-color:#363636!important;border:none!important}.bps-radio-button-variation11{line-height:32px!important}.bps-radio-button-variation11.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation11:not(.ant-radio-button-wrapper-disabled):hover{border:2px solid #00a2d1!important;color:#00a2d1!important;line-height:34px!important;box-shadow:none!important}.bps-radio-button-variation12.ant-radio-button-wrapper-disabled,.bps-radio-button-variation12.ant-radio-button-wrapper-disabled:hover{border:1px solid #666!important}"]
            })
        ], BpsRadioButtonComponent);
        return BpsRadioButtonComponent;
    }(BpsRadioComponent));

    var NZ_CONFIG_COMPONENT_NAME$3 = 'collapse';
    var BpsCollapseComponent = /** @class */ (function () {
        function BpsCollapseComponent(nzConfigService) {
            this.nzConfigService = nzConfigService;
            this.listOfNzCollapsePanelComponent = [];
        }
        BpsCollapseComponent.prototype.addPanel = function (value) {
            this.listOfNzCollapsePanelComponent.push(value);
        };
        BpsCollapseComponent.prototype.removePanel = function (value) {
            this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
        };
        BpsCollapseComponent.prototype.click = function (collapse) {
            if (this.bpsAccordion && !collapse.bpsActive) {
                this.listOfNzCollapsePanelComponent
                    .filter(function (item) { return item !== collapse; })
                    .forEach(function (item) {
                    if (item.bpsActive) {
                        item.bpsActive = false;
                        item.bpsActiveChange.emit(item.bpsActive);
                        item.markForCheck();
                    }
                });
            }
            collapse.bpsActive = !collapse.bpsActive;
            collapse.bpsActiveChange.emit(collapse.bpsActive);
        };
        BpsCollapseComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService }
        ]; };
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$3, false), core$1.InputBoolean()
        ], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$3, true), core$1.InputBoolean()
        ], BpsCollapseComponent.prototype, "bpsBordered", void 0);
        BpsCollapseComponent = __decorate([
            core.Component({
                selector: 'bps-collapse',
                exportAs: 'bpsCollapse',
                template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                styles: ["\n      bps-collapse {\n        display: block;\n      }\n    ", ".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}"]
            })
        ], BpsCollapseComponent);
        return BpsCollapseComponent;
    }());

    var NZ_CONFIG_COMPONENT_NAME$4 = 'collapsePanel';
    var BpsCollapsePanelComponent = /** @class */ (function () {
        function BpsCollapsePanelComponent(nzConfigService, cdr, bpsCollapseComponent, elementRef, renderer) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.bpsCollapseComponent = bpsCollapseComponent;
            this.bpsActive = false;
            this.bpsDisabled = false;
            this.bpsValid = null;
            this.bpsActiveChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
        }
        BpsCollapsePanelComponent.prototype.clickHeader = function () {
            if (!this.bpsDisabled) {
                this.bpsCollapseComponent.click(this);
            }
        };
        BpsCollapsePanelComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        BpsCollapsePanelComponent.prototype.ngOnInit = function () {
            this.bpsCollapseComponent.addPanel(this);
        };
        BpsCollapsePanelComponent.prototype.ngOnDestroy = function () {
            this.bpsCollapseComponent.removePanel(this);
        };
        BpsCollapsePanelComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ChangeDetectorRef },
            { type: BpsCollapseComponent, decorators: [{ type: core.Host }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCollapsePanelComponent.prototype, "bpsActive", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsCollapsePanelComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input()
        ], BpsCollapsePanelComponent.prototype, "bpsValid", void 0);
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$4, true), core$1.InputBoolean()
        ], BpsCollapsePanelComponent.prototype, "bpsShowArrow", void 0);
        __decorate([
            core.Input()
        ], BpsCollapsePanelComponent.prototype, "bpsExtra", void 0);
        __decorate([
            core.Input()
        ], BpsCollapsePanelComponent.prototype, "bpsHeader", void 0);
        __decorate([
            core.Input()
        ], BpsCollapsePanelComponent.prototype, "bpsExpandedIcon", void 0);
        __decorate([
            core.Output()
        ], BpsCollapsePanelComponent.prototype, "bpsActiveChange", void 0);
        BpsCollapsePanelComponent = __decorate([
            core.Component({
                selector: 'bps-collapse-panel',
                exportAs: 'bpsCollapsePanel',
                template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"bpsShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\r\n      <div class=\"ant-collapse-arrow bps-status-indicator\"\r\n           [class.bps-collapse-panel-invalid]=\"bpsValid !== null && !bpsValid\"\r\n           [class.bps-collapse-panel-valid]=\"bpsValid\"></div>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_enabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-d1 {\r\n              fill: #666\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_disabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_enabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#fff\" />\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_disabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#666\" />\r\n      </svg>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"bpsActive\"\r\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                animations: [core$1.collapseMotion],
                host: {
                    '[class.ant-collapse-no-arrow]': '!bpsShowArrow',
                    '[class.ant-collapse-item-active]': 'bpsActive',
                    '[class.ant-collapse-item-disabled]': 'bpsDisabled'
                },
                styles: ["\n      bps-collapse-panel {\n        display: block;\n      }\n    ", ".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px 0 #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}"]
            }),
            __param(2, core.Host())
        ], BpsCollapsePanelComponent);
        return BpsCollapsePanelComponent;
    }());

    var BpsPopoverComponent = /** @class */ (function (_super) {
        __extends(BpsPopoverComponent, _super);
        function BpsPopoverComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this._prefix = 'ant-popover-placement';
            _this.bpsPopoverType = 'variation_1';
            return _this;
        }
        BpsPopoverComponent_1 = BpsPopoverComponent;
        var BpsPopoverComponent_1;
        BpsPopoverComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], BpsPopoverComponent.prototype, "bpsPopoverType", void 0);
        __decorate([
            core.Input()
        ], BpsPopoverComponent.prototype, "bpsTitle", void 0);
        __decorate([
            core.ContentChild('neverUsedTemplate', { static: true })
        ], BpsPopoverComponent.prototype, "bpsTitleTemplate", void 0);
        __decorate([
            core.Input()
        ], BpsPopoverComponent.prototype, "bpsContent", void 0);
        __decorate([
            core.ContentChild('nzTemplate', { static: true })
        ], BpsPopoverComponent.prototype, "bpsContentTemplate", void 0);
        BpsPopoverComponent = BpsPopoverComponent_1 = __decorate([
            core.Component({
                selector: 'bps-popover',
                exportAs: 'bpsPopoverComponent',
                animations: [core$1.zoomBigMotion],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"_visible\">\n  <div class=\"ant-popover\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow bps-popover-arrow-{{bpsPopoverType}}\"></div>\n      <div class=\"ant-popover-inner bps-popover-inner-{{bpsPopoverType}}\" role=\"tooltip\">\n        <div>\n          <div class=\"ant-popover-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </div>\n          <div class=\"ant-popover-inner-content bps-popover-inner-content-{{bpsPopoverType}}\">\n            <ng-container *nzStringTemplateOutlet=\"content\">{{ content }}</ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                providers: [
                    {
                        provide: tooltip.NzTooltipBaseComponentLegacy,
                        useExisting: BpsPopoverComponent_1
                    }
                ],
                preserveWhitespaces: false,
                styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    ", ".ant-popover-placement-right .ant-popover-arrow{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;border:1px solid #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-inner-content-variation_1{max-width:325px;width:325px;height:415px;max-height:415px}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-content-variation_2{max-width:595px;width:595px;height:415px;max-height:415px}.bps-popover-inner-content-variation_3{max-width:325px;width:325px;height:315px;max-height:315px}.bps-popover-inner-content-variation_4{max-width:215px;width:215px;height:170px;max-height:170px}.bps-popover-inner-content-variation_5{max-width:230px;width:230px;height:160px;max-height:160px}.bps-popover-inner-content-variation_6{max-width:245px;width:245px;height:55px;max-height:55px}.bps-popover-inner-content-variation_7a,.bps-popover-inner-content-variation_7b{max-width:455px;width:455px;height:75px;max-height:75px}.bps-popover-inner-variation_7a{border:1px solid #7bc053!important}.ant-popover-placement-right .ant-popover-arrow.bps-popover-arrow-variation_7a{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow.bps-popover-arrow-variation_7a{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow.bps-popover-arrow-variation_7a{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow.bps-popover-arrow-variation_7a{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}"]
            }),
            __param(1, core.Host()), __param(1, core.Optional())
        ], BpsPopoverComponent);
        return BpsPopoverComponent;
    }(tooltip.NzToolTipComponent));

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
            this.nzVisibleChange = new core.EventEmitter();
            this.isTooltipComponentVisible = false;
            /**
             * @deprecated 9.0.0. Tooltips would always be dynamic in 9.0.0.
             */
            this.isDynamicTooltip = false;
            this.triggerUnlisteners = [];
            this.$destroy = new rxjs.Subject();
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
                core$1.warnDeprecation("'<nz-tooltip></nz-tooltip>', '<nz-popover></nz-popover>' and '<nz-popconfirm></nz-popconfirm>' is deprecated and will be removed in 9.0.0. Refer: https://ng.ant.design/components/tooltip/zh .");
                this.tooltip = this._tooltip;
                this.tooltip.setOverlayOrigin(this);
            }
            this.tooltip.nzVisibleChange
                .pipe(operators.distinctUntilChanged(), operators.takeUntil(this.$destroy))
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
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzTitle", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzContent", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzTrigger", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzPlacement", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzMouseEnterDelay", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzMouseLeaveDelay", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzOverlayClassName", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzOverlayStyle", void 0);
        __decorate([
            core.Input()
        ], NzTooltipBaseDirective.prototype, "nzVisible", void 0);
        __decorate([
            core.Output()
        ], NzTooltipBaseDirective.prototype, "nzVisibleChange", void 0);
        return NzTooltipBaseDirective;
    }());

    var BpsPopoverDirective = /** @class */ (function (_super) {
        __extends(BpsPopoverDirective, _super);
        function BpsPopoverDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.popoverType = 'variation_1';
            _this.componentFactory = _this.resolver.resolveComponentFactory(BpsPopoverComponent);
            return _this;
        }
        BpsPopoverDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Renderer2 },
            { type: BpsPopoverComponent, decorators: [{ type: core.Optional }] },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.Input('bpsPopoverTitle')
        ], BpsPopoverDirective.prototype, "specificTitle", void 0);
        __decorate([
            core.Input('bpsPopoverContent')
        ], BpsPopoverDirective.prototype, "specificContent", void 0);
        __decorate([
            core.Input('bps-popover')
        ], BpsPopoverDirective.prototype, "directiveNameTitle", void 0);
        __decorate([
            core.Input('bpsPopoverTrigger')
        ], BpsPopoverDirective.prototype, "specificTrigger", void 0);
        __decorate([
            core.Input('bpsPopoverPlacement')
        ], BpsPopoverDirective.prototype, "specificPlacement", void 0);
        __decorate([
            core.Input('bpsPopoverType')
        ], BpsPopoverDirective.prototype, "popoverType", void 0);
        BpsPopoverDirective = __decorate([
            core.Directive({
                selector: '[bps-popover]',
                exportAs: 'bpsPopover',
                host: {
                    '[class.ant-popover-open]': 'isTooltipComponentVisible'
                }
            }),
            __param(4, core.Optional()),
            __param(5, core.Host()), __param(5, core.Optional())
        ], BpsPopoverDirective);
        return BpsPopoverDirective;
    }(NzTooltipBaseDirective));

    var BpsToolTipComponent = /** @class */ (function (_super) {
        __extends(BpsToolTipComponent, _super);
        function BpsToolTipComponent(cdr, noAnimation) {
            var _this = _super.call(this, cdr) || this;
            _this.noAnimation = noAnimation;
            _this.bpsPopoverType = 'variation_8a';
            return _this;
        }
        BpsToolTipComponent_1 = BpsToolTipComponent;
        var BpsToolTipComponent_1;
        BpsToolTipComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], BpsToolTipComponent.prototype, "bpsPopoverType", void 0);
        __decorate([
            core.Input()
        ], BpsToolTipComponent.prototype, "bpsTitle", void 0);
        __decorate([
            core.ContentChild('nzTemplate', { static: true })
        ], BpsToolTipComponent.prototype, "nzTitleTemplate", void 0);
        BpsToolTipComponent = BpsToolTipComponent_1 = __decorate([
            core.Component({
                selector: 'bps-tooltip',
                exportAs: 'bpsTooltipComponent',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                animations: [core$1.zoomBigMotion],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"_visible\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\">\n  <div\n    class=\"ant-tooltip\"\n    [ngClass]=\"_classMap\"\n    [ngStyle]=\"nzOverlayStyle\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [@zoomBigMotion]=\"'active'\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow bps-tooltip-arrow-{{bpsPopoverType}}\"></div>\n      <div class=\"ant-tooltip-inner bps-tooltip-inner-{{bpsPopoverType}}\">\n        <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: ngZorroAntd.NzTooltipBaseComponentLegacy,
                        useExisting: BpsToolTipComponent_1
                    }
                ],
                styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    ", ".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;color:#fff!important;padding:2px!important;text-align:center!important;border-radius:6px!important}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8a::before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important}.bps-tooltip-arrow-variation_8b::before{background-color:#7bc053!important}.bps-tooltip-arrow-variation_9a::before,.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b::before,.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;border:1px solid #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10::before,.bps-tooltip-arrow-variation_11::before{content:unset!important}"]
            }),
            __param(1, core.Host()), __param(1, core.Optional())
        ], BpsToolTipComponent);
        return BpsToolTipComponent;
    }(ngZorroAntd.NzTooltipBaseComponentLegacy));

    var BpsTooltipDirective = /** @class */ (function (_super) {
        __extends(BpsTooltipDirective, _super);
        function BpsTooltipDirective(elementRef, hostView, resolver, renderer, _tooltip, noAnimation) {
            var _this = _super.call(this, elementRef, hostView, resolver, renderer, _tooltip, noAnimation) || this;
            _this.popoverType = 'variation_8a';
            _this.componentFactory = _this.resolver.resolveComponentFactory(BpsToolTipComponent);
            return _this;
        }
        BpsTooltipDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Renderer2 },
            { type: ngZorroAntd.NzTooltipBaseComponentLegacy, decorators: [{ type: core.Optional }] },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.Input('bpsTooltipTitle')
        ], BpsTooltipDirective.prototype, "specificTitle", void 0);
        __decorate([
            core.Input('bps-tooltip')
        ], BpsTooltipDirective.prototype, "directiveNameTitle", void 0);
        __decorate([
            core.Input('bpsTooltipTrigger')
        ], BpsTooltipDirective.prototype, "specificTrigger", void 0);
        __decorate([
            core.Input('bpsTooltipPlacement')
        ], BpsTooltipDirective.prototype, "specificPlacement", void 0);
        __decorate([
            core.Input('bpsTooltipType')
        ], BpsTooltipDirective.prototype, "popoverType", void 0);
        BpsTooltipDirective = __decorate([
            core.Directive({
                selector: '[bps-tooltip]',
                exportAs: 'bpsTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'isTooltipComponentVisible'
                }
            }),
            __param(4, core.Optional()),
            __param(5, core.Host()), __param(5, core.Optional())
        ], BpsTooltipDirective);
        return BpsTooltipDirective;
    }(NzTooltipBaseDirective));

    var BpsListComponent = /** @class */ (function () {
        function BpsListComponent(el, updateHostClassService) {
            this.el = el;
            this.updateHostClassService = updateHostClassService;
            this.bpsBordered = false;
            this.bpsDisabled = false;
            this.bpsListType = 'variation1';
            this.bpsItemLayout = 'horizontal';
            this.bpsLoading = false;
            this.bpsSize = 'default';
            this.bpsSplit = true;
            // #endregion
            // #region styles
            this.prefixCls = 'ant-list';
            // #endregion
            this.itemLayoutNotifySource = new rxjs.BehaviorSubject(this.bpsItemLayout);
        }
        BpsListComponent.prototype._setClassMap = function () {
            var _a;
            var classMap = (_a = {},
                _a['bps-cmacs-custom-scrollbar'] = true,
                _a[this.prefixCls] = true,
                _a["bps-list-type-" + this.bpsListType] = true,
                _a[this.prefixCls + "-vertical"] = this.bpsItemLayout === 'vertical',
                _a[this.prefixCls + "-lg"] = this.bpsSize === 'large',
                _a[this.prefixCls + "-sm"] = this.bpsSize === 'small',
                _a[this.prefixCls + "-split"] = this.bpsSplit,
                _a[this.prefixCls + "-bordered"] = this.bpsBordered,
                _a[this.prefixCls + "-loading"] = this.bpsLoading,
                _a[this.prefixCls + "-grid"] = this.bpsGrid,
                _a[this.prefixCls + "-something-after-last-item"] = !!(this.bpsLoadMore || this.bpsPagination || this.bpsFooter),
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        Object.defineProperty(BpsListComponent.prototype, "itemLayoutNotify$", {
            get: function () {
                return this.itemLayoutNotifySource.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        BpsListComponent.prototype.ngOnInit = function () {
            this._setClassMap();
        };
        BpsListComponent.prototype.ngOnChanges = function (changes) {
            this._setClassMap();
            if (changes.bpsItemLayout) {
                this.itemLayoutNotifySource.next(this.bpsItemLayout);
            }
        };
        BpsListComponent.prototype.ngOnDestroy = function () {
            this.itemLayoutNotifySource.unsubscribe();
        };
        BpsListComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsDataSource", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsListComponent.prototype, "bpsBordered", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsListComponent.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsGrid", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsListType", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsHeader", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsFooter", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsItemLayout", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsRenderItem", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsListComponent.prototype, "bpsLoading", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsLoadMore", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsPagination", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsSize", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsListComponent.prototype, "bpsSplit", void 0);
        __decorate([
            core.Input()
        ], BpsListComponent.prototype, "bpsNoResult", void 0);
        BpsListComponent = __decorate([
            core.Component({
                selector: 'bps-list, [bps-list]',
                exportAs: 'bpsList',
                template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n",
                providers: [core$1.NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["\n      bps-list,\n      bps-list nz-spin {\n        display: block;\n      }\n    ", ".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:1px solid #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}"]
            })
        ], BpsListComponent);
        return BpsListComponent;
    }());

    var BpsListItemMetaComponent = /** @class */ (function () {
        function BpsListItemMetaComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.avatarStr = '';
            this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
        }
        Object.defineProperty(BpsListItemMetaComponent.prototype, "bpsAvatar", {
            set: function (value) {
                if (value instanceof core.TemplateRef) {
                    this.avatarStr = '';
                    this.avatarTpl = value;
                }
                else {
                    this.avatarStr = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        BpsListItemMetaComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input()
        ], BpsListItemMetaComponent.prototype, "bpsAvatar", null);
        __decorate([
            core.Input()
        ], BpsListItemMetaComponent.prototype, "bpsTitle", void 0);
        __decorate([
            core.Input()
        ], BpsListItemMetaComponent.prototype, "bpsDescription", void 0);
        BpsListItemMetaComponent = __decorate([
            core.Component({
                selector: 'bps-list-item-meta, [bps-list-item-meta]',
                exportAs: 'bpsListItemMeta',
                template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\n  </h4>\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\n  </div>\n</div>\n",
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            })
        ], BpsListItemMetaComponent);
        return BpsListItemMetaComponent;
    }());

    var BpsListItemComponent = /** @class */ (function () {
        function BpsListItemComponent(elementRef, renderer, parentComp, cdr) {
            this.parentComp = parentComp;
            this.cdr = cdr;
            this._onDeleteHover = false;
            this.bpsActions = [];
            this.bpsNoFlex = false;
            this.bpsDelete = false;
            this.ondelete = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-list-item');
        }
        Object.defineProperty(BpsListItemComponent.prototype, "isVerticalAndExtra", {
            get: function () {
                return this.itemLayout === 'vertical' && !!this.bpsExtra;
            },
            enumerable: true,
            configurable: true
        });
        BpsListItemComponent.prototype.onDelete = function () {
            this.ondelete.emit();
        };
        BpsListItemComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(function (val) {
                _this.itemLayout = val;
                _this.cdr.detectChanges();
            });
        };
        BpsListItemComponent.prototype.ngOnDestroy = function () {
            if (this.itemLayout$) {
                this.itemLayout$.unsubscribe();
            }
        };
        BpsListItemComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: BpsListComponent },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.ContentChildren(BpsListItemMetaComponent)
        ], BpsListItemComponent.prototype, "metas", void 0);
        __decorate([
            core.Input()
        ], BpsListItemComponent.prototype, "bpsActions", void 0);
        __decorate([
            core.Input()
        ], BpsListItemComponent.prototype, "bpsContent", void 0);
        __decorate([
            core.Input()
        ], BpsListItemComponent.prototype, "bpsExtra", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean(), core.HostBinding('class.ant-list-item-no-flex')
        ], BpsListItemComponent.prototype, "bpsNoFlex", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsListItemComponent.prototype, "bpsDelete", void 0);
        __decorate([
            core.Output()
        ], BpsListItemComponent.prototype, "ondelete", void 0);
        BpsListItemComponent = __decorate([
            core.Component({
                selector: 'bps-list-item, [bps-list-item]',
                exportAs: 'bpsListItem',
                template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <div class=\"bps-list-item-content\">\r\n    <ng-content></ng-content>\r\n  </div>\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"_onDeleteHover = true;\"\r\n         (mouseleave)=\"_onDeleteHover = false;\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\n  <ng-container *ngIf=\"bpsContent\">\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  </div>\n</ng-container>\n",
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.bps-delete-icon-hovered]': '_onDeleteHover'
                }
            })
        ], BpsListItemComponent);
        return BpsListItemComponent;
    }());


    (function (CeldType) {
        CeldType[CeldType["Default"] = 0] = "Default";
        CeldType[CeldType["TemplateRef"] = 1] = "TemplateRef";
    })(exports.CeldType || (exports.CeldType = {}));

    var BpsTableComponent = /** @class */ (function () {
        function BpsTableComponent(cdr, i18n) {
            this.cdr = cdr;
            this.i18n = i18n;
            this.locale = {}; // tslint:disable-line:no-any
            this.destroy$ = new rxjs.Subject();
            this.checkboxCache = [];
            this.mapOfExpandData = {};
            this._data = [];
            this.editId = null;
            this.isExpanded = false;
            this.searchBoxHovered = false;
            this._searchSubject = new rxjs.Subject();
            this.frontPagination = true;
            this.total = 0;
            this.pageIndex = 1;
            this.pageSize = 10;
            this.showPagination = true;
            this.paginationPosition = 'bottom';
            this.bordered = false;
            this.widthConfig = [];
            this.loading = false;
            this.loadingDelay = 0;
            this.scroll = { x: null, y: null };
            this.pageSizeOptions = [10, 20, 30, 40, 50];
            this.showQuickJumper = false;
            this.showSizeChanger = false;
            this.hideOnSinglePage = false;
            this.simple = false;
            this.virtualItemSize = 0;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            this.inlineEdit = false;
            this.pageIndexChange = new core.EventEmitter();
            this.currentPageDataChange = new core.EventEmitter();
            this.queryParamsChange = new core.EventEmitter();
            this.pageSizeChange = new core.EventEmitter();
            this.onclickRow = new core.EventEmitter();
            this.selectionChange = new core.EventEmitter();
            /* Thead API */
            this.singleSort = true;
            this.sortChange = new core.EventEmitter();
            this.configChange = new core.EventEmitter();
            this.onedit = new core.EventEmitter();
            this.tableType = 'report';
            this.expandable = false;
            this.searchValueChange = new core.EventEmitter();
            this.moreBtnClicked = new core.EventEmitter();
            this.deleteBtnClicked = new core.EventEmitter();
            this.clicks = 0;
            this._setSearchSubscription();
        }
        Object.defineProperty(BpsTableComponent.prototype, "data", {
            /* Table API */
            // tslint:disable-next-line: no-input-rename
            set: function (data) {
                this._data = data;
                this.updateCheckboxCache();
            },
            enumerable: true,
            configurable: true
        });
        BpsTableComponent.prototype.handleClick = function (e) {
            if (this.editId !== null && this.inputElement && this.inputElement.nativeElement !== e.target) {
                this.emitOnEditEvent();
                this.editId = null;
            }
        };
        BpsTableComponent.prototype.sort = function (sort) {
            var field = this.getFields().filter(function (item) { return item.property === sort.key; })[0];
            if (field.disabled) {
                return;
            }
            this.sortChange.emit({ sortName: sort.key, sortValue: sort.value });
        };
        BpsTableComponent.prototype.emitOnEditEvent = function () {
            var _this = this;
            var editedEl = this._data.filter(function (el) { return el[_this.config.fieldId] === _this.editId; });
            if (editedEl.length) {
                this.onedit.emit(editedEl);
            }
        };
        BpsTableComponent.prototype.endEditMode = function ($event, index, data) {
            if (data === void 0) { data = null; }
            if ($event.key === ('Enter' || 'enter')) {
                this.emitOnEditEvent();
                this.editId = null;
            }
        };
        BpsTableComponent.prototype.preventDefault = function ($event) {
            $event.preventDefault();
            $event.stopImmediatePropagation();
        };
        BpsTableComponent.prototype.emitBpsEvent = function ($event, type) {
            switch (type) {
                case 'pageIndex':
                    this.pageIndexChange.emit($event);
                    break;
                case 'currentPageData':
                    this.currentPageDataChange.emit($event);
                    break;
                case 'queryParams':
                    this.queryParamsChange.emit($event);
                    break;
                case 'pageSize':
                    this.pageSizeChange.emit($event);
                    break;
                case 'moreBtnClicked':
                    this.moreBtnClicked.emit($event);
                    break;
                case 'deleteBtnClicked':
                    this.deleteBtnClicked.emit($event);
                    break;
            }
        };
        BpsTableComponent.prototype.getFields = function () {
            return this.config ? this.config.fields.filter(function (item) { return item.hidden === undefined || !item.hidden; }) : [];
        };
        BpsTableComponent.prototype._setSearchSubscription = function () {
            var _this = this;
            this._searchSubject.pipe(operators.debounceTime(500)).subscribe(function (searchValue) {
                _this.searchValueChange.emit(searchValue);
            });
        };
        BpsTableComponent.prototype.updateSearch = function (searchTextValue) {
            this._searchSubject.next(searchTextValue);
        };
        BpsTableComponent.prototype.ngAfterViewInit = function () {
            this.cdr.detectChanges();
        };
        BpsTableComponent.prototype.ngOnChanges = function (changes) {
            if (changes.data && this.config) {
                this.updateCheckboxCache();
            }
        };
        BpsTableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            });
        };
        BpsTableComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this._searchSubject.unsubscribe();
        };
        BpsTableComponent.prototype.isCeldTypeTemplateRef = function (field) {
            return field.celdType === exports.CeldType.TemplateRef;
        };
        BpsTableComponent.prototype.isCeldTypeDefault = function (field) {
            return field.celdType === exports.CeldType.Default;
        };
        BpsTableComponent.prototype.getTDClassMap = function (field, data, fi) {
            var _a;
            if (fi === void 0) { fi = 9999; }
            return __assign(__assign({}, field.ngClass), (_a = {}, _a['bps-td-disabled'] = data.disabled, _a['bps-td-no-padding'] = data[this.config.fieldId] === this.editId, _a['bps-fst-column'] = !fi, _a));
        };
        BpsTableComponent.prototype.isRowSelected = function (data) {
            var _this = this;
            if (this.config) {
                var dataSelected = this.checkboxCache.filter(function (item) { return item.selected; }).map(function (item) { return item.data[_this.config.fieldId]; });
                return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
            }
            return false;
        };
        BpsTableComponent.prototype.updateCheckboxCache = function () {
            var _this = this;
            this.checkboxCache.length = 0;
            this._data.forEach(function (item) {
                _this.checkboxCache.push({
                    selected: item.selected ? item.selected : false,
                    data: item
                });
            });
        };
        BpsTableComponent.prototype.clickRow = function (event, data) {
            var _this = this;
            this.clicks++;
            setTimeout(function () {
                if (_this.clicks === 1) {
                    _this.selectRow(data);
                    if (_this.expandable) {
                        var key = _this.config.fieldId;
                        _this.mapOfExpandData[data[key]] = !_this.mapOfExpandData[data[key]];
                        _this.cdr.detectChanges();
                    }
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
                _this.clicks = 0;
            }, 300);
        };
        BpsTableComponent.prototype.startEdit = function (data, event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.inlineEdit && !data.disabled) {
                this.editId = data[this.config.fieldId];
            }
        };
        BpsTableComponent.prototype.selectRow = function (data, selectionOnly) {
            var _this = this;
            if (selectionOnly === void 0) { selectionOnly = false; }
            if (!data.disabled) {
                if (!selectionOnly) {
                    this.onclickRow.emit(data);
                }
                this.checkboxCache.forEach(function (item) {
                    if (item.data[_this.config.fieldId] === data[_this.config.fieldId]) {
                        item.selected = true;
                        _this.selectionChange.emit(item);
                    }
                    else {
                        item.selected = false;
                    }
                });
                this.cdr.detectChanges();
            }
        };
        BpsTableComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService }
        ]; };
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "data", null);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "frontPagination", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "total", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "pageIndex", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "pageSize", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "showPagination", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "paginationPosition", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "bordered", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "widthConfig", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "loading", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "loadingDelay", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "loadingIndicator", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "scroll", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "footer", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "noResult", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "pageSizeOptions", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "showQuickJumper", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "showSizeChanger", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "showTotal", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "hideOnSinglePage", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "simple", void 0);
        __decorate([
            core.Input(), core$1.InputNumber()
        ], BpsTableComponent.prototype, "virtualItemSize", void 0);
        __decorate([
            core.Input(), core$1.InputNumber()
        ], BpsTableComponent.prototype, "virtualMaxBufferPx", void 0);
        __decorate([
            core.Input(), core$1.InputNumber()
        ], BpsTableComponent.prototype, "virtualMinBufferPx", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "virtualForTrackBy", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "inlineEdit", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "pageIndexChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "currentPageDataChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "queryParamsChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "pageSizeChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "onclickRow", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "selectionChange", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "singleSort", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "sortChange", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "config", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "configChange", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "gridID", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "filterPlaceholder", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "onedit", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "tableType", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableComponent.prototype, "expandable", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "searchValueChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "moreBtnClicked", void 0);
        __decorate([
            core.Output()
        ], BpsTableComponent.prototype, "deleteBtnClicked", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "moreMenu", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "deleteMenu", void 0);
        __decorate([
            core.Input()
        ], BpsTableComponent.prototype, "rowExpandTemplate", void 0);
        __decorate([
            core.ViewChild(BpsInputDirective, { static: false, read: core.ElementRef })
        ], BpsTableComponent.prototype, "inputElement", void 0);
        __decorate([
            core.HostListener('window:mouseup', ['$event'])
        ], BpsTableComponent.prototype, "handleClick", null);
        BpsTableComponent = __decorate([
            core.Component({
                // tslint:disable-next-line: component-selector
                selector: 'bps-table',
                exportAs: 'bpsTable',
                template: "<div id=\"{{gridID}}\"\r\n     class=\"bps-table-{{tableType}}\">\r\n  <input bps-input\r\n         *ngIf=\"tableType === 'glass_profile'\"\r\n         class=\"bps-table-glass-filter\"\r\n         [placeholder]=\"filterPlaceholder\"\r\n         (click)=\"preventDefault($event)\"\r\n         (keyup)=\"updateSearch($event.target.value)\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead (nzSortChange)=\"sort($event)\"\r\n           [nzSingleSort]=\"singleSort\">\r\n      <tr>\r\n\r\n        <th *ngIf=\"expandable\"\r\n            [nzWidth]=\"'40px'\"\r\n            nzShowExpand>\r\n        </th>\r\n\r\n        <th *ngFor=\"let field of getFields(); index as th\"\r\n            [ngClass]=\"field.ngClass\"\r\n            [class.bps-column-disabled]=\"field.disabled\"\r\n            [nzShowSort]=\"field.showSort\"\r\n            [nzSortKey]=\"field.property\"\r\n            nzCustomFilter\r\n            [nzWidth]=\"field.width\">\r\n          <ng-container *ngIf=\"field.template; else cellValue\">\r\n            <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n          </ng-container>\r\n          <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n          <ng-container *ngIf=\"field.showCustomFilter\">\r\n            <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n          </ng-container>\r\n        </th>\r\n\r\n        <th *ngIf=\"tableType === 'home'\"\r\n            [nzWidth]=\"'70px'\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n        <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n            [class.bps-table4-custom-row]=\"data.bpsTable4CustomRow\"\r\n            (click)=\"clickRow($event, data)\"\r\n            [class.bps-table-pair-row]=\"tableType === 'report' && !(i % 2)\">\r\n\r\n          <ng-container *ngIf=\"expandable\">\r\n            <td nzShowExpand\r\n                [(nzExpand)]=\"mapOfExpandData[data[config.fieldId]]\"></td>\r\n          </ng-container>\r\n\r\n          <td *ngFor=\"let field of getFields(); index as fi\"\r\n              [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div (dblclick)=\"startEdit(data, $event)\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td *ngIf=\"tableType === 'home'\">\r\n            <i class=\"bps-table-home-more-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'moreBtnClicked')\"\r\n               [bpsDropdownMenu]=\"moreMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n            <i class=\"bps-table-home-delete-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'deleteBtnClicked')\"\r\n               [bpsDropdownMenu]=\"deleteMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <ng-container *ngIf=\"expandable\">\r\n          <tr [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\">\r\n            <td [attr.colspan]=\"getFields().length + 2\">\r\n              <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{data: data, index: i}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #customFilter>\r\n  <div class=\"bps-table-filter-icon\">\r\n    <bps-input-group [bpsPrefix]=\"searchPrefixIcon\"\r\n                     (mouseenter)=\"searchBoxHovered = true;\"\r\n                     (mouseleave)=\"searchBoxHovered = false;\"\r\n                     class=\"bps-table-custom-filter\">\r\n      <input bps-input\r\n             nz-th-extra\r\n             class=\"bps-table-filter-custom-input\"\r\n             (click)=\"preventDefault($event)\"\r\n             (keyup)=\"updateSearch($event.target.value)\"\r\n             nzTableFilter>\r\n    </bps-input-group>\r\n  </div>\r\n  \r\n  <ng-template #searchPrefixIcon let-disabled=\"false\">\r\n    <ng-container *ngIf=\"!searchBoxHovered  && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_enabled.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"searchBoxHovered && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_hover_activated.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_disabled.svg\" />\r\n    </ng-container>\r\n  </ng-template>\r\n</ng-template>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel),::ng-deep .bps-table .ant-table-thead>tr>th{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}::ng-deep .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel){background:#313b3f!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#262626!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table .ant-table-header.ant-table-hide-scrollbar{margin-bottom:-14px!important;background-color:#262626!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column{padding-left:20px!important}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table .ant-table-expand-icon-th,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table .ant-table-row-expanded::after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row.ant-table-expanded-row .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-expanded-row) .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}::ng-deep .bps-table .anticon svg{display:none!important}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after{content:''}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:.3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:.3s}.bps-table-filter-custom-input{border:1px solid #535353!important;background-color:#343434!important;padding-left:24px!important;transition:.3s}.bps-table-filter-custom-input:hover{border:1px solid #535353!important}.bps-table-home-more-icon::after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon::after{content:url(/assets/bps-icons/sps_x_icon_home_enabled.svg);position:relative}.bps-table-home-more-icon{margin-right:11px}.bps-table-home-delete-icon,.bps-table-home-more-icon{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-delete-icon:hover,.bps-table-home-more-icon:hover{cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon::after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon::after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon::after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon::after{content:url(/assets/bps-icons/sps_x_icon_home_hover_active.svg)}::ng-deep .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{font-size:11px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer;box-shadow:0 1px 0 #445c67 inset,0 -1px 0 #445c67 inset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::-webkit-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-moz-placeholder{color:#666;font-size:10px}.bps-table-glass-filter:-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 0 #445c67 inset,0 1px 0 #445c67 inset,0 -1px 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px 0 #445c67 inset,0 -1px 0 #445c67 inset,-1px 0 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:.3s}.bps-td-disabled{cursor:not-allowed}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px 0 #00a2d1 inset,0 -1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 0 #00a2d1 inset,0 1px 0 #00a2d1 inset,0 -1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child{box-shadow:0 1px 0 #00a2d1 inset,0 -1px 0 #00a2d1 inset,-1px 0 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td{background-color:#253d47!important}"]
            })
            // tslint:disable-next-line no-any
        ], BpsTableComponent);
        return BpsTableComponent;
    }());

    var BpsTableExpandablePanelComponent = /** @class */ (function () {
        function BpsTableExpandablePanelComponent(cdr, i18n) {
            this.cdr = cdr;
            this.i18n = i18n;
            this.locale = {}; // tslint:disable-line:no-any
            this.destroy$ = new rxjs.Subject();
            this.checkboxCache = [];
            this.mapOfExpandData = {};
            this._data = [];
            this.editId = null;
            this.isExpanded = false;
            this.searchBoxHovered = false;
            this._searchSubject = new rxjs.Subject();
            this.frontPagination = false;
            this.total = 0;
            this.pageIndex = 1;
            this.pageSize = 10;
            this.showPagination = false;
            this.paginationPosition = 'bottom';
            this.bordered = false;
            this.widthConfig = [];
            this.loading = false;
            this.loadingDelay = 0;
            this.scroll = { x: null, y: null };
            this.pageSizeOptions = [10, 20, 30, 40, 50];
            this.showQuickJumper = false;
            this.showSizeChanger = false;
            this.hideOnSinglePage = false;
            this.simple = false;
            this.virtualScroll = false;
            this.virtualItemSize = 0;
            this.virtualMaxBufferPx = 200;
            this.virtualMinBufferPx = 100;
            this.inlineEdit = false;
            this.pageIndexChange = new core.EventEmitter();
            this.currentPageDataChange = new core.EventEmitter();
            this.queryParamsChange = new core.EventEmitter();
            this.pageSizeChange = new core.EventEmitter();
            this.onclickRow = new core.EventEmitter();
            this.selectionChange = new core.EventEmitter();
            /* Thead API */
            this.singleSort = true;
            this.sortChange = new core.EventEmitter();
            this.configChange = new core.EventEmitter();
            this.onedit = new core.EventEmitter();
            this.clicks = 0;
        }
        Object.defineProperty(BpsTableExpandablePanelComponent.prototype, "data", {
            /* Table API */
            // tslint:disable-next-line: no-input-rename
            set: function (data) {
                this._data = data;
                this.updateCheckboxCache();
            },
            enumerable: true,
            configurable: true
        });
        BpsTableExpandablePanelComponent.prototype.handleClick = function (e) {
            if (this.editId !== null && this.inputElement && !this.inputElement.nativeElement.isEqualNode(e.target)) {
                this.emitOnEditEvent();
                this.editId = null;
            }
        };
        BpsTableExpandablePanelComponent.prototype.emitOnEditEvent = function () {
            var _this = this;
            var editedEl = this._data.filter(function (el) { return el[_this.config.fieldId] === _this.editId; });
            if (editedEl.length) {
                this.onedit.emit(editedEl);
            }
        };
        BpsTableExpandablePanelComponent.prototype.endEditMode = function ($event, index, data) {
            if (data === void 0) { data = null; }
            if ($event.key === ('Enter' || 'enter')) {
                this.emitOnEditEvent();
                this.editId = null;
            }
        };
        BpsTableExpandablePanelComponent.prototype.preventDefault = function ($event) {
            $event.preventDefault();
            $event.stopImmediatePropagation();
        };
        BpsTableExpandablePanelComponent.prototype.emitBpsEvent = function ($event, type) {
            switch (type) {
                case 'pageIndex':
                    this.pageIndexChange.emit($event);
                    break;
                case 'currentPageData':
                    this.currentPageDataChange.emit($event);
                    break;
                case 'queryParams':
                    this.queryParamsChange.emit($event);
                    break;
                case 'pageSize':
                    this.pageSizeChange.emit($event);
                    break;
            }
        };
        BpsTableExpandablePanelComponent.prototype.getFields = function () {
            return this.config ? this.config.fields.filter(function (item) { return item.hidden === undefined || !item.hidden; }) : [];
        };
        BpsTableExpandablePanelComponent.prototype.ngAfterViewInit = function () {
            this.cdr.detectChanges();
        };
        BpsTableExpandablePanelComponent.prototype.ngOnChanges = function (changes) {
            if (changes.data && this.config) {
                this.updateCheckboxCache();
            }
        };
        BpsTableExpandablePanelComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            });
        };
        BpsTableExpandablePanelComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this._searchSubject.unsubscribe();
        };
        BpsTableExpandablePanelComponent.prototype.isCeldTypeTemplateRef = function (field) {
            return field.celdType === exports.CeldType.TemplateRef;
        };
        BpsTableExpandablePanelComponent.prototype.isCeldTypeDefault = function (field) {
            return field.celdType === exports.CeldType.Default;
        };
        BpsTableExpandablePanelComponent.prototype.getTDClassMap = function (field, data, fi) {
            var _a;
            if (fi === void 0) { fi = 9999; }
            return __assign(__assign({}, field.ngClass), (_a = {}, _a['bps-td-expandable-panel'] = true, _a['bps-td-disabled'] = data.disabled, _a['bps-td-no-padding'] = data[this.config.fieldId] === this.editId, _a['bps-fst-column'] = !fi, _a));
        };
        BpsTableExpandablePanelComponent.prototype.isRowSelected = function (data) {
            var _this = this;
            if (this.config) {
                var dataSelected = this.checkboxCache.filter(function (item) { return item.selected; }).map(function (item) { return item.data[_this.config.fieldId]; });
                return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
            }
            return false;
        };
        BpsTableExpandablePanelComponent.prototype.updateCheckboxCache = function () {
            var _this = this;
            this.checkboxCache.length = 0;
            this._data.forEach(function (item) {
                _this.checkboxCache.push({
                    selected: item.selected ? item.selected : false,
                    data: item
                });
            });
        };
        BpsTableExpandablePanelComponent.prototype.clickRow = function (event, data) {
            var _this = this;
            this.clicks++;
            setTimeout(function () {
                if (_this.clicks === 1) {
                    _this.selectRow(data);
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
                _this.clicks = 0;
            }, 300);
        };
        BpsTableExpandablePanelComponent.prototype.startEdit = function (data, event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.inlineEdit && !data.disabled) {
                this.editId = data[this.config.fieldId];
                this.cdr.detectChanges();
            }
        };
        BpsTableExpandablePanelComponent.prototype.selectRow = function (data) {
            var _this = this;
            if (!data.disabled) {
                this.onclickRow.emit(data);
                this.checkboxCache.forEach(function (item) {
                    if (item.data[_this.config.fieldId] === data[_this.config.fieldId]) {
                        item.selected = true;
                        _this.selectionChange.emit(item);
                    }
                    else {
                        item.selected = false;
                    }
                });
            }
        };
        BpsTableExpandablePanelComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService }
        ]; };
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "data", null);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "frontPagination", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "total", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "pageIndex", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "pageSize", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "showPagination", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "paginationPosition", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "bordered", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "widthConfig", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "loading", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "loadingDelay", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "loadingIndicator", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "scroll", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "footer", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "noResult", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "pageSizeOptions", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "showQuickJumper", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "showSizeChanger", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "showTotal", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "hideOnSinglePage", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "simple", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "virtualScroll", void 0);
        __decorate([
            core.Input(), core$1.InputNumber()
        ], BpsTableExpandablePanelComponent.prototype, "virtualItemSize", void 0);
        __decorate([
            core.Input(), core$1.InputNumber()
        ], BpsTableExpandablePanelComponent.prototype, "virtualMaxBufferPx", void 0);
        __decorate([
            core.Input(), core$1.InputNumber()
        ], BpsTableExpandablePanelComponent.prototype, "virtualMinBufferPx", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "virtualForTrackBy", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsTableExpandablePanelComponent.prototype, "inlineEdit", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "pageIndexChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "currentPageDataChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "queryParamsChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "pageSizeChange", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "onclickRow", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "selectionChange", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "singleSort", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "sortChange", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "config", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "configChange", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "gridID", void 0);
        __decorate([
            core.Output()
        ], BpsTableExpandablePanelComponent.prototype, "onedit", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "menuTemplate", void 0);
        __decorate([
            core.Input()
        ], BpsTableExpandablePanelComponent.prototype, "currentPreviewTemplate", void 0);
        __decorate([
            core.ViewChild(BpsInputDirective, { static: false, read: core.ElementRef })
        ], BpsTableExpandablePanelComponent.prototype, "inputElement", void 0);
        __decorate([
            core.ViewChild('gridComponent', { read: ngZorroAntd.NzTableComponent, static: false })
        ], BpsTableExpandablePanelComponent.prototype, "gridComponent", void 0);
        __decorate([
            core.ViewChild('bpsExpandablePanel', { read: core.ElementRef, static: false })
        ], BpsTableExpandablePanelComponent.prototype, "panel", void 0);
        __decorate([
            core.HostListener('window:mouseup', ['$event'])
        ], BpsTableExpandablePanelComponent.prototype, "handleClick", null);
        BpsTableExpandablePanelComponent = __decorate([
            core.Component({
                // tslint:disable-next-line: component-selector
                selector: 'bps-table-expandable-panel',
                exportAs: 'bpsTableExpandablePanel',
                template: "<div class=\"bps-table-expandable-panel-wrapper\">\r\n  <div class=\"bps-table-expandable-panel-menu\">\r\n    <div class=\"bps-table-expandable-panel-menu-inner\">\r\n      <ng-container [ngTemplateOutlet]=\"menuTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div #bpsExpandablePanel class=\"bps-table-report bps-table-expandable-panel\">\r\n    <nz-table #gridComponent\r\n              class=\"bps-table-expandable-panel\"\r\n              [nzData]=\"_data\"\r\n              [nzFrontPagination]=\"frontPagination\"\r\n              [nzTotal]=\"total\"\r\n              [nzPageIndex]=\"pageIndex\"\r\n              [nzPageSize]=\"pageSize\"\r\n              [nzShowPagination]=\"showPagination\"\r\n              [nzPaginationPosition]=\"paginationPosition\"\r\n              [nzBordered]=\"bordered\"\r\n              [nzWidthConfig]=\"widthConfig\"\r\n              [nzLoading]=\"loading\"\r\n              [nzLoadingIndicator]=\"loadingIndicator\"\r\n              [nzLoadingDelay]=\"loadingDelay\"\r\n              [nzScroll]=\"scroll\"\r\n              [nzTitle]=\"title\"\r\n              [nzFooter]=\"footer\"\r\n              [nzNoResult]=\"noResult\"\r\n              [nzPageSizeOptions]=\"pageSizeOptions\"\r\n              [nzShowQuickJumper]=\"showQuickJumper\"\r\n              [nzShowSizeChanger]=\"showSizeChanger\"\r\n              [nzShowTotal]=\"showTotal\"\r\n              [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n              [nzSimple]=\"simple\"\r\n              [nzVirtualScroll]=\"virtualScroll\"\r\n              [nzVirtualItemSize]=\"virtualItemSize\"\r\n              [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n              [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n              [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n              (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n              (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n              (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n              (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n      <thead></thead>\r\n      <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n          <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              (click)=\"clickRow($event, data)\">\r\n\r\n            <td *ngFor=\"let field of getFields(); index as fi\"\r\n                style=\"position: relative\"\r\n                [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n              <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n                <ng-container *ngIf=\"data[field.property]\">\r\n                  <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n                <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                  <div>\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                </ng-container>\r\n                <ng-template #editTpl>\r\n                  <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                         class=\"bps-editable-cell-input\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (keyup)=\"endEditMode($event, i, data)\" />\r\n                </ng-template>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"!fi\">\r\n                <span class=\"bps-table-expandable-panel-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n\r\n  <div class=\"bps-table-expandable-panel-preview\">\r\n    <ng-container [ngTemplateOutlet]=\"currentPreviewTemplate\"></ng-container>\r\n  </div>\r\n\r\n</div>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th,::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td{background:#313b3f!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:-14px!important;background-color:#262626!important}::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:20px!important}.bps-table-expandable-panel .bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important;z-index:2}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-row-expanded::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table-expandable-panel .ant-table-row-collapsed::after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-expandable-panel .anticon svg{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after{content:''}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off::after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on::after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on::after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:.3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:.3s}.bps-table-filter-custom-input{border:1px solid #535353!important;background-color:#343434!important;padding-left:24px!important;transition:.3s}.bps-table-filter-custom-input:hover{border:1px solid #535353!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::-webkit-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-moz-placeholder{color:#666;font-size:10px}.bps-table-glass-filter:-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::-ms-input-placeholder{color:#666;font-size:10px}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important}.bps-table-expandable-panel-preview{width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;padding:8px;vertical-align:top;background-color:#313131}.bps-table-expandable-panel-menu{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}::ng-deep .bps-table-expandable-panel-menu-inner img,::ng-deep .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;padding:6px;margin-bottom:5px;cursor:pointer}.bps-table-expandable-panel-menu-inner{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil::after{content:'';position:absolute;top:5px;right:5px}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil::after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:hover::after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}"]
            })
            // tslint:disable-next-line no-any
        ], BpsTableExpandablePanelComponent);
        return BpsTableExpandablePanelComponent;
    }());

    var BpsConfigurationSelectorComponent = /** @class */ (function () {
        function BpsConfigurationSelectorComponent(cdr) {
            this.cdr = cdr;
            this.destroy$ = new rxjs.Subject();
            this.currentDisplayedDataIndex = null;
            this._data = [];
            this._currentDisplayedData = null;
            this.propertyName = '';
            this.disabled = false;
            this.currentDisplayedDataChange = new core.EventEmitter();
        }
        Object.defineProperty(BpsConfigurationSelectorComponent.prototype, "currentDisplayedData", {
            set: function (value) {
                this._currentDisplayedData = value;
                this.currentDisplayedDataIndex = this.getCurrentElementIndex();
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(BpsConfigurationSelectorComponent.prototype, "data", {
            set: function (data) {
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
            },
            enumerable: true,
            configurable: true
        });
        BpsConfigurationSelectorComponent.prototype.ngOnInit = function () {
        };
        BpsConfigurationSelectorComponent.prototype.ngAfterViewInit = function () {
            this.cdr.detectChanges();
        };
        BpsConfigurationSelectorComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BpsConfigurationSelectorComponent.prototype.getCurrentElementIndex = function () {
            for (var i = 0; i < this._data.length; i++) {
                if (this._data[i] === this._currentDisplayedData) {
                    return i;
                }
            }
        };
        BpsConfigurationSelectorComponent.prototype.getPrevElement = function () {
            if (this.currentDisplayedDataIndex && !this.disabled) {
                this.currentDisplayedDataIndex--;
                this._currentDisplayedData = this._data[this.currentDisplayedDataIndex];
                this.currentDisplayedDataChange.emit(this._currentDisplayedData);
            }
        };
        BpsConfigurationSelectorComponent.prototype.getNextElement = function () {
            if (this.currentDisplayedDataIndex + 1 < this._data.length && !this.disabled) {
                this.currentDisplayedDataIndex++;
                this._currentDisplayedData = this._data[this.currentDisplayedDataIndex];
                this.currentDisplayedDataChange.emit(this._currentDisplayedData);
            }
        };
        BpsConfigurationSelectorComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], BpsConfigurationSelectorComponent.prototype, "currentDisplayedData", null);
        __decorate([
            core.Input()
        ], BpsConfigurationSelectorComponent.prototype, "propertyName", void 0);
        __decorate([
            core.Input(), ngZorroAntd.InputBoolean()
        ], BpsConfigurationSelectorComponent.prototype, "disabled", void 0);
        __decorate([
            core.Output()
        ], BpsConfigurationSelectorComponent.prototype, "currentDisplayedDataChange", void 0);
        __decorate([
            core.Input()
        ], BpsConfigurationSelectorComponent.prototype, "data", null);
        BpsConfigurationSelectorComponent = __decorate([
            core.Component({
                // tslint:disable-next-line: component-selector
                selector: 'bps-configuration-selector',
                exportAs: 'bpsConfigurationSelector',
                template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:1px solid #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:1px solid #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow::after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow::after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}"]
            })
            // tslint:disable-next-line no-any
        ], BpsConfigurationSelectorComponent);
        return BpsConfigurationSelectorComponent;
    }());

    var BpsDropDownADirective = /** @class */ (function () {
        function BpsDropDownADirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
        BpsDropDownADirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        BpsDropDownADirective = __decorate([
            core.Directive({
                selector: 'a[bps-dropdown]',
                exportAs: 'bpsDropdown'
            })
        ], BpsDropDownADirective);
        return BpsDropDownADirective;
    }());

    function dropdownMenuServiceFactory(injector) {
        return injector.get(ngZorroAntd.NzMenuDropdownService);
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
            this.visible$ = new rxjs.Subject();
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
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef },
            { type: ngZorroAntd.NzMenuDropdownService },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        __decorate([
            core.ViewChild(core.TemplateRef, { static: true })
        ], BpsDropdownMenuComponent.prototype, "templateRef", void 0);
        BpsDropdownMenuComponent = __decorate([
            core.Component({
                selector: "bps-dropdown-menu",
                template: "<ng-template>\n  <div *ngIf=\"open\" class=\"{{'ant-dropdown bps-dropdown nz-dropdown ant-dropdown-placement-'+bpsPlacement}}\"\n       [ngClass]=\"bpsOverlayClassName\"\n       [ngStyle]=\"bpsOverlayStyle\"\n       [@slideMotion]=\"dropDownPosition\"\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n       (mouseenter)=\"setVisibleStateWhen(true,'hover')\"\n       (mouseleave)=\"setVisibleStateWhen(false,'hover')\">\n    <div [class.ant-table-filter-dropdown]=\"bpsTableFilter\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                exportAs: "bpsDropdownMenu",
                animations: [core$1.slideMotion],
                providers: [
                    ngZorroAntd.NzMenuDropdownService,
                    {
                        provide: core$1.NzDropdownHigherOrderServiceToken,
                        useFactory: dropdownMenuServiceFactory,
                        deps: [[new core.Self(), core.Injector]]
                    }
                ],
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px 0 rgba(0,0,0,.9)!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-6px;transition:.3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child::before{content:'';opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:17px;right:calc(100% - 8px);transition:.3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover::before{background-color:#353535!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}", "\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
            }),
            __param(5, core.Host()), __param(5, core.Optional())
        ], BpsDropdownMenuComponent);
        return BpsDropdownMenuComponent;
    }());

    var BpsDropDownDirective = /** @class */ (function () {
        function BpsDropDownDirective(elementRef, renderer, overlay, platform, bpsButtonComponent, bpsButtonGroupComponent, viewContainerRef) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.overlay = overlay;
            this.platform = platform;
            this.bpsButtonComponent = bpsButtonComponent;
            this.bpsButtonGroupComponent = bpsButtonGroupComponent;
            this.viewContainerRef = viewContainerRef;
            this.overlayRef = null;
            this.destroy$ = new rxjs.Subject();
            this.triggerWidth = 0;
            this.el = this.elementRef.nativeElement;
            this.dropdownOpen = false;
            this.positions = __spread(core$1.DEFAULT_DROPDOWN_POSITIONS);
            this.positionSubscription = rxjs.Subscription.EMPTY;
            this.overlaySubscription = rxjs.Subscription.EMPTY;
            this.hover$ = rxjs.merge(rxjs.fromEvent(this.el, 'mouseenter').pipe(operators.mapTo(true)), rxjs.fromEvent(this.el, 'mouseleave').pipe(operators.mapTo(false)));
            this.$click = rxjs.fromEvent(this.el, 'click').pipe(operators.tap(function (e) { return e.stopPropagation(); }), operators.mapTo(true));
            this.bpsTrigger = 'hover';
            this.bpsBackdrop = true;
            this.bpsClickHide = true;
            this.bpsDisabled = false;
            this.bpsVisible = false;
            this.bpsTableFilter = false;
            this.bpsOverlayClassName = '';
            this.bpsOverlayStyle = {};
            this.bpsPlacement = 'bottomLeft';
            this.bpsVisibleChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
            if (this.bpsButtonComponent) {
                this.bpsButtonComponent.isInDropdown = true;
            }
            if (this.bpsButtonGroupComponent) {
                this.bpsButtonGroupComponent.isInDropdown = true;
            }
        }
        BpsDropDownDirective.prototype.setDisabled = function (disabled) {
            if (disabled) {
                this.renderer.setAttribute(this.el, 'disabled', '');
                if (this.bpsVisible) {
                    this.bpsVisible = false;
                    this.bpsVisibleChange.emit(this.bpsVisible);
                    this.updateOverlayByVisible();
                }
            }
            else {
                this.renderer.removeAttribute(this.el, 'disabled');
            }
        };
        BpsDropDownDirective.prototype.getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.overlay
                    .position()
                    .flexibleConnectedTo(this.el)
                    .withLockedPosition(),
                minWidth: this.triggerWidth,
                hasBackdrop: this.bpsTrigger === 'click',
                backdropClass: this.bpsBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
        };
        BpsDropDownDirective.prototype.createOverlay = function () {
            if (!this.overlayRef) {
                var config = this.getOverlayConfig();
                this.overlayRef = this.overlay.create(config);
                this.subscribeOverlayEvent(this.overlayRef);
                this.subscribeToPositions(config.positionStrategy);
                return this.overlayRef;
            }
            else {
                var overlayConfig = this.overlayRef.getConfig();
                this.updateOverlayConfig(overlayConfig);
                return this.overlayRef;
            }
        };
        BpsDropDownDirective.prototype.updateOverlayConfig = function (overlayConfig) {
            overlayConfig.minWidth = this.triggerWidth;
            overlayConfig.hasBackdrop = this.bpsTrigger === 'click';
            return overlayConfig;
        };
        BpsDropDownDirective.prototype.dispose = function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
                this.positionSubscription.unsubscribe();
                this.overlaySubscription.unsubscribe();
            }
        };
        BpsDropDownDirective.prototype.subscribeToPositions = function (position) {
            var _this = this;
            this.positionSubscription.unsubscribe();
            this.positionSubscription = position.positionChanges.pipe(operators.takeUntil(this.destroy$)).subscribe(function (change) {
                _this.bpsOverlayClassName = '';
                _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
                if (_this.bpsPlacement === 'bottomRight' && change.connectionPair.originY === 'top') {
                    _this.bpsOverlayClassName = 'bps-forced-updated-position';
                    _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
                }
                if (_this.bpsPlacement === 'rightTop' && (change.connectionPair.overlayX === 'end' || change.connectionPair.originY === 'bottom')) {
                    _this.bpsOverlayClassName = 'bps-forced-updated-position';
                    _this.bpsDropdownMenu.setValue('bpsOverlayClassName', _this.bpsOverlayClassName);
                }
                _this.bpsDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
            });
        };
        BpsDropDownDirective.prototype.subscribeOverlayEvent = function (overlayRef) {
            var _this = this;
            this.overlaySubscription.unsubscribe();
            this.overlaySubscription = rxjs.merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(operators.filter(function (e) { return e.keyCode === keycodes.ESCAPE && !keycodes.hasModifierKey(e); })))
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.bpsDropdownMenu.setVisibleStateWhen(false);
            });
        };
        BpsDropDownDirective.prototype.getPortal = function () {
            if (!this.portal || this.portal.templateRef !== this.bpsDropdownMenu.templateRef) {
                this.portal = new portal.TemplatePortal(this.bpsDropdownMenu.templateRef, this.viewContainerRef);
            }
            return this.portal;
        };
        BpsDropDownDirective.prototype.openMenu = function () {
            if (!this.dropdownOpen) {
                var overlayRef = this.createOverlay();
                var overlayConfig = overlayRef.getConfig();
                this.bpsDropdownMenu.setValue('open', true);
                this.setPosition(overlayConfig.positionStrategy);
                overlayRef.attach(this.getPortal());
                this.dropdownOpen = true;
            }
        };
        BpsDropDownDirective.prototype.closeMenu = function () {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.dropdownOpen = false;
                this.bpsDropdownMenu.setValue('open', false);
            }
        };
        BpsDropDownDirective.prototype.setPosition = function (positionStrategy) {
            this.positionStrategy = positionStrategy;
            positionStrategy.withPositions(__spread(this.positions));
        };
        BpsDropDownDirective.prototype.updatePositionStrategy = function (positions) {
            if (this.positionStrategy) {
                this.positionStrategy.withPositions(positions);
            }
        };
        BpsDropDownDirective.prototype.setTriggerWidth = function () {
            if (this.platform.isBrowser) {
                var element = this.bpsMatchWidthElement ? this.bpsMatchWidthElement.nativeElement : this.el;
                this.triggerWidth = element.getBoundingClientRect().width;
            }
        };
        BpsDropDownDirective.prototype.initActionSubscribe = function () {
            var _this = this;
            var hostVisible$ = this.bpsTrigger === 'hover' ? this.hover$ : this.$click;
            var dropdownMenuVisible$ = this.bpsDropdownMenu.visible$;
            var menuClickVisible$ = this.bpsClickHide
                ? this.bpsDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(operators.mapTo(false))
                : rxjs.EMPTY;
            var supVisible$ = rxjs.merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
            var subVisible$ = this.bpsDropdownMenu.nzMenuDropdownService.menuOpen$;
            rxjs.combineLatest([supVisible$, subVisible$])
                .pipe(operators.map(function (_a) {
                var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
                return supVisible || subVisible;
            }), operators.debounceTime(50), operators.distinctUntilChanged(), operators.takeUntil(this.destroy$))
                .subscribe(function (visible) {
                if (!_this.bpsDisabled && _this.bpsVisible !== visible) {
                    _this.bpsVisible = visible;
                    _this.updateOverlayByVisible();
                    _this.bpsVisibleChange.emit(_this.bpsVisible);
                    _this.setTriggerWidth();
                    _this.bpsDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
                }
            });
        };
        BpsDropDownDirective.prototype.updateOverlayByVisible = function () {
            if (this.bpsVisible) {
                this.openMenu();
            }
            else {
                this.closeMenu();
            }
        };
        BpsDropDownDirective.prototype.updateDisabledState = function () {
            this.setDisabled(this.bpsDisabled);
        };
        BpsDropDownDirective.prototype.regeneratePosition = function (placement, positions) {
            return __spread([core$1.POSITION_MAP[placement]], positions);
        };
        BpsDropDownDirective.prototype.ngAfterViewInit = function () {
            if (this.bpsDropdownMenu) {
                this.setTriggerWidth();
                this.initActionSubscribe();
                this.updateDisabledState();
            }
        };
        BpsDropDownDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.dispose();
        };
        BpsDropDownDirective.prototype.ngOnChanges = function (changes) {
            var bpsVisible = changes.bpsVisible, bpsTrigger = changes.bpsTrigger, bpsPlacement = changes.bpsPlacement, bpsDisabled = changes.bpsDisabled, bpsOverlayClassName = changes.bpsOverlayClassName, bpsOverlayStyle = changes.bpsOverlayStyle, bpsTableFilter = changes.bpsTableFilter;
            if (this.bpsDropdownMenu) {
                if (bpsVisible) {
                    this.updateOverlayByVisible();
                    this.bpsDropdownMenu.visible$.next(this.bpsVisible);
                }
                if (bpsTrigger) {
                    this.bpsDropdownMenu.setValue('bpsTrigger', this.bpsTrigger);
                }
                if (bpsTableFilter) {
                    this.bpsDropdownMenu.setValue('bpsTableFilter', this.bpsTableFilter);
                }
                if (bpsOverlayClassName) {
                    this.bpsDropdownMenu.setValue('bpsOverlayClassName', this.bpsOverlayClassName);
                }
                if (bpsOverlayStyle) {
                    this.bpsDropdownMenu.setValue('bpsOverlayStyle', this.bpsOverlayStyle);
                }
                if (bpsPlacement) {
                    this.bpsDropdownMenu.setValue('bpsPlacement', this.bpsPlacement);
                    this.bpsDropdownMenu.setValue('dropDownPosition', this.bpsDropdownMenu.bpsPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                    this.positions = this.regeneratePosition(this.bpsPlacement, this.positions);
                    this.updatePositionStrategy(this.positions);
                }
            }
            if (bpsDisabled) {
                this.updateDisabledState();
            }
        };
        BpsDropDownDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: overlay.Overlay },
            { type: platform.Platform },
            { type: BpsButtonComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: BpsButtonGroupComponent, decorators: [{ type: core.Optional }] },
            { type: core.ViewContainerRef }
        ]; };
        __decorate([
            core.Input()
        ], BpsDropDownDirective.prototype, "bpsDropdownMenu", void 0);
        __decorate([
            core.Input()
        ], BpsDropDownDirective.prototype, "bpsTrigger", void 0);
        __decorate([
            core.Input()
        ], BpsDropDownDirective.prototype, "bpsMatchWidthElement", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsDropDownDirective.prototype, "bpsBackdrop", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsDropDownDirective.prototype, "bpsClickHide", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsDropDownDirective.prototype, "bpsDisabled", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsDropDownDirective.prototype, "bpsVisible", void 0);
        __decorate([
            core.Input(), core$1.InputBoolean()
        ], BpsDropDownDirective.prototype, "bpsTableFilter", void 0);
        __decorate([
            core.Input()
        ], BpsDropDownDirective.prototype, "bpsOverlayClassName", void 0);
        __decorate([
            core.Input()
        ], BpsDropDownDirective.prototype, "bpsOverlayStyle", void 0);
        __decorate([
            core.Input()
        ], BpsDropDownDirective.prototype, "bpsPlacement", void 0);
        __decorate([
            core.Output()
        ], BpsDropDownDirective.prototype, "bpsVisibleChange", void 0);
        BpsDropDownDirective = __decorate([
            core.Directive({
                selector: '[bps-dropdown]',
                exportAs: 'bpsDropdown'
            }),
            __param(4, core.Optional()), __param(4, core.Host()),
            __param(5, core.Optional())
        ], BpsDropDownDirective);
        return BpsDropDownDirective;
    }());

    var ɵ0 = ngZorroAntd.en_US;
    var BpsComponentsLibModule = /** @class */ (function () {
        function BpsComponentsLibModule() {
        }
        BpsComponentsLibModule = __decorate([
            core.NgModule({
                declarations: [
                    BpsDropDownDirective,
                    BpsDropdownMenuComponent,
                    BpsDropDownADirective,
                    BpsTableComponent,
                    BpsListComponent,
                    BpsListItemComponent,
                    BpsListItemMetaComponent,
                    BpsTooltipDirective,
                    BpsToolTipComponent,
                    BpsPopoverDirective,
                    BpsPopoverComponent,
                    BpsComponentsLibComponent,
                    BpsInputGroupComponent,
                    BpsInputDirective,
                    BpsAutosizeDirective,
                    BpsOptionComponent,
                    BpsFilterOptionPipe,
                    BpsFilterGroupOptionPipe,
                    BpsOptionContainerComponent,
                    BpsOptionGroupComponent,
                    BpsOptionLiComponent,
                    BpsSelectComponent,
                    BpsSelectTopControlComponent,
                    BpsSelectUnselectableDirective,
                    BpsFormDirective,
                    BpsFormExplainComponent,
                    BpsFormControlComponent,
                    BpsFormExtraComponent,
                    BpsFormItemComponent,
                    BpsFormLabelComponent,
                    BpsFormSplitComponent,
                    BpsFormTextComponent,
                    BpsButtonComponent,
                    BpsButtonGroupComponent,
                    BpsSwitchComponent,
                    BpsCheckboxGroupComponent,
                    BpsCheckboxWrapperComponent,
                    BpsCheckboxComponent,
                    BpsRadioComponent,
                    BpsRadioGroupComponent,
                    BpsRadioButtonComponent,
                    BpsCollapseComponent,
                    BpsCollapsePanelComponent,
                    BpsTableExpandablePanelComponent,
                    BpsConfigurationSelectorComponent
                ],
                imports: [
                    ngZorroAntd.NgZorroAntdModule,
                    common.CommonModule,
                    core$1.NzAddOnModule,
                    icon.NzIconModule,
                    overlay.OverlayModule,
                    ngZorroAntd.NzNoAnimationModule,
                    ngZorroAntd.NzToolTipModule,
                    ngZorroAntd.NzOverlayModule,
                    empty.NzEmptyModule,
                    forms.FormsModule,
                    observers.ObserversModule,
                    core$1.NzWaveModule,
                    ngZorroAntd.NzSpinModule,
                    ngZorroAntd.NzGridModule,
                    ngZorroAntd.NzAvatarModule,
                    ngZorroAntd.NzTableModule,
                    resizable.NzResizableModule
                ],
                exports: [
                    BpsDropDownDirective,
                    BpsDropdownMenuComponent,
                    BpsDropDownADirective,
                    BpsConfigurationSelectorComponent,
                    BpsTableComponent,
                    BpsListComponent,
                    BpsListItemComponent,
                    BpsListItemMetaComponent,
                    BpsPopoverDirective,
                    BpsPopoverComponent,
                    BpsComponentsLibComponent,
                    BpsComponentsLibComponent,
                    BpsInputGroupComponent,
                    BpsInputDirective,
                    BpsAutosizeDirective,
                    BpsOptionComponent,
                    BpsFilterOptionPipe,
                    BpsFilterGroupOptionPipe,
                    BpsOptionContainerComponent,
                    BpsOptionGroupComponent,
                    BpsOptionLiComponent,
                    BpsSelectComponent,
                    BpsSelectTopControlComponent,
                    BpsSelectUnselectableDirective,
                    BpsFormDirective,
                    BpsFormExplainComponent,
                    BpsFormControlComponent,
                    BpsFormExtraComponent,
                    BpsFormItemComponent,
                    BpsFormLabelComponent,
                    BpsFormSplitComponent,
                    BpsFormTextComponent,
                    BpsButtonComponent,
                    BpsButtonGroupComponent,
                    BpsSwitchComponent,
                    BpsCheckboxGroupComponent,
                    BpsCheckboxWrapperComponent,
                    BpsCheckboxComponent,
                    BpsRadioComponent,
                    BpsRadioGroupComponent,
                    BpsRadioButtonComponent,
                    BpsCollapseComponent,
                    BpsCollapsePanelComponent,
                    BpsTooltipDirective,
                    BpsToolTipComponent,
                    BpsTableExpandablePanelComponent
                ],
                providers: [
                    { provide: ngZorroAntd.NZ_I18N, useValue: ɵ0 }
                ],
                entryComponents: [
                    BpsPopoverComponent,
                    BpsToolTipComponent
                ]
            })
        ], BpsComponentsLibModule);
        return BpsComponentsLibModule;
    }());


    (function (TemplateType) {
        TemplateType[TemplateType["Date"] = 0] = "Date";
        TemplateType[TemplateType["Select"] = 1] = "Select";
        TemplateType[TemplateType["Number"] = 2] = "Number";
        TemplateType[TemplateType["String"] = 3] = "String";
        TemplateType[TemplateType["Boolean"] = 4] = "Boolean";
        TemplateType[TemplateType["Time"] = 5] = "Time";
    })(exports.TemplateType || (exports.TemplateType = {}));

    exports.BpsAutosizeDirective = BpsAutosizeDirective;
    exports.BpsButtonComponent = BpsButtonComponent;
    exports.BpsButtonGroupComponent = BpsButtonGroupComponent;
    exports.BpsCheckboxComponent = BpsCheckboxComponent;
    exports.BpsCheckboxGroupComponent = BpsCheckboxGroupComponent;
    exports.BpsCheckboxWrapperComponent = BpsCheckboxWrapperComponent;
    exports.BpsCollapseComponent = BpsCollapseComponent;
    exports.BpsCollapsePanelComponent = BpsCollapsePanelComponent;
    exports.BpsComponentsLibComponent = BpsComponentsLibComponent;
    exports.BpsComponentsLibModule = BpsComponentsLibModule;
    exports.BpsComponentsLibService = BpsComponentsLibService;
    exports.BpsConfigurationSelectorComponent = BpsConfigurationSelectorComponent;
    exports.BpsDropDownADirective = BpsDropDownADirective;
    exports.BpsDropDownDirective = BpsDropDownDirective;
    exports.BpsDropdownMenuComponent = BpsDropdownMenuComponent;
    exports.BpsFilterGroupOptionPipe = BpsFilterGroupOptionPipe;
    exports.BpsFilterOptionPipe = BpsFilterOptionPipe;
    exports.BpsFormControlComponent = BpsFormControlComponent;
    exports.BpsFormDirective = BpsFormDirective;
    exports.BpsFormExplainComponent = BpsFormExplainComponent;
    exports.BpsFormExtraComponent = BpsFormExtraComponent;
    exports.BpsFormItemComponent = BpsFormItemComponent;
    exports.BpsFormLabelComponent = BpsFormLabelComponent;
    exports.BpsFormSplitComponent = BpsFormSplitComponent;
    exports.BpsFormTextComponent = BpsFormTextComponent;
    exports.BpsInputDirective = BpsInputDirective;
    exports.BpsInputGroupComponent = BpsInputGroupComponent;
    exports.BpsListComponent = BpsListComponent;
    exports.BpsListItemComponent = BpsListItemComponent;
    exports.BpsListItemMetaComponent = BpsListItemMetaComponent;
    exports.BpsOptionComponent = BpsOptionComponent;
    exports.BpsOptionContainerComponent = BpsOptionContainerComponent;
    exports.BpsOptionGroupComponent = BpsOptionGroupComponent;
    exports.BpsOptionLiComponent = BpsOptionLiComponent;
    exports.BpsPopoverComponent = BpsPopoverComponent;
    exports.BpsPopoverDirective = BpsPopoverDirective;
    exports.BpsRadioButtonComponent = BpsRadioButtonComponent;
    exports.BpsRadioComponent = BpsRadioComponent;
    exports.BpsRadioGroupComponent = BpsRadioGroupComponent;
    exports.BpsSelectComponent = BpsSelectComponent;
    exports.BpsSelectService = BpsSelectService;
    exports.BpsSelectTopControlComponent = BpsSelectTopControlComponent;
    exports.BpsSelectUnselectableDirective = BpsSelectUnselectableDirective;
    exports.BpsSwitchComponent = BpsSwitchComponent;
    exports.BpsTableComponent = BpsTableComponent;
    exports.BpsTableExpandablePanelComponent = BpsTableExpandablePanelComponent;
    exports.BpsToolTipComponent = BpsToolTipComponent;
    exports.BpsTooltipDirective = BpsTooltipDirective;
    exports.defaultFilterOption = defaultFilterOption;
    exports.dropdownMenuServiceFactory = dropdownMenuServiceFactory;
    exports.isAutoSizeType = isAutoSizeType;
    exports.ɵ0 = ɵ0;
    exports.ɵa = NzTooltipBaseDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bps-components-lib.umd.js.map
