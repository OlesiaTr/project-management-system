import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { apiUrl } from '../constants/apiUrl';
import { Board } from '../constants/boardClass';
import { handleError } from '../utils/handleError';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private baseUrl = `${apiUrl}/boards`;
  private token!: string | null;

  constructor(private http: HttpClient, private toast: ToastService) {}

  private getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return headers;
  }

  getToken() {
    this.token = localStorage.getItem('token');
  }

  getBoards(): Observable<Board[]> {
    this.getToken();
    const headers = this.getHeaders();
    return this.http
      .get<Board[]>(this.baseUrl, { headers })
      .pipe(catchError(handleError(this.toast, 'getBoards', [])));
  }

  createBoard(board: Board): Observable<Board> {
    this.getToken();
    const headers = this.getHeaders();
    return this.http
      .post<Board>(this.baseUrl, board)
      .pipe(catchError(handleError(this.toast, 'createBoard', [])));
  }

  getBoardById(board: Board): Observable<Board> {
    this.getToken();
    const headers = this.getHeaders();
    return this.http
      .get<Board>(`${this.baseUrl}/${board.id}`)
      .pipe(catchError(handleError(this.toast, 'getBoardById', [])));
  }

  updateBoardById(board: Board): Observable<Board> {
    this.getToken();
    const headers = this.getHeaders();
    return this.http
      .put<Board>(`${this.baseUrl}/${board.id}`, board)
      .pipe(catchError(handleError(this.toast, 'updateBoardById', [])));
  }

  deleteBoardById(board: Board): Observable<Board> {
    this.getToken();
    const headers = this.getHeaders();
    return this.http
      .delete<Board>(`${this.baseUrl}/${board.id}`)
      .pipe(catchError(handleError(this.toast, 'deleteBoardById', [])));
  }

  getBoardsByIds(boardIds: string[]): Observable<Board[]> {
    this.getToken();
    const headers = this.getHeaders();
    const params = { ids: boardIds.join(',') };
    return this.http
      .get<Board[]>(`${apiUrl}/boardsSet`, { params })
      .pipe(catchError(handleError(this.toast, 'getBoardsByIds', [])));
  }

  getBoardsByUser(userId: string): Observable<Board[]> {
    this.getToken();
    const headers = this.getHeaders();
    return this.http
      .get<Board[]>(`${apiUrl}/boardsSet/${userId}`)
      .pipe(catchError(handleError(this.toast, 'getBoardsByUser', [])));
  }
}
