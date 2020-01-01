import {RouterModule} from '@angular/router';
import {LoginModule} from '@src/app/login/login.module';
import {AppComponent} from '@src/app/app.component';
import {routes} from '@src/app/app.routes';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '@src/app/shared/interceptor/tokenInterceptor';
import {SharedModule} from '@src/app/shared/shared.module';


export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule,
    RouterModule.forRoot(routes),
    LoginModule,
];

export const COMPONENT_DECLARATIONS: any[] = [
    AppComponent,
];

export const PROVIDERS: any[] = [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
    // { provide: API_KEY_TOKEN, useValue: '3b3fe2619dfd3c4e94c2d7efd24592e1' },
    // PetFinderService,
    // ...guards,
];
