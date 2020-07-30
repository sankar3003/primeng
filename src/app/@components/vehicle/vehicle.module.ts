import { VehicleRoutes } from './vehicle.routing';
import { SharedModule } from './../../@shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VehicleRoutes
  ],
  declarations: [VehicleComponent]
})
export class VehicleModule { }
