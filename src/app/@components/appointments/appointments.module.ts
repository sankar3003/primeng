import { AppointmentRoutes } from './appointment.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppointmentRoutes
  ],
  declarations: [AppointmentsComponent]
})
export class AppointmentsModule { }
