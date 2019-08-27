import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from './../../services/data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { NavigationTransition } from 'tns-core-modules/ui/frame/frame';

@Component({
    selector: 'ns-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
    @ViewChild('logo', { static: true }) logo;
    @ViewChild('logoSmall', { static: true }) logoSmall;
    pageTransitionBottom: NavigationTransition = { name: 'slideBottom', duration: 500 }
    constructor(private router: RouterExtensions, public dataService: DataService, private page: Page) {

    }

    ngOnInit() {
        setTimeout(() => {
            this.dataService.spinnerInit ? this.animateStart(this.logo.nativeElement) : this.animateStart(this.logoSmall.nativeElement);
        }, 0);

    }
    animateStart(image: Image) {
        image.animate({
            //opacity: 0,
            //backgroundColor: new Color("Blue"),
            //translate: { x: 0, y: 0 },
            //scale: { x: 2, y: 2 },
            rotate: 360,
            duration: this.dataService.spinnerInit ? 500 : 10000,
            //delay: 20,
            //iterations: 5,
            //curve: enums.AnimationCurve.easeIn
        }).then(() => {
            if (this.dataService.spinnerInit) {
                this.dataService.spinnerInit = false;
                this.router.navigate(["/home"], { clearHistory: true, animated: true, transition: this.pageTransitionBottom });
            }
        }).catch((e) => {
            console.log(e.message);
        });
    }
    animateStop(image: Image) {
        image.animate({
            opacity: 1,
            //backgroundColor: new Color("Blue"),
            //translate: { x: 0, y: 0 },
            //scale: { x: 2, y: 2 },
            //rotate: 180,
            duration: 500,
            //delay: 20,
            //iterations: 5,
            //curve: enums.AnimationCurve.easeIn
        }).then(() => {
            console.log("Animation finished.");
        }).catch((e) => {
            console.log(e.message);
        });
    }
}
