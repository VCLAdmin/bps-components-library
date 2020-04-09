(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd'), require('@angular/common'), require('@angular/cdk/overlay'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/empty'), require('@angular/forms'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/grid'), require('@angular/cdk/layout'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('bps-components-lib', ['exports', '@angular/core', 'ng-zorro-antd', '@angular/common', '@angular/cdk/overlay', 'ng-zorro-antd/core', 'ng-zorro-antd/icon', 'ng-zorro-antd/empty', '@angular/forms', '@angular/cdk/observers', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', 'ng-zorro-antd/grid', '@angular/cdk/layout', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory(global['bps-components-lib'] = {}, global.ng.core, global.ngZorroAntd, global.ng.common, global.ng.cdk.overlay, global.core$1, global.icon, global.empty, global.ng.forms, global.ng.cdk.observers, global.ng.cdk.platform, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.grid, global.ng.cdk.layout, global.ng.platformBrowser.animations));
}(this, (function (exports, core, ngZorroAntd, common, overlay, core$1, icon, empty, forms, observers, platform, rxjs, operators, keycodes, grid, layout, animations) { 'use strict';

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
            this.nzWave = new core$1.NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
            this.bpsBlock = false;
            this.bpsGhost = false;
            this.bpsSearch = false;
            this.bpsLoading = false;
            this.bpsType = 'default';
            this.bpsShape = null;
            this.el = this.elementRef.nativeElement;
            this.isInDropdown = false;
            this.iconOnly = false;
            this.destroy$ = new rxjs.Subject();
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
        BpsButtonComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
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
        ], BpsButtonComponent.prototype, "bpsLoading", void 0);
        __decorate([
            core.Input()
        ], BpsButtonComponent.prototype, "bpsType", void 0);
        __decorate([
            core.Input()
        ], BpsButtonComponent.prototype, "bpsShape", void 0);
        __decorate([
            core.Input(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$1, 'default')
        ], BpsButtonComponent.prototype, "bpsSize", void 0);
        BpsButtonComponent = __decorate([
            core.Component({
                selector: '[bps-button]',
                exportAs: 'bpsButton',
                providers: [core$1.NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\n<span class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\n",
                styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:2px solid #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1.active,.ant-btn-variation-1:active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:focus{box-shadow:0 0 12px 0 #00a2d1!important;color:#00a2d1!important;border:2px solid #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:2px solid #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2.active,.ant-btn-variation-2:active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:focus{box-shadow:0 0 12px 0 #00a2d1!important;color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-6,.ant-btn-variation-7,.ant-btn-variation-8{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-3[disabled]:hover,.ant-btn-variation-4[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-5[disabled],.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-6[disabled],.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-7[disabled],.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-8[disabled],.ant-btn-variation-8[disabled]:hover,.ant-btn-variation-9[disabled],.ant-btn-variation-9[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-3:hover,.ant-btn-variation-4:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3.active,.ant-btn-variation-3:active,.ant-btn-variation-4.active,.ant-btn-variation-4:active,.ant-btn-variation-5.active,.ant-btn-variation-5:active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9.active,.ant-btn-variation-9:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7.active,.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6.active,.ant-btn-variation-6:active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8.active,.ant-btn-variation-8:active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:focus,.ant-btn-variation-7:focus,.ant-btn-variation-8:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:focus{box-shadow:0 0 12px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-10:hover,.ant-btn-variation-11,.ant-btn-variation-11:hover,.ant-btn-variation-13,.ant-btn-variation-13:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11,.ant-btn-variation-11:hover{background-color:#253d47!important}.ant-btn-variation-10[disabled],.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled],.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled],.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled],.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled],.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled],.ant-btn-variation-20[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled] svg,.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-16[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-10.active,.ant-btn-variation-10:active,.ant-btn-variation-11.active,.ant-btn-variation-11:active,.ant-btn-variation-13.active,.ant-btn-variation-13:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:2px solid #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled] svg,.ant-btn-variation-12[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-12.active,.ant-btn-variation-12:active{background-color:#00a2d1!important}.ant-btn-variation-12:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#253d47!important}.ant-btn-variation-14,.ant-btn-variation-15,.ant-btn-variation-16{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14.active,.ant-btn-variation-14:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16.active,.ant-btn-variation-16:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15.active,.ant-btn-variation-15:active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#00a2d1!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-15:focus,.ant-btn-variation-16:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#363636!important;color:#fff!important}.ant-btn-variation-17,.ant-btn-variation-17:hover{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:2px solid #fff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17.active,.ant-btn-variation-17:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#888!important}.ant-btn-variation-17[disabled],.ant-btn-variation-17[disabled]:hover{border:2px solid #666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18,.ant-btn-variation-18:hover,.ant-btn-variation-19,.ant-btn-variation-19:hover{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19,.ant-btn-variation-19:hover{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18.active,.ant-btn-variation-18:active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-19:focus{box-shadow:0 0 8px 0 #00a2d1!important;background-color:#262626!important}.ant-btn-variation-18[disabled],.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-19[disabled]:hover{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled] svg,.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-20[disabled]:hover svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20.active,.ant-btn-variation-20:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:focus{background-color:#363636!important;box-shadow:0 0 8px 0 #00a2d1!important;border:none!important}"]
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

    var ɵ0 = ngZorroAntd.en_US;
    var BpsComponentsLibModule = /** @class */ (function () {
        function BpsComponentsLibModule() {
        }
        BpsComponentsLibModule = __decorate([
            core.NgModule({
                declarations: [
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
                    BpsButtonGroupComponent
                ],
                imports: [
                    ngZorroAntd.NgZorroAntdModule,
                    common.CommonModule,
                    core$1.NzAddOnModule,
                    icon.NzIconModule,
                    overlay.OverlayModule,
                    ngZorroAntd.NzNoAnimationModule,
                    ngZorroAntd.NzOverlayModule,
                    empty.NzEmptyModule,
                    forms.FormsModule,
                    observers.ObserversModule,
                    core$1.NzWaveModule
                ],
                exports: [
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
                    BpsButtonGroupComponent
                ],
                providers: [
                    { provide: ngZorroAntd.NZ_I18N, useValue: ɵ0 }
                ],
            })
        ], BpsComponentsLibModule);
        return BpsComponentsLibModule;
    }());

    exports.BpsAutosizeDirective = BpsAutosizeDirective;
    exports.BpsButtonComponent = BpsButtonComponent;
    exports.BpsButtonGroupComponent = BpsButtonGroupComponent;
    exports.BpsComponentsLibComponent = BpsComponentsLibComponent;
    exports.BpsComponentsLibModule = BpsComponentsLibModule;
    exports.BpsComponentsLibService = BpsComponentsLibService;
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
    exports.BpsOptionComponent = BpsOptionComponent;
    exports.BpsOptionContainerComponent = BpsOptionContainerComponent;
    exports.BpsOptionGroupComponent = BpsOptionGroupComponent;
    exports.BpsOptionLiComponent = BpsOptionLiComponent;
    exports.BpsSelectComponent = BpsSelectComponent;
    exports.BpsSelectService = BpsSelectService;
    exports.BpsSelectTopControlComponent = BpsSelectTopControlComponent;
    exports.BpsSelectUnselectableDirective = BpsSelectUnselectableDirective;
    exports.defaultFilterOption = defaultFilterOption;
    exports.isAutoSizeType = isAutoSizeType;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bps-components-lib.umd.js.map
