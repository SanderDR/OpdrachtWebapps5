import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddZoekertjeComponent } from './components/add-zoekertje/add-zoekertje.component';
import {ZoekertjesService} from './services/zoekertjes.service';
import { ZoekertjesPipe } from './pipes/zoekertjes.pipe';
import { ZoekertjeComponent } from './components/zoekertje/zoekertje.component';
import { ReactiesService } from './services/reacties.service';
import { MyZoekertjesComponent } from './components/my-zoekertjes/my-zoekertjes.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addZoekertje', component: AddZoekertjeComponent, canActivate:[AuthGuard]},
  {path: 'zoekertje/:id', component: ZoekertjeComponent},
  {path: 'myZoekertjes', component: MyZoekertjesComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AddZoekertjeComponent,
    ZoekertjesPipe,
    ZoekertjeComponent,
    MyZoekertjesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, ZoekertjesService,ReactiesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
