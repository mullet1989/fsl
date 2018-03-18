import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from "./material-design.module"

// components
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InMemoryDataBase } from './admin/services/mocks/inmemory.users';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserSearchService } from './admin/services/search/user.search.service';
import { MockAuthService } from './admin/services/mocks/mock.auth.service';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { EmailAlreadyInUseValidatorDirective } from './components/login/login.email-not-used.validator';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EmailAlreadyInUseValidatorDirective
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
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    { provide: AuthService, useClass: MockAuthService },
    UserSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
