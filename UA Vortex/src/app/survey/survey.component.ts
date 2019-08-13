import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { TextField } from "tns-core-modules/ui/text-field";
import { Label } from "tns-core-modules/ui/label";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'ns-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

    public webViewSrc: string = "https://universityofalabama.az1.qualtrics.com/jfe/form/SV_eCJWZMO9MTB6AHr";
    public enabled: boolean = false;
    @ViewChild("myWebView", { static: false }) webViewRef: ElementRef;

    constructor(
        private page: Page,
        public routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = false;
    }
    ngOnInit() {

    }


}
