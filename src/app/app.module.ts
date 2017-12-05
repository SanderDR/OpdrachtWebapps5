import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddZoekertjeComponent } from './components/add-zoekertje/add-zoekertje.component';
import {ZoekertjesService} from './services/zoekertjes.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addZoekertje', component: AddZoekertjeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AddZoekertjeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ZoekertjesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
