import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, public snackbarService: SnackbarService) {}

  showSnackbarOnClick(message: string) {
    this.snackbarService.showSnackbar(message);
  }

  login(username: any, password: any): void {
    let message: string = "";
    this.authService.login(username, password).subscribe((success) => {
      if (success) {
        // Navigate to the home page
        message = "התחברת בהצלחה";
        this.router.navigate(['/home']);
      } else {
        // Display an error message
        message = "יש בעיה בהתחברות";
      }
    });
    this.showSnackbarOnClick(message);
  }
}
