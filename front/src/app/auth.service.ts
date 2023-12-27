import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/v1/auth';
  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const credentials = { email: username, password };

    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      map((response) => {
        // Login successful if there's a token in the response

        if (response.tokens.access.token && response.tokens.refresh.token) {
          // Store tokens in local storage
          localStorage.setItem(
            this.accessTokenKey,
            response.tokens.access.token
          );
          localStorage.setItem(
            this.refreshTokenKey,
            response.tokens.refresh.token
          );
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => of(false))
    );
  }

  signup(
    name: string,
    username: string,
    password: string
  ): Observable<boolean> {
    const newUser = { name, email: username, password };

    return this.http.post<any>(`${this.apiUrl}/register`, newUser).pipe(
      map((response) => {
        const token = response && response.token;

        if (token) {
          localStorage.setItem(this.accessTokenKey, token);
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => of(false))
    );
  }

  // Remove token from local storage
  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  // Check if token exists in local storage
  isLoggedIn(): boolean {
    return (
      !!localStorage.getItem(this.accessTokenKey) &&
      !!localStorage.getItem(this.refreshTokenKey)
    );
  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  isAdmin(): boolean {
    // return localStorage.getItem('isAdmin') ? true : false;
    return true;
  }
}
