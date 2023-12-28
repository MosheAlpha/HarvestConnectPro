import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { VolunteeringComponent } from './pages/volunteering/volunteering.component';
import { VolunteerDetailsComponent } from './pages/volunteer-details/volunteer-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EventComponent } from './components/event/event.component';
import { BestdealEventComponent } from './components/bestdeal-event/bestdeal-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TranslatePipe } from './translate.pipe';
import { ManagementComponent } from './pages/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    VolunteeringComponent,
    VolunteerDetailsComponent,
    LoaderComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    EventComponent,
    BestdealEventComponent,
    SnackbarComponent,
    TranslatePipe,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ]
})
export class AppModule { }
