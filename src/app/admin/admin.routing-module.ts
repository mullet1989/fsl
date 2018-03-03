import { NgModule } from "@angular/core"
import { RouterModule, Routes }  from '@angular/router';

import { AdminComponent } from "./admin.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { AuthGuard } from "../auth.guard"

const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
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
export class AdminRoutingModule {}
