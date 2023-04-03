import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  signin(name: string, password: string): Observable<any> {
    const body = { name, password };

    return this.http.post<ApiResponse>(`${this.baseUrl}/signin`, body).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        const token = res.token;
        localStorage.setItem('token', token);
      }),
      catchError(this.handleError('signin'))
    );
  }

  signup(name: string, password: string): Observable<any> {
    const body = { name, password };

    return this.http.post<ApiResponse>(`${this.baseUrl}/signup`, body).pipe(
      tap((res: ApiResponse) => {
        console.log('res:', res);
        const token = res.token;
        localStorage.setItem('token', token);
      }),
      catchError(this.handleError('signup'))
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
