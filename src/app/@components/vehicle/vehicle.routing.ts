import { VehicleComponent } from './vehicle.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VehicleComponent
  },
];

export const VehicleRoutes = RouterModule.forChild(routes);
