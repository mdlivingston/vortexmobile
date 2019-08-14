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
        private dataSevice: DataService) { }


    ngOnInit() {
    }

    goToPDF(type) {
        switch (type) {
            case 'flood': {
                this.dataSevice.pdfTitle = 'Flood Safety';
                this.dataSevice.pdfURL = 'http://lifestyleapi.caps.ua.edu/floodsafety';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
            case 'heat': {
                this.dataSevice.pdfTitle = 'Heat Safety';
                this.dataSevice.pdfURL = 'http://lifestyleapi.caps.ua.edu/heatsafety';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
            case 'thunder': {
                this.dataSevice.pdfTitle = 'Thunderstorm Safety';
                this.dataSevice.pdfURL = 'http://lifestyleapi.caps.ua.edu/thunderstormsafety';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
            case 'tornado': {
                this.dataSevice.pdfTitle = 'Tornado Safety';
                this.dataSevice.pdfURL = 'http://lifestyleapi.caps.ua.edu/tornadosafety';
                this.routerExtensions.navigate(['/pdf'], { animated: true })
                break;
            }
        }
    }

}
