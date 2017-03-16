/**
 * Created by Vladimir Pavlov (kolobokhtc@gmail.com) on 27.10.2016.
 */

import {NgModule, Optional, SkipSelf} from "@angular/core";
import {HttpModule} from "@angular/http";

@NgModule({
    imports:[
        HttpModule
    ],
    providers:[
    ]
})
export class CoreModule{
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}