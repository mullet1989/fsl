import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing-module';
import { MaterialDesignModule } from '../material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    RouterModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
