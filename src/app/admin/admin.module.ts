import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin.routing-module';
import { MaterialDesignModule } from '../material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MockUserSearchService } from '../services/mocks/mock.user.search.service';
import { AuthService } from '../services/auth.service';
import { MockAuthService } from '../services/mocks/mock.auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
    RouterModule
  ],
  providers: [
    { provide: AuthService, useClass: MockAuthService }
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
  ]
})
export class AdminModule { }
