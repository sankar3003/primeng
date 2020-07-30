import { SharedModule } from './../../@shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';



@NgModule({
  imports: [

    CommonModule,
    UserRoutes,
    FormsModule,
    ReactiveFormsModule, SharedModule
  ],
  declarations: [UserComponent,

  ],
  exports: [
    UserComponent,
  ]

})
export class UserModule { }
