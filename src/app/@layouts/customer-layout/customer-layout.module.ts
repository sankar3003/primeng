
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLayoutComponent } from './customer-layout.component';
import { CustomerLayoutRoutes } from './customer-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    CustomerLayoutRoutes,

  ],
  declarations: [CustomerLayoutComponent]
})
export class CustomerLayoutModule { }
