import { WebView } from 'tns-core-modules/ui/web-view/web-view';
import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page, EventData, isAndroid } from "tns-core-modules/ui/page/page";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import * as appSettings from "tns-core-modules/application-settings";
import * as utils from "tns-core-modules/utils/utils";
import { Switch } from 'tns-core-modules/ui/switch/switch';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    settingsFlag = false;
    infoFlag = false;
    android = false
    @ViewChild("settings", { static: false }) settings: ElementRef;
    @ViewChild("info", { static: false }) info: ElementRef;
    constructor(private page: Page,
        public dataService: DataService) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = false;
        this.android = isAndroid;
    }

    ngOnInit(): void {

        const safeAreaInsets = this.dataService.getSafeAreaInsets();
        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }

    }
    reportWeather() {
        utils.openUrl("https://www.weather.gov/bmx/submit_storm_report");
    }
    goToSettings() {
        if (this.infoFlag) {
            this.goToInfo();
        }
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
                translate: { x: 0, y: -1000 },
                //scale: { x: 2, y: 2 },
                //rotate: 100,
                duration: 1000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        }
        this.settingsFlag ? this.settingsFlag = false : this.settingsFlag = true;
    }
    goToInfo() {
        if (this.settingsFlag) {
            this.goToSettings();
        }
        if (!this.infoFlag) {
            this.info.nativeElement.animate({
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
            this.info.nativeElement.animate({
                //opacity: 0,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: -1000 },
                //scale: { x: 2, y: 2 },
                //rotate: 100,
                duration: 1000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        }

        this.infoFlag ? this.infoFlag = false : this.infoFlag = true;
    }
    takenSurvey(args: EventData) {
        let mySwitch = args.object as Switch;
        let isChecked = mySwitch.checked; // boolean
        this.dataService.tookSurvey = isChecked;
        appSettings.setBoolean('survey', isChecked);
    }
}
