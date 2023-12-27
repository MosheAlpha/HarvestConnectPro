import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private apiUrl = 'http://your-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getVolAmount(): Observable<number> {
    // Make a request to the backend API to get the volunteer amount
    return this.http.get<number>(`${this.apiUrl}/getVolAmount`);
  }

  getSoldiersAmount(): Observable<number> {
    // Make a request to the backend API to get the soldiers amount
    return this.http.get<number>(`${this.apiUrl}/getSoldiersAmount`);
  }

  getPeopleAmount(): Observable<number> {
    // Make a request to the backend API to get the people amount
    return this.http.get<number>(`${this.apiUrl}/getPeopleAmount`);
  }
}
