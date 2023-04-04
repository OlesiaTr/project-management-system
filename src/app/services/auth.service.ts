import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ApiResponse } from 'src/interfaces/ApiResponse';

import { apiUrl } from '../constants/apiUrl';
import { ToastService } from './toast.service';
import { handleError } from '../utils/handleError';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = `${apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private toast: ToastService
  ) {}

  signin(login: string, password: string): Observable<any> {
    const body = { login, password };

    return this.http.post<ApiResponse>(`${this.baseUrl}/signin`, body).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        if (res.token) {
          const token = `Bearer ${res.token}`;
          localStorage.setItem('token', token);
        }
      }),
      catchError(handleError(this.toast, 'signin'))
    );
  }

  signup(signupData: {
    name: string;
    password: string;
    login: string;
  }): Observable<any> {
    console.log('signup function');
    const body = {
      name: signupData.name,
      password: signupData.password,
      login: signupData.login,
    };

    return this.http.post<ApiResponse>(`${this.baseUrl}/signup`, body).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        const token = res.token;
        localStorage.setItem('token', token);
      }),
      catchError(handleError(this.toast, 'signup'))
    );
  }

  signout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) return true;

    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenExpired(token: string): boolean {
    const decodedToken = this.jwtHelper.decodeToken(token);
    const expirationTime = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    return expirationTime < currentTime;
  }
}
