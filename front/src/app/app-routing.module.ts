import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { VolunteeringComponent } from './pages/volunteering/volunteering.component';
import { VolunteerDetailsComponent } from './pages/volunteer-details/volunteer-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { NewEventComponent } from './pages/new-event/new-event.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  {
    path: 'volunteering',
    component: VolunteeringComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'volunteer-details/:id',
    component: VolunteerDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'new-event',
    component: NewEventComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'volunteer-details',
    redirectTo: '/home',
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
