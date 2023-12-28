import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  //name, email, password, role: "user or admin"

  constructor(
    private authService: AuthService,
    private router: Router,
    public snackbarService: SnackbarService
  ) {}

  showSnackbarOnClick(message: string, style: string) {
    this.snackbarService.showSnackbar(message, style);
  }

  checkPasswords(password: string, password1: string): boolean {
    return password == password1;
  }

  signup(
    name: string,
    email: string,
    password: string,
    password1: string,
    isAgri: boolean,
  ): void {
    let message: string = '';
    debugger
    let role = isAgri ? 'admin' : 'user';
    if (this.checkPasswords(password, password1)) {
      this.authService.signup(name, email, password, role).subscribe((success) => {
        // if (success) {
          // Navigate to the home page
          this.showSnackbarOnClick('הרישום עבר בהצלחה', 'snackbar-success');
          this.router.navigate(['/home']);
        // } else {
          // Display an error message
          // this.showSnackbarOnClick('היתה בעיה באחד הנתונים', 'snackbar-error');
          // console.error('Signup failed');
        // }
      });
    } else {
      message = 'הססמאות אינם זהות';
      this.showSnackbarOnClick(message, 'snackbar-error');
    }
    // Call the signup method of the AuthenticationService
  }
}
