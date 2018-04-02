import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';
import { AthleteComponent } from './athlete.component';

const athleteRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "", component: AthleteComponent, children: [
          { path: ":id", component: AthleteDetailComponent },
        ]
      },
    ]
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(athleteRoutes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AthleteRoutingModule { }
