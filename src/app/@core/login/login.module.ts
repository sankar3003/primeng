import { SharedModule } from './../../@shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
