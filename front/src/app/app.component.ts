import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/sign-up';
  }
}
