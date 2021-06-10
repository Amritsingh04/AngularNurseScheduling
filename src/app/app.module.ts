import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from '../shared/material.module';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    RouterModule.forRoot([

      {
       path: '',
       redirectTo: 'login',
       pathMatch: 'full',
     },
     {
      path: 'login',
      component: LoginComponent, pathMatch: 'full'
    },
      {
       path: 'registration',
       component: RegistrationComponent, pathMatch: 'full'
     },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
