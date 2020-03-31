import { ReplaySubject, Subject } from 'rxjs';
import { BpsOptionGroupComponent } from './bps-option-group.component';
import { BpsOptionComponent } from './bps-option.component';
import { TFilterOption } from './bps-option.pipe';
export declare class BpsSelectService {
    get isSingleMode(): boolean;
    get isTagsMode(): boolean;
    get isMultipleMode(): boolean;
    get isMultipleOrTags(): boolean;
    /** Input params **/
    autoClearSearchValue: boolean;
    serverSearch: boolean;
    filterOption: TFilterOption;
    mode: 'default' | 'multiple' | 'tags';
    maxMultipleCount: number;
    disabled: boolean;
    /** selectedValueChanged should emit ngModelChange or not **/
    private listOfSelectedValueWithEmit$;
    /** ContentChildren Change **/
    private mapOfTemplateOption$;
    /** searchValue Change **/
    private searchValueRaw$;
    private listOfFilteredOption;
    private openRaw$;
    private checkRaw$;
    private open;
    clearInput$: Subject<boolean>;
    searchValue: string;
    isShowNotFound: boolean;
    /** animation event **/
    animationEvent$: Subject<unknown>;
    /** open event **/
    open$: import("rxjs").Observable<boolean>;
    activatedOption: BpsOptionComponent | null;
    activatedOption$: ReplaySubject<BpsOptionComponent>;
    listOfSelectedValue$: import("rxjs").Observable<any[]>;
    modelChange$: import("rxjs").Observable<any[]>;
    searchValue$: import("rxjs").Observable<string>;
    listOfSelectedValue: any[];
    /** flat ViewChildren **/
    listOfTemplateOption: BpsOptionComponent[];
    /** tag option **/
    listOfTagOption: BpsOptionComponent[];
    /** tag option concat template option **/
    listOfTagAndTemplateOption: BpsOptionComponent[];
    /** ViewChildren **/
    listOfNzOptionComponent: BpsOptionComponent[];
    listOfNzOptionGroupComponent: BpsOptionGroupComponent[];
    /** click or enter add tag option **/
    addedTagOption: BpsOptionComponent | null;
    /** display in top control **/
    listOfCachedSelectedOption: BpsOptionComponent[];
    /** selected value or ViewChildren change **/
    valueOrOption$: import("rxjs").Observable<[any[], {
        listOfNzOptionComponent: BpsOptionComponent[];
        listOfNzOptionGroupComponent: BpsOptionGroupComponent[];
    }]>;
    check$: import("rxjs").Observable<unknown>;
    compareWith: (o1: any, o2: any) => boolean;
    clickOption(option: BpsOptionComponent): void;
    updateListOfCachedOption(): void;
    updateListOfTagOption(): void;
    updateAddTagOption(): void;
    updateListOfFilteredOption(): void;
    clearInput(): void;
    updateListOfSelectedValue(value: any[], emit: boolean): void;
    updateActivatedOption(option: BpsOptionComponent | null): void;
    tokenSeparate(inputValue: string, tokenSeparators: string[]): void;
    includesSeparators(str: string | string[], separators: string[]): boolean;
    splitBySeparators(str: string | string[], separators: string[]): string[];
    resetActivatedOptionIfNeeded(): void;
    updateTemplateOption(listOfNzOptionComponent: BpsOptionComponent[], listOfNzOptionGroupComponent: BpsOptionGroupComponent[]): void;
    updateSearchValue(value: string): void;
    updateSelectedValueByLabelList(listOfLabel: string[]): void;
    onKeyDown(e: KeyboardEvent): void;
    removeValueFormSelected(option: BpsOptionComponent): void;
    setOpenState(value: boolean): void;
    check(): void;
}
