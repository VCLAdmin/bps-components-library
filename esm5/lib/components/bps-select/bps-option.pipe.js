import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
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
        Pipe({ name: 'bpsFilterOption' })
    ], BpsFilterOptionPipe);
    return BpsFilterOptionPipe;
}());
export { BpsFilterOptionPipe };
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
        Pipe({ name: 'bpsFilterGroupOption' })
    ], BpsFilterGroupOptionPipe);
    return BpsFilterGroupOptionPipe;
}());
export { BpsFilterGroupOptionPipe };
export function defaultFilterOption(searchValue, option) {
    if (option && option.bpsLabel) {
        return option.bpsLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW9wdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9icHMtb3B0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBTy9EO0lBQUE7SUFhQSxDQUFDO0lBWkMsdUNBQVMsR0FBVCxVQUNFLE9BQTZELEVBQzdELFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sT0FBK0IsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBUSxPQUFnQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztTQUNwRjtJQUNILENBQUM7SUFaVSxtQkFBbUI7UUFEL0IsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUM7T0FDckIsbUJBQW1CLENBYS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxtQkFBbUI7QUFnQmhDO0lBQUE7SUFlQSxDQUFDO0lBZEMsNENBQVMsR0FBVCxVQUNFLE1BQWlDLEVBQ2pDLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQVEsTUFBb0MsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUNuRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFkVSx3QkFBd0I7UUFEcEMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUM7T0FDMUIsd0JBQXdCLENBZXBDO0lBQUQsK0JBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSx3QkFBd0I7QUFpQnJDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQTBCO0lBQ2pGLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM5RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJwc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcHNPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2Jwcy1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IEJwc09wdGlvbkNvbXBvbmVudCkgPT4gYm9vbGVhbjtcblxuQFBpcGUoeyBuYW1lOiAnYnBzRmlsdGVyT3B0aW9uJyB9KVxuZXhwb3J0IGNsYXNzIEJwc0ZpbHRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIG9wdGlvbnM6IEJwc09wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PEJwc09wdGlvbkNvbXBvbmVudD4sXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXG4gICk6IEJwc09wdGlvbkNvbXBvbmVudFtdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMgYXMgQnBzT3B0aW9uQ29tcG9uZW50W107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob3B0aW9ucyBhcyBCcHNPcHRpb25Db21wb25lbnRbXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XG4gICAgfVxuICB9XG59XG5cbkBQaXBlKHsgbmFtZTogJ2Jwc0ZpbHRlckdyb3VwT3B0aW9uJyB9KVxuZXhwb3J0IGNsYXNzIEJwc0ZpbHRlckdyb3VwT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgZ3JvdXBzOiBCcHNPcHRpb25Hcm91cENvbXBvbmVudFtdLFxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxuICAgIHNlcnZlclNlYXJjaDogYm9vbGVhblxuICApOiBCcHNPcHRpb25Hcm91cENvbXBvbmVudFtdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChncm91cHMgYXMgQnBzT3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xuICAgICAgICByZXR1cm4gZy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5zb21lKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWU6IHN0cmluZywgb3B0aW9uOiBCcHNPcHRpb25Db21wb25lbnQpOiBib29sZWFuIHtcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24uYnBzTGFiZWwpIHtcbiAgICByZXR1cm4gb3B0aW9uLmJwc0xhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19