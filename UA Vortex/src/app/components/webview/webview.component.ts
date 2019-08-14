import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { WebView, LoadEventData } from 'tns-core-modules/ui/web-view/web-view';

@Component({
    selector: 'ns-webview',
    templateUrl: './webview.component.html',
    styleUrls: ['./webview.component.css']
})
export class WebviewComponent implements OnInit {
    @ViewChild("myWebView", { static: false }) webViewRef: ElementRef;
    @Input() url: string = 'https://universityofalabama.az1.qualtrics.com/jfe/form/SV_eCJWZMO9MTB6AHr';

    loading = false;
    constructor() { }

    ngOnInit() {

    }
    public onLoadStarted(args: LoadEventData) {

        this.loading = true;
        let message;
        if (!args.error) {
            message = "WebView started loading of " + args.url;
        } else {
            message = "Error loading " + args.url + ": " + args.error;
        }
        console.log(message);
    }
    public onLoadFinished(args: LoadEventData) {
        this.loading = false;
        let message;
        if (!args.error) {
            message = "WebView finished loading of " + args.url;
        } else {
            message = "Error loading " + args.url + ": " + args.error;
        }
        console.log(message);
    }
}
