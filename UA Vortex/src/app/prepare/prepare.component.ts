import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-prepare',
    templateUrl: './prepare.component.html',
    styleUrls: ['./prepare.component.css']
})
export class PrepareComponent implements OnInit {

    constructor(
        public routerExtensions: RouterExtensions,
        private dataService: DataService,
        private page: Page) { }


    ngOnInit() {
        const safeAreaInsets = this.dataService.getSafeAreaInsets();
        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }
    }

    goToPDF(type) {
        switch (type) {
            case 'flood': {
                this.dataService.pdfTitle = 'Flood Safety';
                this.dataService.pdfURL = '~/assets/FloodSafety.pdf';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
            case 'heat': {
                this.dataService.pdfTitle = 'Heat Safety';
                this.dataService.pdfURL = '~/assets/HeatSafety.pdf';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
            case 'thunder': {
                this.dataService.pdfTitle = 'Thunderstorm Safety';
                this.dataService.pdfURL = '~/assets/ThunderstormSafety.pdf';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
            case 'tornado': {
                this.dataService.pdfTitle = 'Tornado Safety';
                this.dataService.pdfURL = '~/assets/TornadoSafety.pdf';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
        }
    }

}
