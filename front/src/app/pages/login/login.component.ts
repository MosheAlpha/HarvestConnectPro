import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: any, password: any): void {
    this.authService.login(username, password).subscribe((success) => {
      if (success) {
        // Navigate to the home page
        this.router.navigate(['/home']);
      } else {
        // Display an error message
      }
    });
  }
}
