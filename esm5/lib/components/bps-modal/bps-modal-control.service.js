import { __decorate, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalControlServiceModule } from 'ng-zorro-antd';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
var BpsModalControlService = /** @class */ (function () {
    function BpsModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(BpsModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: function () {
            return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: function () {
            return this.parentService ? this.parentService.openModals : this.rootOpenModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsModalControlService.prototype, "registeredMetaMap", {
        get: function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    BpsModalControlService.prototype.registerModal = function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            var afterOpenSubscription = modalRef.afterOpen.subscribe(function () { return _this.openModals.push(modalRef); });
            var afterCloseSubscription = modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    BpsModalControlService.prototype.deregisterModal = function (modalRef) {
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    BpsModalControlService.prototype.hasRegistered = function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    BpsModalControlService.prototype.closeAll = function () {
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    BpsModalControlService.prototype.removeOpenModal = function (modalRef) {
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    BpsModalControlService.ctorParameters = function () { return [
        { type: BpsModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    BpsModalControlService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BpsModalControlService_Factory() { return new BpsModalControlService(i0.ɵɵinject(BpsModalControlService, 12)); }, token: BpsModalControlService, providedIn: i1.NzModalControlServiceModule });
    BpsModalControlService = __decorate([
        Injectable({
            providedIn: NzModalControlServiceModule
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], BpsModalControlService);
    return BpsModalControlService;
}());
export { BpsModalControlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWNvbnRyb2wuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy1tb2RhbC9icHMtbW9kYWwtY29udHJvbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFXNUQ7SUFvQkUsZ0NBQTRDLGFBQXFDO1FBQXJDLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQVR6RSxtQkFBYyxHQUF5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxzQkFBaUIsR0FBeUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFGLDBCQUFxQixHQUE0QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQWxCckYsc0JBQUksaURBQWE7UUFEakIsZ0VBQWdFO2FBQ2hFO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFrQixDQUFDO1FBQ3pGLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksOENBQVU7UUFEZCxtRUFBbUU7YUFDbkU7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENB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LEFBcEVELElBb0VDO1NBcEVZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCcHNNb2RhbFJlZiB9IGZyb20gJy4vYnBzLW1vZGFsLXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW50ZXJmYWNlIFJlZ2lzdGVyZWRNZXRhIHtcbiAgbW9kYWxSZWY6IEJwc01vZGFsUmVmO1xuICBhZnRlck9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IE56TW9kYWxDb250cm9sU2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBCcHNNb2RhbENvbnRyb2xTZXJ2aWNlIHtcbiAgLy8gVHJhY2sgc2luZ2xldG9uIGFmdGVyQWxsQ2xvc2UgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBTdWJqZWN0PHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLmFmdGVyQWxsQ2xvc2UgOiB0aGlzLnJvb3RBZnRlckFsbENsb3NlITtcbiAgfVxuXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBvcGVuTW9kYWxzIGFycmF5IHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogQnBzTW9kYWxSZWZbXSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5vcGVuTW9kYWxzIDogdGhpcy5yb290T3Blbk1vZGFscyE7XG4gIH1cblxuICBwcml2YXRlIHJvb3RPcGVuTW9kYWxzOiBCcHNNb2RhbFJlZltdIHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBbXTtcbiAgcHJpdmF0ZSByb290QWZ0ZXJBbGxDbG9zZTogU3ViamVjdDx2b2lkPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByb290UmVnaXN0ZXJlZE1ldGFNYXA6IE1hcDxCcHNNb2RhbFJlZiwgUmVnaXN0ZXJlZE1ldGE+IHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSBnZXQgcmVnaXN0ZXJlZE1ldGFNYXAoKTogTWFwPEJwc01vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4ge1xuICAgIC8vIFJlZ2lzdGVyZWQgbW9kYWwgZm9yIGxhdGVyIHVzYWdlXG4gICAgcmV0dXJuIHRoaXMucGFyZW50U2VydmljZSA/IHRoaXMucGFyZW50U2VydmljZS5yZWdpc3RlcmVkTWV0YU1hcCA6IHRoaXMucm9vdFJlZ2lzdGVyZWRNZXRhTWFwITtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaXZhdGUgcGFyZW50U2VydmljZTogQnBzTW9kYWxDb250cm9sU2VydmljZSkge31cblxuICAvLyBSZWdpc3RlciBhIG1vZGFsIHRvIGxpc3RlbiBpdHMgb3Blbi9jbG9zZVxuICByZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBCcHNNb2RhbFJlZik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkKG1vZGFsUmVmKSkge1xuICAgICAgY29uc3QgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJPcGVuLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9wZW5Nb2RhbHMucHVzaChtb2RhbFJlZikpO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiA9IG1vZGFsUmVmLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmKSk7XG5cbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuc2V0KG1vZGFsUmVmLCB7IG1vZGFsUmVmLCBhZnRlck9wZW5TdWJzY3JpcHRpb24sIGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVyZWdpc3RlciBtb2RhbHNcbiAgZGVyZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBCcHNNb2RhbFJlZik6IHZvaWQge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRNZXRhID0gdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5nZXQobW9kYWxSZWYpO1xuICAgIGlmIChyZWdpc3RlcmVkTWV0YSkge1xuICAgICAgLy8gUmVtb3ZlIHRoaXMgbW9kYWwgaWYgaXQgaXMgc3RpbGwgaW4gdGhlIG9wZW5lZCBtb2RhbCBsaXN0IChOT1RFOiBpdCBtYXkgdHJpZ2dlciBcImFmdGVyQWxsQ2xvc2VcIilcbiAgICAgIHRoaXMucmVtb3ZlT3Blbk1vZGFsKHJlZ2lzdGVyZWRNZXRhLm1vZGFsUmVmKTtcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyT3BlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5kZWxldGUobW9kYWxSZWYpO1xuICAgIH1cbiAgfVxuXG4gIGhhc1JlZ2lzdGVyZWQobW9kYWxSZWY6IEJwc01vZGFsUmVmKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuaGFzKG1vZGFsUmVmKTtcbiAgfVxuXG4gIC8vIENsb3NlIGFsbCByZWdpc3RlcmVkIG9wZW5lZCBtb2RhbHNcbiAgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgbGV0IGkgPSB0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzW2ldLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWwobW9kYWxSZWY6IEJwc01vZGFsUmVmKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm9wZW5Nb2RhbHMuaW5kZXhPZihtb2RhbFJlZik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFmdGVyQWxsQ2xvc2UubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19