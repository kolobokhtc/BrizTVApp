import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MomentModule} from "angular2-moment";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";


@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        MomentModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
