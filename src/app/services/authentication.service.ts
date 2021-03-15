import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Authentication } from '../model/authentication';

export const ACCESS_TOKEN = 'demo-access-store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authentication: Authentication | undefined;

  constructor() {
    const stored = localStorage.getItem(ACCESS_TOKEN);
    if (stored) {
      this.authentication = JSON.parse(stored) as Authentication;
    }
  }

  getAuthentication(): Authentication | undefined {
    return this.authentication;
  }

  login(username: string): Observable<void> {
    const loginDate = new Date();
    const expirationDate = new Date(loginDate.getTime() + (60 * 60000));  // 1 ora
    this.authentication = { username, loginDate, expirationDate };
    return of(localStorage.setItem(ACCESS_TOKEN, JSON.stringify(this.authentication)));
  }

  logout(): Observable<void> {
    this.authentication = undefined;
    return of(localStorage.removeItem(ACCESS_TOKEN));
  }
}
