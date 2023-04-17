import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/apiUrl';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BoardService } from './board.service';
import { Column } from 'src/assets/interfaces/Column';
import { Observable, catchError } from 'rxjs';
import { handleError } from '../utils/handleError';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private columnUrl = `${apiUrl}/boards`;
  private columnsSetUrl = `${apiUrl}/columnsSet`;
  private token!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private boardService: BoardService,
    private toast: ToastService
  ) {}

  getColumnsInBoard(boardId: string): Observable<Column[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .get<Column[]>(`${this.columnUrl}/${boardId}/columns`, { headers })
      .pipe(catchError(handleError(this.toast, 'getColumnsInBoard', [])));
  }

  createColumnInBoard(boardId: string, column: Column): Observable<Column> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .post<Column[]>(`${this.columnUrl}/${boardId}/columns`, column, {
        headers,
      })
      .pipe(catchError(handleError(this.toast, 'createColumnInBoard', [])));
  }

  getColumn(boardId: string, columnId: string): Observable<Column> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .get<Column[]>(`${this.columnUrl}/${boardId}/columns/${columnId}`, {
        headers,
      })
      .pipe(catchError(handleError(this.toast, 'getColumn', [])));
  }

  updateColumn(
    boardId: string,
    columnId: string,
    column: Column
  ): Observable<Column> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .put<Column[]>(
        `${this.columnUrl}/${boardId}/columns/${columnId}`,
        column,
        {
          headers,
        }
      )
      .pipe(catchError(handleError(this.toast, 'updateColumn', [])));
  }

  deleteColumn(boardId: string, columnId: string): Observable<Column> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .delete<Column[]>(`${this.columnUrl}/${boardId}/columns/${columnId}`, {
        headers,
      })
      .pipe(catchError(handleError(this.toast, 'deleteColumn', [])));
  }

  getColumnsSet(columnIds: string[]): Observable<Column[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    const query = columnIds.map((id) => `columnIds=${id}`).join('&');
    const url = `${this.columnsSetUrl}?${query}`;
    return this.http
      .get<Column[]>(url, { headers })
      .pipe(catchError(handleError(this.toast, 'getColumnsSet', [])));
  }

  updateColumnsSet(columns: Column[]): Observable<Column[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    const updatedColumns = columns.map((column) => ({
      _id: column._id,
      order: column.order,
    }));
    const url = `${this.columnsSetUrl}`;
    return this.http
      .patch<Column[]>(url, updatedColumns, { headers })
      .pipe(catchError(handleError(this.toast, 'updateColumnsSet', [])));
  }

  createColumnsSet(columns: Column[]): Observable<Column[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    const updatedColumns = columns.map((column) => ({
      _id: column._id,
      order: column.order,
      title: column.title,
    }));
    const url = `${this.columnsSetUrl}`;
    return this.http
      .post<Column[]>(url, updatedColumns, { headers })
      .pipe(catchError(handleError(this.toast, 'createColumnsSet', [])));
  }
}
