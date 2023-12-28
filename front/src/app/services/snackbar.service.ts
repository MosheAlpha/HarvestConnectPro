import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(message: string, style: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message },
      duration: 30000, // 3 seconds
      horizontalPosition: 'start', // Left side of the screen
      verticalPosition: 'top',
      panelClass: style, // Optional custom styling
    });
  }
}
