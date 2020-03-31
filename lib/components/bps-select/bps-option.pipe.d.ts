import { PipeTransform, QueryList } from '@angular/core';
import { BpsOptionGroupComponent } from './bps-option-group.component';
import { BpsOptionComponent } from './bps-option.component';
export declare type TFilterOption = (input: string, option: BpsOptionComponent) => boolean;
export declare class BpsFilterOptionPipe implements PipeTransform {
    transform(options: BpsOptionComponent[] | QueryList<BpsOptionComponent>, searchValue: string, filterOption: TFilterOption, serverSearch: boolean): BpsOptionComponent[];
}
export declare class BpsFilterGroupOptionPipe implements PipeTransform {
    transform(groups: BpsOptionGroupComponent[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): BpsOptionGroupComponent[];
}
export declare function defaultFilterOption(searchValue: string, option: BpsOptionComponent): boolean;
