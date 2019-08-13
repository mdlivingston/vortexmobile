import { ComponentModule } from './../components/component.module';
import { SevereComponent } from './severe.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";



import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SevereRoutingModule } from "./severe-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SevereRoutingModule,
        ComponentModule
    ],
    declarations: [
        SevereComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SevereModule { }
