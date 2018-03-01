import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteRoutingModule } from './athlete-routing.module';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    AthleteRoutingModule
  ],
  declarations: [AthleteDetailComponent]
})
export class AthleteModule { }
