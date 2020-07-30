import { CustomerComponent } from './customer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
];

export const CustomerRoutes = RouterModule.forChild(routes);
