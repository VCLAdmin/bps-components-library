import { __decorate, __read, __spread } from "tslib";
import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { isNil, isNotNil } from 'ng-zorro-antd/core';
import { BpsOptionComponent } from './bps-option.component';
import { defaultFilterOption, BpsFilterOptionPipe } from './bps-option.pipe';
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
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // tslint:disable-next-line:jsdoc-format
        /** ContentChildren Change **/
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // tslint:disable-next-line:jsdoc-format
        /** searchValue Change **/
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // tslint:disable-next-line:jsdoc-format
        /** animation event **/
        this.animationEvent$ = new Subject();
        // tslint:disable-next-line:jsdoc-format
        /** open event **/
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map(function (data) { return data.value; }));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter(function (item) { return item.emit; }), map(function (data) {
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
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(function (value) {
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
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap(function (data) {
            var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
            _this.listOfSelectedValue = listOfSelectedValue;
            _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        }), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
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
                if (isNotNil(targetValue)) {
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
            if (!isNil(selectedOption)) {
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
            .filter(function (item) { return !isNotNil(_this.listOfSelectedValue.find(function (v) { return _this.compareWith(v, item); })); });
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
            case UP_ARROW:
                e.preventDefault();
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
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
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
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
        Injectable()
    ], BpsSelectService);
    return BpsSelectService;
}());
export { BpsSelectService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXNlbGVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtc2VsZWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRixPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBaUIsTUFBTSxtQkFBbUIsQ0FBQztBQUc1RjtJQUFBO1FBQUEsaUJBc1pDO1FBcllDLHdDQUF3QztRQUN4QyxvQkFBb0I7UUFDcEIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLG1CQUFtQixDQUFDO1FBQ2xELFNBQUksR0FBb0MsU0FBUyxDQUFDO1FBQ2xELHFCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUM1QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLHdDQUF3QztRQUN4Qyw2REFBNkQ7UUFDN0Qsa0NBQWtDO1FBQzFCLGlDQUE0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LFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUNwQjtnQkFDRCxNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsa0RBQXVCLEdBQXZCLFVBQXdCLE1BQTBCO1FBQWxELGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDdkMsT0FBTztTQUNSO1FBQ0QsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztRQUM5RyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBYztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXJaVSxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBc1o1QjtJQUFELHVCQUFDO0NBQUEsQUF0WkQsSUFzWkM7U0F0WlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgU1BBQ0UsIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBzaGFyZSwgc2tpcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc05pbCwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBCcHNPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vYnBzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnBzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBCcHNGaWx0ZXJPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9icHMtb3B0aW9uLnBpcGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0U2VydmljZSB7XG5cbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGVmYXVsdCc7XG4gIH1cblxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAndGFncyc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzZG9jLWZvcm1hdFxuICAvKiogSW5wdXQgcGFyYW1zICoqL1xuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRydWU7XG4gIHNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xuICBtb2RlOiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnID0gJ2RlZmF1bHQnO1xuICBtYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc2RvYy1mb3JtYXRcbiAgLyoqIHNlbGVjdGVkVmFsdWVDaGFuZ2VkIHNob3VsZCBlbWl0IG5nTW9kZWxDaGFuZ2Ugb3Igbm90ICoqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyB2YWx1ZTogYW55W107IGVtaXQ6IGJvb2xlYW4gfT4oe1xuICAgIHZhbHVlOiBbXSxcbiAgICBlbWl0OiBmYWxzZVxuICB9KTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzZG9jLWZvcm1hdFxuICAvKiogQ29udGVudENoaWxkcmVuIENoYW5nZSAqKi9cbiAgcHJpdmF0ZSBtYXBPZlRlbXBsYXRlT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBCcHNPcHRpb25Db21wb25lbnRbXTtcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBCcHNPcHRpb25Hcm91cENvbXBvbmVudFtdO1xuICB9Pih7XG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFtdLFxuICAgIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFtdXG4gIH0pO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anNkb2MtZm9ybWF0XG4gIC8qKiBzZWFyY2hWYWx1ZSBDaGFuZ2UgKiovXG4gIHByaXZhdGUgc2VhcmNoVmFsdWVSYXckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgcHJpdmF0ZSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogQnBzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBvcGVuUmF3JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgY2hlY2tSYXckID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBvcGVuID0gZmFsc2U7XG4gIGNsZWFySW5wdXQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgc2VhcmNoVmFsdWUgPSAnJztcbiAgaXNTaG93Tm90Rm91bmQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzZG9jLWZvcm1hdFxuICAvKiogYW5pbWF0aW9uIGV2ZW50ICoqL1xuICBhbmltYXRpb25FdmVudCQgPSBuZXcgU3ViamVjdCgpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anNkb2MtZm9ybWF0XG4gIC8qKiBvcGVuIGV2ZW50ICoqL1xuICBvcGVuJCA9IHRoaXMub3BlblJhdyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgYWN0aXZhdGVkT3B0aW9uOiBCcHNPcHRpb25Db21wb25lbnQgfCBudWxsO1xuICBhY3RpdmF0ZWRPcHRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8QnBzT3B0aW9uQ29tcG9uZW50IHwgbnVsbD4oMSk7XG4gIGxpc3RPZlNlbGVjdGVkVmFsdWUkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS52YWx1ZSkpO1xuICBtb2RlbENoYW5nZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxuICAgIG1hcChkYXRhID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGRhdGEudmFsdWU7XG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3RbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVsVmFsdWUgPSBzZWxlY3RlZExpc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgICB9KVxuICApO1xuICBzZWFyY2hWYWx1ZSQgPSB0aGlzLnNlYXJjaFZhbHVlUmF3JC5waXBlKFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgc2tpcCgxKSxcbiAgICBzaGFyZSgpLFxuICAgIHRhcCh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvblswXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlcmVkT3B0aW9uKCk7XG4gICAgfSlcbiAgKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anNkb2MtZm9ybWF0XG4gIC8qKiBmbGF0IFZpZXdDaGlsZHJlbiAqKi9cbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IEJwc09wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc2RvYy1mb3JtYXRcbiAgLyoqIHRhZyBvcHRpb24gKiovXG4gIGxpc3RPZlRhZ09wdGlvbjogQnBzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzZG9jLWZvcm1hdFxuICAvKiogdGFnIG9wdGlvbiBjb25jYXQgdGVtcGxhdGUgb3B0aW9uICoqL1xuICBsaXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbjogQnBzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzZG9jLWZvcm1hdFxuICAvKiogVmlld0NoaWxkcmVuICoqL1xuICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQnBzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogQnBzT3B0aW9uR3JvdXBDb21wb25lbnRbXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anNkb2MtZm9ybWF0XG4gIC8qKiBjbGljayBvciBlbnRlciBhZGQgdGFnIG9wdGlvbiAqKi9cbiAgYWRkZWRUYWdPcHRpb246IEJwc09wdGlvbkNvbXBvbmVudCB8IG51bGw7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc2RvYy1mb3JtYXRcbiAgLyoqIGRpc3BsYXkgaW4gdG9wIGNvbnRyb2wgKiovXG4gIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uOiBCcHNPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6anNkb2MtZm9ybWF0XG4gIC8qKiBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlICoqL1xuICB2YWx1ZU9yT3B0aW9uJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSQsIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiRdKS5waXBlKFxuICAgIHRhcChkYXRhID0+IHtcbiAgICAgIGNvbnN0IFtsaXN0T2ZTZWxlY3RlZFZhbHVlLCBtYXBPZlRlbXBsYXRlT3B0aW9uXSA9IGRhdGE7XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlO1xuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCA9IG1hcE9mVGVtcGxhdGVPcHRpb24ubGlzdE9mTnpPcHRpb25Db21wb25lbnQ7XG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBtYXBPZlRlbXBsYXRlT3B0aW9uLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XG4gICAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jb25jYXQoXG4gICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5yZWR1Y2UoXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcbiAgICAgICAgICBbXSBhcyBCcHNPcHRpb25Db21wb25lbnRbXVxuICAgICAgICApXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZUYWdPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0ZWRPcHRpb25JZk5lZWRlZCgpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcbiAgICB9KSxcbiAgICBzaGFyZSgpXG4gICk7XG4gIGNoZWNrJCA9IG1lcmdlKFxuICAgIHRoaXMuY2hlY2tSYXckLFxuICAgIHRoaXMudmFsdWVPck9wdGlvbiQsXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLFxuICAgIHRoaXMub3BlbiQsXG4gICAgdGhpcy5tb2RlbENoYW5nZSRcbiAgKS5waXBlKHNoYXJlKCkpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBjbGlja09wdGlvbihvcHRpb246IEJwc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpqc2RvYy1mb3JtYXRcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IG5leHQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgKiovXG4gICAgaWYgKCFvcHRpb24uYnBzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbik7XG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVdO1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLmJwc1ZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLm1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLmJwc1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29tcGFyZVdpdGgobGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSwgb3B0aW9uLmJwc1ZhbHVlKSkge1xuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW29wdGlvbi5icHNWYWx1ZV07XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PlxuICAgICAgICB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSlcbiAgICAgICk7XG4gICAgICBpZiAoIWlzTmlsKHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gW3NlbGVjdGVkT3B0aW9uXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IEJwc09wdGlvbkNvbXBvbmVudFtdID0gW107XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgY29uc3QgbGlzdE9mTWl4ZWRPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiwgLi4udGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbl07XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGxpc3RPZk1peGVkT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHYpKTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgIGxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb247XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgIGNvbnN0IGxpc3RPZk1pc3NWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXG4gICAgICAgIHZhbHVlID0+ICF0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSlcbiAgICAgICk7XG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZk1pc3NWYWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZWRPcHRpb24gPSB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSk7XG4gICAgICAgIGlmIChjYWNoZWRPcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gY2FjaGVkT3B0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IEJwc09wdGlvbkNvbXBvbmVudCgpO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50LmJwc1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQuYnBzTGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gbnpPcHRpb25Db21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbildO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb25dO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5icHNMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLnNlYXJjaFZhbHVlICYmICFpc01hdGNoKSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBuZXcgQnBzT3B0aW9uQ29tcG9uZW50KCk7XG4gICAgICBvcHRpb24uYnBzVmFsdWUgPSB0aGlzLnNlYXJjaFZhbHVlO1xuICAgICAgb3B0aW9uLmJwc0xhYmVsID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgIHRoaXMuYWRkZWRUYWdPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZGVkVGFnT3B0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJlZE9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbigpO1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uID0gbmV3IEJwc0ZpbHRlck9wdGlvblBpcGUoKS50cmFuc2Zvcm0oXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLFxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSxcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uLFxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2hcbiAgICApO1xuICAgIHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24gPSB0aGlzLmFkZGVkVGFnT3B0aW9uXG4gICAgICA/IFt0aGlzLmFkZGVkVGFnT3B0aW9uLCAuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl1cbiAgICAgIDogWy4uLmxpc3RPZkZpbHRlcmVkT3B0aW9uXTtcbiAgICB0aGlzLmlzU2hvd05vdEZvdW5kID0gIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7XG4gIH1cblxuICBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJJbnB1dCQubmV4dCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JC5uZXh0KHsgdmFsdWUsIGVtaXQgfSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uOiBCcHNPcHRpb25Db21wb25lbnQgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24kLm5leHQob3B0aW9uKTtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcbiAgfVxuXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmpzZG9jLWZvcm1hdFxuICAgIC8qKiBhdXRvIHRva2VuU2VwYXJhdG9ycyAqKi9cbiAgICBpZiAoXG4gICAgICBpbnB1dFZhbHVlICYmXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCAmJlxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5pc011bHRpcGxlT3JUYWdzICYmXG4gICAgICB0aGlzLmluY2x1ZGVzU2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpXG4gICAgKSB7XG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHRoaXMuc3BsaXRCeVNlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKTtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZUJ5TGFiZWxMaXN0KGxpc3RPZkxhYmVsKTtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3BsaXRCeVNlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xuICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG4gIH1cblxuICByZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc2V0QWN0aXZhdGVkT3B0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZhdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maW5kKGl0ZW0gPT5cbiAgICAgICAgdGhpcy5jb21wYXJlV2l0aChpdGVtLmJwc1ZhbHVlLCB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVbMF0pXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24oYWN0aXZhdGVkT3B0aW9uIHx8IG51bGwpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5icHNWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRPcHRpb24hLmJwc1ZhbHVlKSkgfHxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAhdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0sIHRoaXMuYWN0aXZhdGVkT3B0aW9uIS5icHNWYWx1ZSkpXG4gICAgICApIHtcbiAgICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzZXRBY3RpdmF0ZWRPcHRpb24oKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUZW1wbGF0ZU9wdGlvbihcbiAgICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQnBzT3B0aW9uQ29tcG9uZW50W10sXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogQnBzT3B0aW9uR3JvdXBDb21wb25lbnRbXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kLm5leHQoeyBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudCwgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlUmF3JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkVmFsdWVCeUxhYmVsTGlzdChsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XG4gICAgY29uc3QgbGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb25cbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5pbmRleE9mKGl0ZW0uYnBzTGFiZWwpICE9PSAtMSlcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmJwc1ZhbHVlKVxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpc05vdE5pbCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpKSk7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZU1vZGUpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZV0sIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0T2ZVbk1hdGNoT3B0aW9uVmFsdWUgPSBsaXN0T2ZMYWJlbC5maWx0ZXIoXG4gICAgICAgIGxhYmVsID0+IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24ubWFwKGl0ZW0gPT4gaXRlbS5icHNMYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFxuICAgICAgICBbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZpbHRlcihcbiAgICAgIGl0ZW0gPT4gIWl0ZW0uYnBzRGlzYWJsZWQgJiYgIWl0ZW0uYnBzSGlkZVxuICAgICk7XG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZE9ySGlkZGVuLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPVxuICAgICAgICAgIGFjdGl2YXRlZEluZGV4ID4gMCA/IGFjdGl2YXRlZEluZGV4IC0gMSA6IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkT3JIaWRkZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltwcmVJbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPVxuICAgICAgICAgIGFjdGl2YXRlZEluZGV4IDwgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbi5sZW5ndGggLSAxID8gYWN0aXZhdGVkSW5kZXggKyAxIDogMDtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRPckhpZGRlbltuZXh0SW5kZXhdKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbiAmJiAhdGhpcy5hY3RpdmF0ZWRPcHRpb24uYnBzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzICYmICFldmVudFRhcmdldC52YWx1ZSAmJiB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb25bdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uOiBCcHNPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBvcHRpb24uYnBzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiAhdGhpcy5jb21wYXJlV2l0aChpdGVtLCBvcHRpb24uYnBzVmFsdWUpKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xuICAgIHRoaXMub3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgY2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja1JhdyQubmV4dCgpO1xuICB9XG59XG4iXX0=