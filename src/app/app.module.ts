import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "materialize-css";
import { MaterializeDirective } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MaterializeDirective,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
