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

  constructor(private authService: AuthService, private router: Router, public snackbarService: SnackbarService) {}

  showSnackbarOnClick(message: string) {
    this.snackbarService.showSnackbar(message);
  }

  checkPasswords(password: string, password1: string): boolean {
    return password == password1 
  }

  signup(name: string, email: string, password: string , password1: string): void {
    let message: string="";
    if(this.checkPasswords(password, password1)){
      this.authService.signup(name, email, password).subscribe((success) => {
        if (success) {
          // Navigate to the home page
          message = "הרישום עבר בהצלחה";
          this.router.navigate(['/home']);
        } else {
          // Display an error message
          message = "היתה בעיה באחד הנתונים";
          console.error('Signup failed');
        }
      });
    }
    else{
      message = "הססמאות אינם זהות";
    }
    this.showSnackbarOnClick(message);
    // Call the signup method of the AuthenticationService
  }
}
