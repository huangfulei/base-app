import {LoginComponent} from '@src/app/login/login/login.component';
import {SharedModule} from '@src/app/shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

export const SHARED_MODULES: any[] = [
    SharedModule,
    ReactiveFormsModule,
];

export const COMPONENT_DECLARATIONS: any[] = [
    LoginComponent
];
