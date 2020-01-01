import {NgModule} from '@angular/core';
import {AppComponent} from '@src/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {COMPONENT_DECLARATIONS, PROVIDERS, SHARED_MODULES} from '@src/app/app.common';
import {HomeModule} from '@src/app/home';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        ...COMPONENT_DECLARATIONS,
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        HomeModule,
        ...SHARED_MODULES,
    ],
    providers: [
        ...PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
