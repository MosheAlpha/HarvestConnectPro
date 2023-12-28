import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isLogged: boolean = false;
  constructor(
    private el: ElementRef,
    public snackbarService: SnackbarService,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn();
  }

  scrollToContact(location: string) {
    const contactSection = document.getElementById(location);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logOut() {
    this.authService.logout();
    this.snackbarService.showSnackbar('יצאת בהצלחה', 'snackbar-success');
    this.router.navigate(['/home']);
    this.location.go(this.location.path()); // Navigate to the current URL
    window.location.reload(); // Reload the page
  }
}
