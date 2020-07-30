
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdHostDirective } from '../ad-host.directive';

import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardModule } from 'primeng/card';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

const array = [

  HttpClientModule,
  FormsModule,
  ButtonModule,
  FontAwesomeModule,
  CardModule,
  ReactiveFormsModule,
  ShowHidePasswordModule,
  DropdownModule,
  SidebarModule,
  ToolbarModule,
  SplitButtonModule,
  PanelMenuModule,
  DialogModule,
  CheckboxModule,
  RadioButtonModule,
]

@NgModule({
  declarations: [
    AdHostDirective
  ],
  imports: [
    CommonModule,
    array
  ],
  exports: [
    array
  ]
})
export class SharedModule { }
