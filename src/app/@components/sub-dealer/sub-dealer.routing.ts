import { SubDealerComponent } from './sub-dealer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SubDealerComponent

  },
];

export const SubDealerRoutes = RouterModule.forChild(routes);
