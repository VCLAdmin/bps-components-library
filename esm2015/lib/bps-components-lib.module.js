import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BpsComponentsLibComponent } from './bps-components-lib.component';
import { NgZorroAntdModule, NzNoAnimationModule, NzOverlayModule, NZ_I18N, en_US, NzToolTipModule, NzSpinModule, NzGridModule, NzAvatarModule, NzTableModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NzAddOnModule, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { FormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
/* BPS Input */
import { BpsInputDirective } from './components/bps-input/bps-input.directive';
import { BpsAutosizeDirective } from './components/bps-input/bps-autosize.directive';
import { BpsInputGroupComponent } from './components/bps-input/bps-input-group.component';
/* BPS Select */
import { BpsOptionComponent } from './components/bps-select/bps-option.component';
import { BpsFilterGroupOptionPipe } from './components/bps-select/bps-option.pipe';
import { BpsFilterOptionPipe } from './components/bps-select/bps-option.pipe';
import { BpsOptionContainerComponent } from './components/bps-select/bps-option-container.component';
import { BpsOptionGroupComponent } from './components/bps-select/bps-option-group.component';
import { BpsOptionLiComponent } from './components/bps-select/bps-option-li.component';
import { BpsSelectComponent } from './components/bps-select/bps-select.component';
import { BpsSelectTopControlComponent } from './components/bps-select/bps-select-top-control.component';
import { BpsSelectUnselectableDirective } from './components/bps-select/bps-select-unselectable.directive';
/* BPS Form */
import { BpsFormDirective } from './components/bps-form/bps-form.directive';
import { BpsFormControlComponent } from './components/bps-form/bps-form-control.component';
import { BpsFormExplainComponent } from './components/bps-form/bps-form-explain.component';
import { BpsFormExtraComponent } from './components/bps-form/bps-form-extra.component';
import { BpsFormItemComponent } from './components/bps-form/bps-form-item.component';
import { BpsFormLabelComponent } from './components/bps-form/bps-form-label.component';
import { BpsFormSplitComponent } from './components/bps-form/bps-form-split.component';
import { BpsFormTextComponent } from './components/bps-form/bps-form-text.component';
/* BPS Button */
import { BpsButtonComponent } from './components/bps-button/bps-button.component';
import { BpsButtonGroupComponent } from './components/bps-button/bps-button-group.component';
/* BPS Switch */
import { BpsSwitchComponent } from './components/bps-switch/bps-switch.component';
/* BPS Checkbox */
import { BpsCheckboxGroupComponent } from './components/bps-checkbox/bps-checkbox-group.component';
import { BpsCheckboxWrapperComponent } from './components/bps-checkbox/bps-checkbox-wrapper.component';
import { BpsCheckboxComponent } from './components/bps-checkbox/bps-checkbox.component';
/* BPS Radio */
import { BpsRadioComponent } from './components/bps-radio/bps-radio.component';
import { BpsRadioGroupComponent } from './components/bps-radio/bps-radio-group.component';
import { BpsRadioButtonComponent } from './components/bps-radio/bps-radio-button.component';
/* BPS Collapse */
import { BpsCollapseComponent } from './components/bps-collapse/bps-collapse.component';
import { BpsCollapsePanelComponent } from './components/bps-collapse/bps-collapse-panel.component';
/* BPS Popover */
import { BpsPopoverComponent } from './components/bps-popover/bps-popover.component';
import { BpsPopoverDirective } from './components/bps-popover/bps-popover.directive';
/* BPS Tooltip */
import { BpsTooltipDirective } from './components/bps-tooltip/bps-tooltip.directive';
import { BpsToolTipComponent } from './components/bps-tooltip/bps-tooltip.component';
/* BPS List */
import { BpsListComponent } from './components/bps-list/bps-list.component';
import { BpsListItemComponent } from './components/bps-list/bps-list-item.component';
import { BpsListItemMetaComponent } from './components/bps-list/bps-list-item-meta.component';
/*BPS Table */
import { BpsTableComponent } from './components/bps-table/bps-table.component';
/* BPS Table Expandable Panel */
import { BpsTableExpandablePanelComponent } from './components/bps-table-expandable-panel/bps-table-expandable-panel.component';
/* BPS Configuration Selector */
import { BpsConfigurationSelectorComponent } from './components/bps-configuration-selector/bps-configuration-selector.component';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { BpsDropDownADirective } from './components/bps-dropdown/bps-dropdown-a.directive';
import { BpsDropdownMenuComponent } from './components/bps-dropdown/bps-dropdown-menu.component';
import { BpsDropDownDirective } from './components/bps-dropdown/bps-dropdown.directive';
const ɵ0 = en_US;
let BpsComponentsLibModule = class BpsComponentsLibModule {
};
BpsComponentsLibModule = __decorate([
    NgModule({
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
            NgZorroAntdModule,
            CommonModule,
            NzAddOnModule,
            NzIconModule,
            OverlayModule,
            NzNoAnimationModule,
            NzToolTipModule,
            NzOverlayModule,
            NzEmptyModule,
            FormsModule,
            ObserversModule,
            NzWaveModule,
            NzSpinModule,
            NzGridModule,
            NzAvatarModule,
            NzTableModule,
            NzResizableModule
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
            { provide: NZ_I18N, useValue: ɵ0 }
        ],
        entryComponents: [
            BpsPopoverComponent,
            BpsToolTipComponent
        ]
    })
], BpsComponentsLibModule);
export { BpsComponentsLibModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbXBvbmVudHMtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9icHMtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BMLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsZUFBZTtBQUNmLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBRXhGLGdCQUFnQjtBQUNoQixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUNo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O1NBQ3BCO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQUFJO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJwc0NvbXBvbmVudHNMaWJDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1jb21wb25lbnRzLWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlLCBOWl9JMThOLCBlbl9VUywgTnpUb29sVGlwTW9kdWxlLCBOelNwaW5Nb2R1bGUsIE56R3JpZE1vZHVsZSwgTnpBdmF0YXJNb2R1bGUsIE56VGFibGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56V2F2ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuXHJcbi8qIEJQUyBJbnB1dCAqL1xyXG5pbXBvcnQge0Jwc0lucHV0RGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Jwc0F1dG9zaXplRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1hdXRvc2l6ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Jwc0lucHV0R3JvdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtaW5wdXQvYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG4vKiBCUFMgU2VsZWN0ICovXHJcbmltcG9ydCB7QnBzT3B0aW9uQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzRmlsdGVyR3JvdXBPcHRpb25QaXBlfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtb3B0aW9uLnBpcGUnO1xyXG5pbXBvcnQge0Jwc0ZpbHRlck9wdGlvblBpcGV9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24ucGlwZSc7XHJcbmltcG9ydCB7QnBzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc09wdGlvbkdyb3VwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzT3B0aW9uTGlDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzU2VsZWN0VW5zZWxlY3RhYmxlRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtc2VsZWN0LXVuc2VsZWN0YWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogQlBTIEZvcm0gKi9cclxuaW1wb3J0IHtCcHNGb3JtRGlyZWN0aXZlfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHtCcHNGb3JtQ29udHJvbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNGb3JtRXhwbGFpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWV4cGxhaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNGb3JtRXh0cmFDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1leHRyYS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc0Zvcm1JdGVtQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc0Zvcm1MYWJlbENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzRm9ybVNwbGl0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0tc3BsaXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNGb3JtVGV4dENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLXRleHQuY29tcG9uZW50JztcclxuXHJcbi8qIEJQUyBCdXR0b24gKi9cclxuaW1wb3J0IHtCcHNCdXR0b25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtYnV0dG9uL2Jwcy1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzQnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWJ1dHRvbi9icHMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG4vKiBCUFMgU3dpdGNoICovXHJcbmltcG9ydCB7IEJwc1N3aXRjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc3dpdGNoL2Jwcy1zd2l0Y2guY29tcG9uZW50JztcclxuXHJcbi8qIEJQUyBDaGVja2JveCAqL1xyXG5pbXBvcnQgeyBCcHNDaGVja2JveEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1jaGVja2JveC9icHMtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1jaGVja2JveC9icHMtY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtY2hlY2tib3gvYnBzLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcblxyXG4vKiBCUFMgUmFkaW8gKi9cclxuaW1wb3J0IHsgQnBzUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXJhZGlvL2Jwcy1yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1yYWRpby9icHMtcmFkaW8tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXJhZGlvL2Jwcy1yYWRpby1idXR0b24uY29tcG9uZW50JztcclxuXHJcbi8qIEJQUyBDb2xsYXBzZSAqL1xyXG5pbXBvcnQgeyBCcHNDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtY29sbGFwc2UvYnBzLWNvbGxhcHNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWNvbGxhcHNlL2Jwcy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuLyogQlBTIFBvcG92ZXIgKi9cclxuaW1wb3J0IHsgQnBzUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtcG9wb3Zlci9icHMtcG9wb3Zlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1wb3BvdmVyL2Jwcy1wb3BvdmVyLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiBCUFMgVG9vbHRpcCAqL1xyXG5pbXBvcnQgeyBCcHNUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy10b29sdGlwL2Jwcy10b29sdGlwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJwc1Rvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYnBzLXRvb2x0aXAuY29tcG9uZW50JztcclxuXHJcbi8qIEJQUyBMaXN0ICovXHJcbmltcG9ydCB7IEJwc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XHJcblxyXG4vKkJQUyBUYWJsZSAqL1xyXG5pbXBvcnQgeyBCcHNUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtdGFibGUvYnBzLXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG4vKiBCUFMgVGFibGUgRXhwYW5kYWJsZSBQYW5lbCAqL1xyXG5pbXBvcnQgeyBCcHNUYWJsZUV4cGFuZGFibGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuLyogQlBTIENvbmZpZ3VyYXRpb24gU2VsZWN0b3IgKi9cclxuaW1wb3J0IHsgQnBzQ29uZmlndXJhdGlvblNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBOelJlc2l6YWJsZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzaXphYmxlJztcclxuXHJcbmltcG9ydCB7IEJwc0Ryb3BEb3duQURpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtZHJvcGRvd24vYnBzLWRyb3Bkb3duLWEuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9icHMtZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9icHMtZHJvcGRvd24vYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnBzRHJvcERvd25EaXJlY3RpdmUsXHJcbiAgICBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQsXHJcbiAgICBCcHNEcm9wRG93bkFEaXJlY3RpdmUsXHJcbiAgICBCcHNUYWJsZUNvbXBvbmVudCxcclxuICAgIEJwc0xpc3RDb21wb25lbnQsXHJcbiAgICBCcHNMaXN0SXRlbUNvbXBvbmVudCxcclxuICAgIEJwc0xpc3RJdGVtTWV0YUNvbXBvbmVudCxcclxuICAgIEJwc1Rvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBCcHNUb29sVGlwQ29tcG9uZW50LFxyXG4gICAgQnBzUG9wb3ZlckRpcmVjdGl2ZSxcclxuICAgIEJwc1BvcG92ZXJDb21wb25lbnQsXHJcbiAgICBCcHNDb21wb25lbnRzTGliQ29tcG9uZW50LFxyXG4gICAgQnBzSW5wdXRHcm91cENvbXBvbmVudCxcclxuICAgIEJwc0lucHV0RGlyZWN0aXZlLFxyXG4gICAgQnBzQXV0b3NpemVEaXJlY3RpdmUsXHJcbiAgICBCcHNPcHRpb25Db21wb25lbnQsXHJcbiAgICBCcHNGaWx0ZXJPcHRpb25QaXBlLFxyXG4gICAgQnBzRmlsdGVyR3JvdXBPcHRpb25QaXBlLFxyXG4gICAgQnBzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsXHJcbiAgICBCcHNPcHRpb25MaUNvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdENvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBCcHNTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmUsXHJcbiAgICBCcHNGb3JtRGlyZWN0aXZlLFxyXG4gICAgQnBzRm9ybUV4cGxhaW5Db21wb25lbnQsXHJcbiAgICBCcHNGb3JtQ29udHJvbENvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1FeHRyYUNvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybUxhYmVsQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybVNwbGl0Q29tcG9uZW50LFxyXG4gICAgQnBzRm9ybVRleHRDb21wb25lbnQsXHJcbiAgICBCcHNCdXR0b25Db21wb25lbnQsXHJcbiAgICBCcHNCdXR0b25Hcm91cENvbXBvbmVudCxcclxuICAgIEJwc1N3aXRjaENvbXBvbmVudCxcclxuICAgIEJwc0NoZWNrYm94R3JvdXBDb21wb25lbnQsXHJcbiAgICBCcHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBCcHNDaGVja2JveENvbXBvbmVudCxcclxuICAgIEJwc1JhZGlvQ29tcG9uZW50LFxyXG4gICAgQnBzUmFkaW9Hcm91cENvbXBvbmVudCxcclxuICAgIEJwc1JhZGlvQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQnBzQ29sbGFwc2VDb21wb25lbnQsXHJcbiAgICBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgQnBzVGFibGVFeHBhbmRhYmxlUGFuZWxDb21wb25lbnQsXHJcbiAgICBCcHNDb25maWd1cmF0aW9uU2VsZWN0b3JDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpBZGRPbk1vZHVsZSxcclxuICAgIE56SWNvbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBOek5vQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgTnpUb29sVGlwTW9kdWxlLFxyXG4gICAgTnpPdmVybGF5TW9kdWxlLFxyXG4gICAgTnpFbXB0eU1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgT2JzZXJ2ZXJzTW9kdWxlLFxyXG4gICAgTnpXYXZlTW9kdWxlLFxyXG4gICAgTnpTcGluTW9kdWxlLFxyXG4gICAgTnpHcmlkTW9kdWxlLFxyXG4gICAgTnpBdmF0YXJNb2R1bGUsXHJcbiAgICBOelRhYmxlTW9kdWxlLFxyXG4gICAgTnpSZXNpemFibGVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJwc0Ryb3BEb3duRGlyZWN0aXZlLFxyXG4gICAgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50LFxyXG4gICAgQnBzRHJvcERvd25BRGlyZWN0aXZlLFxyXG4gICAgQnBzQ29uZmlndXJhdGlvblNlbGVjdG9yQ29tcG9uZW50LFxyXG4gICAgQnBzVGFibGVDb21wb25lbnQsXHJcbiAgICBCcHNMaXN0Q29tcG9uZW50LFxyXG4gICAgQnBzTGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICBCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQsXHJcbiAgICBCcHNQb3BvdmVyRGlyZWN0aXZlLFxyXG4gICAgQnBzUG9wb3ZlckNvbXBvbmVudCxcclxuICAgIEJwc0NvbXBvbmVudHNMaWJDb21wb25lbnQsXHJcbiAgICBCcHNDb21wb25lbnRzTGliQ29tcG9uZW50LFxyXG4gICAgQnBzSW5wdXRHcm91cENvbXBvbmVudCxcclxuICAgIEJwc0lucHV0RGlyZWN0aXZlLFxyXG4gICAgQnBzQXV0b3NpemVEaXJlY3RpdmUsXHJcbiAgICBCcHNPcHRpb25Db21wb25lbnQsXHJcbiAgICBCcHNGaWx0ZXJPcHRpb25QaXBlLFxyXG4gICAgQnBzRmlsdGVyR3JvdXBPcHRpb25QaXBlLFxyXG4gICAgQnBzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsXHJcbiAgICBCcHNPcHRpb25MaUNvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdENvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBCcHNTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmUsXHJcbiAgICBCcHNGb3JtRGlyZWN0aXZlLFxyXG4gICAgQnBzRm9ybUV4cGxhaW5Db21wb25lbnQsXHJcbiAgICBCcHNGb3JtQ29udHJvbENvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1FeHRyYUNvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybUxhYmVsQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybVNwbGl0Q29tcG9uZW50LFxyXG4gICAgQnBzRm9ybVRleHRDb21wb25lbnQsXHJcbiAgICBCcHNCdXR0b25Db21wb25lbnQsXHJcbiAgICBCcHNCdXR0b25Hcm91cENvbXBvbmVudCxcclxuICAgIEJwc1N3aXRjaENvbXBvbmVudCxcclxuICAgIEJwc0NoZWNrYm94R3JvdXBDb21wb25lbnQsXHJcbiAgICBCcHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBCcHNDaGVja2JveENvbXBvbmVudCxcclxuICAgIEJwc1JhZGlvQ29tcG9uZW50LFxyXG4gICAgQnBzUmFkaW9Hcm91cENvbXBvbmVudCxcclxuICAgIEJwc1JhZGlvQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgQnBzQ29sbGFwc2VDb21wb25lbnQsXHJcbiAgICBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgQnBzVG9vbHRpcERpcmVjdGl2ZSxcclxuICAgIEJwc1Rvb2xUaXBDb21wb25lbnQsXHJcbiAgICBCcHNUYWJsZUV4cGFuZGFibGVQYW5lbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IE5aX0kxOE4sIHVzZVZhbHVlOiBlbl9VUyB9XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEJwc1BvcG92ZXJDb21wb25lbnQsXHJcbiAgICBCcHNUb29sVGlwQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzQ29tcG9uZW50c0xpYk1vZHVsZSB7IH1cclxuIl19