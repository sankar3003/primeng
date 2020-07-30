import { DealerLayoutComponent } from './dealer-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DealerLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dealer-layout/sub-dealer',
        pathMatch: 'full'
      },
      {
        path: 'sub-dealer',
        loadChildren: () => import('src/app/@components/sub-dealer/sub-dealer.module').then(m => m.SubDealerModule)
      },
      {
        path: 'appointments',
        loadChildren: () => import('src/app/@components/appointments/appointments.module').then(m => m.AppointmentsModule)
      },
      {
        path: 'vehicle',
        loadChildren: () => import('src/app/@components/vehicle/vehicle.module').then(m => m.VehicleModule)
      },

    ]
  },
];

export const DealarLayoutRoutes = RouterModule.forChild(routes);
