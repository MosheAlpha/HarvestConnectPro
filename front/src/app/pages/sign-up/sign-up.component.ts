import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  //name, email, password, role: "user or admin"

  constructor(private authService: AuthService, private router: Router) {}

  signup(name: string, email: string, password: string): void {
    // Call the signup method of the AuthenticationService
    this.authService.signup(name, email, password).subscribe((success) => {
      if (success) {
        // Navigate to the home page
        this.router.navigate(['/home']);
      } else {
        // Display an error message
        console.error('Signup failed');
      }
    });
  }
}
