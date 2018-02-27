import { NgModule } from "@angular/core"
import { RouterModule, Routes }  from '@angular/router';

import { AdminComponent } from "./admin.component"
import { DashboardComponent } from "./dashboard/dashboard.component"

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
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
