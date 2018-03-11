import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';

const appRoutes: Routes = [
  {
    path: "/:id",
    component: AthleteDetailComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AthleteRoutingModule { }
