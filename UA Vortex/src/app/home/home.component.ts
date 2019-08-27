import { WebView } from 'tns-core-modules/ui/web-view/web-view';
import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import * as appSettings from "tns-core-modules/application-settings";


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
        public dataService: DataService) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = false;

    }

    ngOnInit(): void {

        const safeAreaInsets = this.dataService.getSafeAreaInsets();
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
                translate: { x: 0, y: -3000 },
                //scale: { x: 2, y: 2 },
                //rotate: 100,
                duration: 500,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        }
        this.settingsFlag ? this.settingsFlag = false : this.settingsFlag = true;
    }
    takenSurvey(event) {
        this.dataService.tookSurvey ? this.dataService.tookSurvey = false : this.dataService.tookSurvey = true;
        appSettings.setBoolean('survey', this.dataService.tookSurvey);
    }
}
