import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppComponent} from '@src/app/app.component';
import {COMPONENT_DECLARATIONS, PROVIDERS, SHARED_MODULES} from '@src/app/app.common';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        ...SHARED_MODULES
    ],
    providers: [
        ...PROVIDERS
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
