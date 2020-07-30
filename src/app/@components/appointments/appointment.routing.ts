import { AppointmentsComponent } from './appointments.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent
  },
];

export const AppointmentRoutes = RouterModule.forChild(routes);
