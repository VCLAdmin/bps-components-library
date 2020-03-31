import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BpsComponentsLibComponent } from './bps-components-lib.component';
import { NgZorroAntdModule, NzNoAnimationModule, NzOverlayModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { FormsModule } from '@angular/forms';
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
const ɵ0 = en_US;
let BpsComponentsLibModule = class BpsComponentsLibModule {
};
BpsComponentsLibModule = __decorate([
    NgModule({
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
            BpsFormTextComponent
        ],
        imports: [
            NgZorroAntdModule,
            CommonModule,
            NzAddOnModule,
            NzIconModule,
            OverlayModule,
            NzNoAnimationModule,
            NzOverlayModule,
            NzEmptyModule,
            FormsModule
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
            BpsFormTextComponent
        ],
        providers: [
            { provide: NZ_I18N, useValue: ɵ0 }
        ],
    })
], BpsComponentsLibModule);
export { BpsComponentsLibModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbXBvbmVudHMtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9icHMtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxlQUFlO0FBQ2YsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFFeEYsZ0JBQWdCO0FBQ2hCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBRXpHLGNBQWM7QUFDZCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztXQThEakQsS0FBSztBQUd2QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtDQUFJLENBQUE7QUFBMUIsc0JBQXNCO0lBL0RsQyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsMkJBQTJCO1lBQzNCLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLDRCQUE0QjtZQUM1Qiw4QkFBOEI7WUFDOUIsZ0JBQWdCO1lBQ2hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLG9CQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixhQUFhO1lBQ2IsV0FBVztTQUNaO1FBQ0QsT0FBTyxFQUFFO1lBQ1AseUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QiwyQkFBMkI7WUFDM0IsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsNEJBQTRCO1lBQzVCLDhCQUE4QjtZQUM5QixnQkFBZ0I7WUFDaEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsb0JBQW9CO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsSUFBTyxFQUFFO1NBQ3RDO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQUFJO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJwc0NvbXBvbmVudHNMaWJDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1jb21wb25lbnRzLWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZSwgTnpPdmVybGF5TW9kdWxlLCBOWl9JMThOLCBlbl9VUyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56RW1wdHlNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2VtcHR5JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLyogQlBTIElucHV0ICovXHJcbmltcG9ydCB7QnBzSW5wdXREaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9icHMtaW5wdXQvYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QnBzQXV0b3NpemVEaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9icHMtaW5wdXQvYnBzLWF1dG9zaXplLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QnBzSW5wdXRHcm91cENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1pbnB1dC9icHMtaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcclxuXHJcbi8qIEJQUyBTZWxlY3QgKi9cclxuaW1wb3J0IHtCcHNPcHRpb25Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNGaWx0ZXJHcm91cE9wdGlvblBpcGV9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24ucGlwZSc7XHJcbmltcG9ydCB7QnBzRmlsdGVyT3B0aW9uUGlwZX0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1zZWxlY3QvYnBzLW9wdGlvbi5waXBlJztcclxuaW1wb3J0IHtCcHNPcHRpb25Db250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzT3B0aW9uR3JvdXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNPcHRpb25MaUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1zZWxlY3QvYnBzLW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1zZWxlY3QvYnBzLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9icHMtc2VsZWN0L2Jwcy1zZWxlY3QtdW5zZWxlY3RhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiBCUFMgRm9ybSAqL1xyXG5pbXBvcnQge0Jwc0Zvcm1EaXJlY3RpdmV9IGZyb20gJy4vY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Jwc0Zvcm1Db250cm9sQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc0Zvcm1FeHBsYWluQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0tZXhwbGFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc0Zvcm1FeHRyYUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWV4dHJhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzRm9ybUl0ZW1Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnBzRm9ybUxhYmVsQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0tbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcHNGb3JtU3BsaXRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1zcGxpdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jwc0Zvcm1UZXh0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYnBzLWZvcm0vYnBzLWZvcm0tdGV4dC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJwc0NvbXBvbmVudHNMaWJDb21wb25lbnQsXHJcbiAgICBCcHNJbnB1dEdyb3VwQ29tcG9uZW50LFxyXG4gICAgQnBzSW5wdXREaXJlY3RpdmUsXHJcbiAgICBCcHNBdXRvc2l6ZURpcmVjdGl2ZSxcclxuICAgIEJwc09wdGlvbkNvbXBvbmVudCxcclxuICAgIEJwc0ZpbHRlck9wdGlvblBpcGUsXHJcbiAgICBCcHNGaWx0ZXJHcm91cE9wdGlvblBpcGUsXHJcbiAgICBCcHNPcHRpb25Db250YWluZXJDb21wb25lbnQsXHJcbiAgICBCcHNPcHRpb25Hcm91cENvbXBvbmVudCxcclxuICAgIEJwc09wdGlvbkxpQ29tcG9uZW50LFxyXG4gICAgQnBzU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdFVuc2VsZWN0YWJsZURpcmVjdGl2ZSxcclxuICAgIEJwc0Zvcm1EaXJlY3RpdmUsXHJcbiAgICBCcHNGb3JtRXhwbGFpbkNvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybUV4dHJhQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBCcHNGb3JtTGFiZWxDb21wb25lbnQsXHJcbiAgICBCcHNGb3JtU3BsaXRDb21wb25lbnQsXHJcbiAgICBCcHNGb3JtVGV4dENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOekFkZE9uTW9kdWxlLFxyXG4gICAgTnpJY29uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuICAgIE56Tm9BbmltYXRpb25Nb2R1bGUsXHJcbiAgICBOek92ZXJsYXlNb2R1bGUsXHJcbiAgICBOekVtcHR5TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJwc0NvbXBvbmVudHNMaWJDb21wb25lbnQsXHJcbiAgICBCcHNDb21wb25lbnRzTGliQ29tcG9uZW50LFxyXG4gICAgQnBzSW5wdXRHcm91cENvbXBvbmVudCxcclxuICAgIEJwc0lucHV0RGlyZWN0aXZlLFxyXG4gICAgQnBzQXV0b3NpemVEaXJlY3RpdmUsXHJcbiAgICBCcHNPcHRpb25Db21wb25lbnQsXHJcbiAgICBCcHNGaWx0ZXJPcHRpb25QaXBlLFxyXG4gICAgQnBzRmlsdGVyR3JvdXBPcHRpb25QaXBlLFxyXG4gICAgQnBzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsXHJcbiAgICBCcHNPcHRpb25MaUNvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdENvbXBvbmVudCxcclxuICAgIEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBCcHNTZWxlY3RVbnNlbGVjdGFibGVEaXJlY3RpdmUsXHJcbiAgICBCcHNGb3JtRGlyZWN0aXZlLFxyXG4gICAgQnBzRm9ybUV4cGxhaW5Db21wb25lbnQsXHJcbiAgICBCcHNGb3JtQ29udHJvbENvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1FeHRyYUNvbXBvbmVudCxcclxuICAgIEJwc0Zvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybUxhYmVsQ29tcG9uZW50LFxyXG4gICAgQnBzRm9ybVNwbGl0Q29tcG9uZW50LFxyXG4gICAgQnBzRm9ybVRleHRDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBOWl9JMThOLCB1c2VWYWx1ZTogZW5fVVMgfVxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNDb21wb25lbnRzTGliTW9kdWxlIHsgfVxyXG4iXX0=