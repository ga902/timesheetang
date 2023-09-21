import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserProfileComponent } from './src/app/components/user-profile/user-profile.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { FormioModule } from 'angular-formio';
@NgModule({
  declarations: [
    AppComponent,
    // UserProfileComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
