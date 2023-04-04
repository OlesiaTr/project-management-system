import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private toast: ToastService) {}

  getBoards(): Observable<Board[]> {
    return this.http
      .get<Board[]>(this.baseUrl)
      .pipe(catchError(handleError(this.toast, 'getBoards', [])));
  }

  createBoard(board: Board): Observable<Board> {
    return this.http
      .post<Board>(this.baseUrl, board)
      .pipe(catchError(handleError(this.toast, 'createBoard', [])));
  }

  getBoardById(board: Board): Observable<Board> {
    return this.http
      .get<Board>(`${this.baseUrl}/${board.id}`)
      .pipe(catchError(handleError(this.toast, 'getBoardById', [])));
  }

  updateBoardById(board: Board): Observable<Board> {
    return this.http
      .put<Board>(`${this.baseUrl}/${board.id}`, board)
      .pipe(catchError(handleError(this.toast, 'updateBoardById', [])));
  }

  deleteBoardById(board: Board): Observable<Board> {
    return this.http
      .delete<Board>(`${this.baseUrl}/${board.id}`)
      .pipe(catchError(handleError(this.toast, 'deleteBoardById', [])));
  }

  getBoardsByIds(boardIds: string[]): Observable<Board[]> {
    const params = { ids: boardIds.join(',') };
    return this.http
      .get<Board[]>(`${apiUrl}/boardsSet`, { params })
      .pipe(catchError(handleError(this.toast, 'getBoardsByIds', [])));
  }

  getBoardsByUser(userId: string): Observable<Board[]> {
    return this.http
      .get<Board[]>(`${apiUrl}/boardsSet/${userId}`)
      .pipe(catchError(handleError(this.toast, 'getBoardsByUser', [])));
  }
}
