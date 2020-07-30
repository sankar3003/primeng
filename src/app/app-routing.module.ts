import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'dealer-layout',
    loadChildren: () => import('./@layouts/dealer-layout/dealer-layout.module').then(m => m.DealerLayoutModule)
  },
  {
    path: 'customer-layout',
    loadChildren: () => import('./@layouts/customer-layout/customer-layout.module').then(m => m.CustomerLayoutModule)
  },
  {
    path: 'user-layout',
    loadChildren: () => import('./@layouts/user-layout/user-layout.module').then(m => m.UserLayoutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./@core/login/login.module').then(m => m.LoginModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
