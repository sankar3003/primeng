import { UserLayoutComponent } from './user-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent
  },
];

export const UserLayoutRoutes = RouterModule.forChild(routes);
