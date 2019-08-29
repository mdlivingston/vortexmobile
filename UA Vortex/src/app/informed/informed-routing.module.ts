import { WebLinksComponent } from './web-links/web-links.component';

import { InformedComponent } from './informed.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { MobileAppsComponent } from './mobile-apps/mobile-apps.component';

const routes: Routes = [
    { path: "", component: InformedComponent },
    { path: "mobile-apps", component: MobileAppsComponent },
    { path: "links", component: WebLinksComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InformedRoutingModule { }
