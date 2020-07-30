import { SubDealerRoutes } from './sub-dealer.routing';
import { SharedModule } from './../../@shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubDealerComponent } from './sub-dealer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubDealerRoutes
  ],
  declarations: [SubDealerComponent]
})
export class SubDealerModule { }
