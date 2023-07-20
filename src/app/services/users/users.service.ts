import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/authenticate`, user);
  }
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }
  forgotPassword(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, user);
  }

  RecoverPassword(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, user);
  }

  setToken(token: string) {
    this.cookies.set('access_token', token);
  }
  getToken() {
    return this.cookies.get('access_token');
  }
  getUser(userId: string) {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
