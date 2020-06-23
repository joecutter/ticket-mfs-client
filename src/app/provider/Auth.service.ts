import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  OnsignIn(existingUser) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http
      .post(
        `${environment.ticketUrl}/auth/signin`,
        JSON.stringify(existingUser),
        { headers }
      )
      .pipe(
        map(res => {
          const user: any = res;
          console.log('TOKEN ', res);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(user['accessToken']);
          user['email'] = decodedToken['sub'];
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  OnsignUp(newUser) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(`${environment.ticketUrl}/auth/signup`, JSON.stringify(newUser), {headers});
  }

  OnLogout() {
   // remove user from local storage and set current user to null
   localStorage.removeItem('currentUser');
   this.currentUserSubject.next(null);
  }
}
