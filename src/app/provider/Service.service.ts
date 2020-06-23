import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../environments';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  constructor(private http: HttpClient) {}

  getEmail(email) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(`${environment.ticketUrl}/user/detail/${email}`, {
        headers: headers,
      })
      .delay(1000)
      .map((res) => res['message'].filter((user) => user.email === email));
  }

  getUserDetail(email) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${environment.ticketUrl}/user/detail/${email}`, {
      headers: headers,
    });
  }
}
