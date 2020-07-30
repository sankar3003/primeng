import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutes } from './customer.routing';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutes

  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }
