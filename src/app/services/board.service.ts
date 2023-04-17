import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

import { apiUrl } from '../constants/apiUrl';
import { Board } from '../constants/boardClass';
import { handleError } from '../utils/handleError';
import { ToastService } from './toast.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private baseUrl = `${apiUrl}/boards`;
  private token!: string;
  public totalCount: number = 0;

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private authService: AuthService
  ) {}

  getHeaders(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return headers;
  }

  getBoards(
    pageSize: number = 10,
    pageNumber: number = 1
  ): Observable<Board[]> {
    this.token = this.authService.getToken() ?? '';

    const skip = (pageNumber - 1) * pageSize;
    const take = pageSize;
    const headers = this.getHeaders(this.token);

    return this.http
      .get<Board[]>(`${this.baseUrl}?skip=${skip}&take=${take}`, { headers })
      .pipe(catchError(handleError(this.toast, 'getBoards', [])));
  }

  createBoard(board: Board): Observable<Board> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.getHeaders(this.token);
    return this.http
      .post<Board>(this.baseUrl, board, { headers })
      .pipe(catchError(handleError(this.toast, 'createBoard', [])));
  }

  getBoardById(board: Board | string): Observable<Board> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.getHeaders(this.token);
    const boardId = typeof board === 'string' ? board : board._id;
    return this.http
      .get<Board>(`${this.baseUrl}/${boardId}`, { headers })
      .pipe(catchError(handleError(this.toast, 'getBoardById', [])));
  }

  updateBoardById(board: Board): Observable<Board> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.getHeaders(this.token);
    return this.http
      .put<Board>(`${this.baseUrl}/${board._id}`, board, { headers })
      .pipe(catchError(handleError(this.toast, 'updateBoardById', [])));
  }

  deleteBoardById(board: Board | string): Observable<Board> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.getHeaders(this.token);
    const boardId = typeof board === 'string' ? board : board._id;
    return this.http
      .delete<Board>(`${this.baseUrl}/${boardId}`, { headers })
      .pipe(
        tap(() => {
          // remove the board from localStorage
          const boards = JSON.parse(localStorage.getItem('boards') || '[]');

          const updatedBoards = boards.filter((b: Board) => b._id !== boardId);

          localStorage.setItem('boards', JSON.stringify(updatedBoards));
        }),
        catchError(handleError(this.toast, 'deleteBoardById', []))
      );
  }

  getBoardsByIds(boardIds: string[]): Observable<Board[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.getHeaders(this.token);
    const params = { ids: boardIds.join(',') };
    return this.http
      .get<Board[]>(`${apiUrl}/boardsSet`, { params, headers })
      .pipe(catchError(handleError(this.toast, 'getBoardsByIds', [])));
  }

  getBoardsByUser(userId: string): Observable<Board[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.getHeaders(this.token);
    return this.http
      .get<Board[]>(`${apiUrl}/boardsSet/${userId}`, { headers })
      .pipe(catchError(handleError(this.toast, 'getBoardsByUser', [])));
  }
}
