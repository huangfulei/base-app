import {COMPONENT_DECLARATIONS, SHARED_MODULES} from '@src/app/home/home.common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

@NgModule({
    imports: [
        ...SHARED_MODULES,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
    // constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
    //   if (parentModule) {
    //       throw new Error('HomeModule already loaded; Import in root module only.');
    //   }
    // }
}
