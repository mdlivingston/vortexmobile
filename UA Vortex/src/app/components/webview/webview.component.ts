import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-webview',
    templateUrl: './webview.component.html',
    styleUrls: ['./webview.component.css']
})
export class WebviewComponent implements OnInit {
    @ViewChild("myWebView", { static: false }) webViewRef: ElementRef;
    @Input() url: string = 'https://universityofalabama.az1.qualtrics.com/jfe/form/SV_eCJWZMO9MTB6AHr';

    constructor() { }

    ngOnInit() {

    }
}
