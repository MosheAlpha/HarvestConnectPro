import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { VolunteeringComponent } from './pages/volunteering/volunteering.component';
import { VolunteerDetailsComponent } from './pages/volunteer-details/volunteer-details.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  { path: 'volunteering', component: VolunteeringComponent },
  { path: 'volunteer-details', component: VolunteerDetailsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
