import { PrepareComponent } from './prepare.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PrepareRoutingModule } from "./prepare-routing.module";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PrepareRoutingModule,
    ],
    declarations: [
        PrepareComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PrepareModule { }
