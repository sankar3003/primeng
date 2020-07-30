import { UserLayoutRoutes } from './user-layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout.component';

@NgModule({
  imports: [
    CommonModule,
    UserLayoutRoutes
  ],
  declarations: [UserLayoutComponent]
})
export class UserLayoutModule { }
