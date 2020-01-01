import {Routes} from '@angular/router';
import {loginRoutes} from '@src/app/login/login.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        // ...authGuards
    },
    {
        path: 'login',
        children: loginRoutes,
        /*        resolve: {
                    user.ts: UserResolver,
                },*/
    },
];
