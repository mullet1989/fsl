import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: "admin", pathMatch: "full" },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    //canLoad: [AuthGuard]
  },
  {
    path: 'athlete',
    loadChildren: 'app/athlete/athlete.module#AthleteModule'
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
