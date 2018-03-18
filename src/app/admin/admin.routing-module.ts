import { NgModule } from "@angular/core"
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../auth.guard";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminComponent } from "./components/admin.component";

const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
        canActivateChild: [AuthGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
