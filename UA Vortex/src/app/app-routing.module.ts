import { PdfviewComponent } from './components/pdfview/pdfview.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { isAndroid } from 'tns-core-modules/ui/page/page';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "spinner", component: SpinnerComponent },
    { path: "pdf", component: PdfviewComponent },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "survey", loadChildren: "~/app/survey/survey.module#SurveyModule" },
    { path: "informed", loadChildren: "~/app/informed/informed.module#InformedModule" },
    { path: "prepare", loadChildren: "~/app/prepare/prepare.module#PrepareModule" },
    { path: "severe", loadChildren: "~/app/severe/severe.module#SevereModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
