import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:3000/v1/events';
  private authToken = localStorage.getItem('accessToken');

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    this.authToken = localStorage.getItem('accessToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}` // Set Bearer token in the Authorization header
    });
  }

  getEvents(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}`, { headers });
  }

  // DELETE request
  deleteEvent(id: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers });
  }

  // PATCH request
  updateEvent(id: number, updatedData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.patch<any>(`${this.apiUrl}/${id}`, updatedData, { headers });
  }

  // POST request
  createEvent(newData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiUrl}`, newData, { headers });
  }

  
}
