import {NgModule} from '@angular/core';
import {COMPONENT_DECLARATIONS, SHARED_MODULES} from './home.common';
import {MaterialModule} from '@src/app/shared/material.module';

@NgModule({
    imports: [
        ...SHARED_MODULES,
        MaterialModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
})
export class HomeModule {
    // constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
    //   if (parentModule) {
    //       throw new Error('HomeModule already loaded; Import in root module only.');
    //   }
    // }
}
