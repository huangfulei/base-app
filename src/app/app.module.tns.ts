import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';

import {AppComponent} from '@src/app/app.component';
import {HomeComponent} from '@src/app/home/home.component';
import {AppRoutingModule} from '@src/app/app-routing.module';
import {KinveyModule, UserService} from 'kinvey-nativescript-sdk/lib/angular';
// Uncomment and add to NgModule imports if you need to use two-way binding
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {appConfig} from './app.config';
import {LoginComponent} from '@src/app/core/login/login.common';
import {AuthGuard} from '@src/app/core/auth-guard.service';
import {BackendService} from '@src/app/core/backend.service';
import {UtilityService} from '@src/app/core/utility.service';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,

        /* ***********************************************************
        * The {N} Kinvey plugin initialization is explained in the plugin readme here:
        * http://devcenter.kinvey.com/nativescript/guides/getting-started#ConfigureYourApp
        * In this template, Kinvey is set up with a custom existing project, so that
        * You can build and run this template without creating your own Kinvey project.
        *************************************************************/
        KinveyModule.init(appConfig)
    ],
    providers: [
        UserService,
        BackendService,
        UtilityService,
        [AuthGuard]
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
