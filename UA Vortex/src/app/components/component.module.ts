import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { WebviewComponent } from "./webview/webview.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
    ],
    exports: [
        WebviewComponent
    ],
    declarations: [
        WebviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ComponentModule { }
