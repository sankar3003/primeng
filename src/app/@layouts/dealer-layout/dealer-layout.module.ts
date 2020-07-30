import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerLayoutComponent } from './dealer-layout.component';

import { DealarLayoutRoutes } from './dealar-layout.routing';
import { SharedModule } from 'src/app/@shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DealarLayoutRoutes
  ],
  declarations: [DealerLayoutComponent]
})
export class DealerLayoutModule { }
