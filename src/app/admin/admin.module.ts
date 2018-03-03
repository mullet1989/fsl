import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing-module';
import { MaterialDesignModule } from '../material-design.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialDesignModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
