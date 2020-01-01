import {SharedModule} from '@src/app/shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from '@src/app/home/home.routes';
import {HomeComponent} from '@src/app/home/home/home.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>HomeRoutes),
];

export const COMPONENT_DECLARATIONS: any[] = [
    HomeComponent,
];
