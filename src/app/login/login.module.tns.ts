import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {COMPONENT_DECLARATIONS, SHARED_MODULES} from '@src/app/login/login.common';

@NgModule({
    imports: [
        ...SHARED_MODULES,
    ],
    exports: [
        ...COMPONENT_DECLARATIONS,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule {
}
