import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from "./material-design.module"

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';
import { MockAuthService } from './services/mocks/mock.auth.service';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataBase } from './services/mocks/inmemory.users';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(
      InMemoryDataBase, { dataEncapsulation: false }
    ),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: AuthGuard, useClass: AuthGuard },
    { provide: AuthService, useClass: MockAuthService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
