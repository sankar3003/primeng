
import { CustomerLayoutComponent } from './customer-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {

    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import('src/app/@components/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('src/app/@components/customer/customer.module').then(m => m.CustomerModule)
      },

    ]
  },

];

export const CustomerLayoutRoutes = RouterModule.forChild(routes);
