import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
let BpsTextEditorComponent = class BpsTextEditorComponent {
    constructor() {
        this.showEditor = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.height = '250px';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify | bullist numlist | forecolor';
    }
    ngOnInit() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor'],
                    toolbar: this.toolbarmobile
                },
                menubar: false,
                image_title: true,
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                setup: (editor) => {
                    editor.on('init', (obj) => {
                        this.oninit.emit(obj);
                    });
                    editor.on('blur', (obj) => {
                        this.onblur.emit(obj);
                    });
                    editor.on('keyup', (obj) => {
                        this.onkeyup.emit(obj);
                    });
                    editor.on('Change', (obj) => {
                        this.onchange.emit(obj);
                    });
                },
                plugins: ['image table textcolor'],
                toolbar: this.toolbar
            };
        }
        setTimeout(() => {
            this.showEditor = true;
        }, 100);
    }
};
__decorate([
    Output()
], BpsTextEditorComponent.prototype, "oninit", void 0);
__decorate([
    Output()
], BpsTextEditorComponent.prototype, "onchange", void 0);
__decorate([
    Output()
], BpsTextEditorComponent.prototype, "onblur", void 0);
__decorate([
    Output()
], BpsTextEditorComponent.prototype, "onkeyup", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "height", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "statusbar", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "resize", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "toolbarmobile", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "toolbar", void 0);
__decorate([
    Input()
], BpsTextEditorComponent.prototype, "tinyMceSettings", void 0);
BpsTextEditorComponent = __decorate([
    Component({
        exportAs: 'bpsTextEditor',
        selector: 'bps-text-editor',
        template: "<editor *ngIf=\"showEditor\" [init]=\"tinyMceSettings\" class=\"bps-editor\" [disabled]=\"disabled\"></editor>\n",
        encapsulation: ViewEncapsulation.None,
        styles: [""]
    })
], BpsTextEditorComponent);
export { BpsTextEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jwcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Jwcy10ZXh0LWVkaXRvci9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2xHLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBZ0JqQztRQWRBLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEQsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsNENBQTRDO1FBQ25DLGtCQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUosWUFBTyxHQUFHLG9IQUFvSCxDQUFDO0lBR3hILENBQUM7SUFFakIsUUFBUTtRQUVOLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7aUJBQzVCO2dCQUNELE9BQU8sRUFBRSxLQUFLO2dCQUNkLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixpQkFBaUIsRUFBRSxPQUFPO2dCQUMxQixpQkFBaUIsRUFBRSxHQUFHO2dCQUN0QixLQUFLLEVBQUUsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDckIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QixDQUFDO1NBQ0g7UUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztDQUVGLENBQUE7QUF4RFc7SUFBVCxNQUFNLEVBQUU7c0RBQXFEO0FBQ3BEO0lBQVQsTUFBTSxFQUFFO3dEQUF1RDtBQUN0RDtJQUFULE1BQU0sRUFBRTtzREFBcUQ7QUFDcEQ7SUFBVCxNQUFNLEVBQUU7dURBQXNEO0FBQ3REO0lBQVIsS0FBSyxFQUFFO3dEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTtzREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7eURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO3NEQUFnQjtBQUVmO0lBQVIsS0FBSyxFQUFFOzZEQUErSjtBQUM5SjtJQUFSLEtBQUssRUFBRTt1REFBZ0k7QUFDL0g7SUFBUixLQUFLLEVBQUU7K0RBQXVCO0FBZHBCLHNCQUFzQjtJQVBsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLDRIQUErQztRQUUvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLHNCQUFzQixDQTJEbEM7U0EzRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnYnBzVGV4dEVkaXRvcicsXG4gIHNlbGVjdG9yOiAnYnBzLXRleHQtZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jwcy10ZXh0LWVkaXRvci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnBzVGV4dEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ua2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGhlaWdodCA9ICcyNTBweCc7XHJcbiAgQElucHV0KCkgc3RhdHVzYmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVzaXplID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICBASW5wdXQoKSB0b29sYmFybW9iaWxlID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvciddO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXIgPSAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHN0cmlrZXRocm91Z2ggIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IHwgZm9yZWNvbG9yJztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRpbnlNY2VTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzID0ge1xyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXplOiB0aGlzLnJlc2l6ZSxcclxuICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNiYXIsXHJcbiAgICAgICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICAgICAgaW1hZ2VzX3VwbG9hZF91cmw6ICcjJyxcclxuICAgICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25pbml0LmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uYmx1ci5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25rZXl1cC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignQ2hhbmdlJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3InXSxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxuXG59XG4iXX0=