import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteRoutingModule } from './athlete-routing.module';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';
import { AthleteComponent } from './athlete.component';

@NgModule({
  imports: [
    CommonModule,
    AthleteRoutingModule
  ],
  declarations: [
    AthleteComponent,
    AthleteDetailComponent
  ]
})
export class AthleteModule { }
