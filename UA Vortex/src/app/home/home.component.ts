import { WebView } from 'tns-core-modules/ui/web-view/web-view';
import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import * as application from "tns-core-modules/application";
import { AnimationCurve } from "tns-core-modules/ui/enums";
export function getSafeAreaInsets(): undefined | {
    top: number,
    left: number,
    bottom: number,
    right: number
} {
    if (application.ios && application.ios.window.safeAreaInsets) {
        return application.ios.window.safeAreaInsets;
    } else {
        return undefined;
    }
}


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    settingsFlag = false;
    @ViewChild("settings", { static: false }) settings: ElementRef;
    constructor(private page: Page,
        private dataService: DataService) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = false;

    }

    ngOnInit(): void {

        const safeAreaInsets = getSafeAreaInsets();
        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }

    }
    goToSettings() {
        if (!this.settingsFlag) {
            this.settings.nativeElement.animate({
                //opacity: 0,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: 0 },
                //scale: { x: 2, y: 2 },
                //rotate: 100,
                duration: 500,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        } else {
            this.settings.nativeElement.animate({
                //opacity: 0,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: -5000 },
                //scale: { x: 2, y: 2 },
                //rotate: 100,
                duration: 2000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        }
        this.settingsFlag ? this.settingsFlag = false : this.settingsFlag = true;
    }
}
