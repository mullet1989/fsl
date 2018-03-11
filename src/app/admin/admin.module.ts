import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialDesignModule } from "../material-design.module";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin.routing-module";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
  ]
})
export class AdminModule { }
