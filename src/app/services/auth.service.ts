import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, map } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ApiResponse } from 'src/assets/interfaces/ApiResponse';

import { apiUrl } from '../constants/apiUrl';
import { ToastService } from './toast.service';
import { handleError } from '../utils/handleError';
import { User } from 'src/assets/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private toast: ToastService
  ) {}

  signin(login: string, password: string): Observable<any> {
    const body = { login, password };

    return this.http.post<ApiResponse>(`${apiUrl}/auth/signin`, body).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        if (res.token) {
          const userName = login;
          localStorage.setItem('userInfo', JSON.stringify({ userName }));
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

    return this.http.post<ApiResponse>(`${apiUrl}/auth/signup`, body).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res._id);

        const userId = res._id;
        const userName = res.login;
        localStorage.setItem('userInfo', JSON.stringify({ userId, userName }));
      }),
      catchError(handleError(this.toast, 'signup'))
    );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<ApiResponse>(`${apiUrl}/users/${id}`).pipe(
      map((res: ApiResponse) => res.user as User),
      tap((user: User) => {
        user.token = this.getToken() ?? '';
      }),
      catchError(handleError(this.toast, 'getUser'))
    );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<ApiResponse>(`${apiUrl}/users/${user.id}`, user).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        const token = res.token;
        localStorage.setItem('token', token);
      }),
      catchError(handleError(this.toast, 'updateUser'))
    );
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete<ApiResponse>(`${apiUrl}/users/${user.id}`).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        const token = res.token;
        localStorage.setItem('token', token);
      }),
      catchError(handleError(this.toast, 'deleteUser'))
    );
  }

  signout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) return of(true);

    return of(false);
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
