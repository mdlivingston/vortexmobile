
import { WebLinksComponent } from './web-links/web-links.component';
import { InformedComponent } from './informed.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InformedRoutingModule } from "./informed-routing.module";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InformedRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        InformedComponent,
        WebLinksComponent,
        MobileAppsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InformedModule { }
