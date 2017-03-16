import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import '../../public/css/styles.css';


@Component({
    selector: 'briz-tv-app',
    inputs: ['code'],
    template: `<h1>Hello im here</h1>
`
    // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    constructor() {
    };

    ngOnInit(): boolean {

        return false;
    }

    ngOnDestroy(): void {

    }

}
