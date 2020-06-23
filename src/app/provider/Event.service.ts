import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments';

@Injectable({ providedIn: 'root' })
export class EventService {

  constructor(private http: HttpClient) {}

  createEvent(newPost) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.ticketUrl}/ticket/create`, newPost, {
      headers,
    });
  }

  getEvents() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${environment.ticketUrl}/ticket/getEvents`, { headers });
  }

  getEventByItemId(eventId) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      `${environment.ticketUrl}/ticket/getEvent?eventId=${eventId}`,
      { headers }
    );
  }
}
