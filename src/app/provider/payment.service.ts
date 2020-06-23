import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {}

  checkOut(newPost) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.ticketUrl}/payment/checkout`, newPost, {
      headers,
    });
  }

  getBalance(phone) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${environment.ticketUrl}/payment/balance?phone=${phone}`, { headers });
  }

  getTransLog(phone) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${environment.ticketUrl}/payment/translogs?phone=${phone}`, { headers });
  }
}
