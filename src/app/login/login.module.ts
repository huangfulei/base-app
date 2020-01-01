import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENT_DECLARATIONS, SHARED_MODULES} from '@src/app/login/login.common';
import {MaterialModule} from '@src/app/shared/material.module';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    MaterialModule
  ],
  exports: [
    ...COMPONENT_DECLARATIONS,
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class LoginModule { }
