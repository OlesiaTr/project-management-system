import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/apiUrl';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { AuthService } from './auth.service';
import { BoardService } from './board.service';
import { ToastService } from './toast.service';
import { Column } from 'src/assets/interfaces/Column';
import { handleError } from '../utils/handleError';
import { Task } from 'src/assets/interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private columnUrl = `${apiUrl}/boards`;
  private tasksSetUrl = `${apiUrl}/tasksSet`;
  private token!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private boardService: BoardService,
    private toast: ToastService
  ) {}

  getTasks(boardId: string, columnId: string): Observable<Task[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .get<Task[]>(`${this.columnUrl}/${boardId}/columns/${columnId}/tasks`, {
        headers,
      })
      .pipe(catchError(handleError(this.toast, 'getTasks', [])));
  }

  createTask(boardId: string, columnId: string, task: Task): Observable<Task> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .post<Task[]>(
        `${this.columnUrl}/${boardId}/columns/${columnId}/tasks`,
        task,
        {
          headers,
        }
      )
      .pipe(catchError(handleError(this.toast, 'createTask', [])));
  }

  getTasksById(
    boardId: string,
    columnId: string,
    taskId: string
  ): Observable<Task> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .get<Task[]>(
        `${this.columnUrl}/${boardId}/columns/${columnId}/tasks/${taskId}`,
        {
          headers,
        }
      )
      .pipe(catchError(handleError(this.toast, 'getTasksById', [])));
  }

  updateTasksById(
    boardId: string,
    columnId: string,
    taskId: string,
    task: Task
  ): Observable<Task> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .put<Task[]>(
        `${this.columnUrl}/${boardId}/columns/${columnId}/tasks/${taskId}`,
        task,
        {
          headers,
        }
      )
      .pipe(catchError(handleError(this.toast, 'updateTasksById', [])));
  }

  deleteTasksById(
    boardId: string,
    columnId: string,
    taskId: string
  ): Observable<Task> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    return this.http
      .delete<Task[]>(
        `${this.columnUrl}/${boardId}/columns/${columnId}/tasks/${taskId}`,
        {
          headers,
        }
      )
      .pipe(catchError(handleError(this.toast, 'deleteTasksById', [])));
  }

  getTasksSet(
    columnIds: string[],
    userIds: string[],
    searchText: string
  ): Observable<Task[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    const filters = { columnIds, userIds, searchText };
    return this.http
      .get<Task[]>(`${this.tasksSetUrl}`, { headers, params: filters })
      .pipe(catchError(handleError(this.toast, 'getTasksSet', [])));
  }

  updateTasksSet(tasks: Task[]): Observable<Task[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);
    const updatedTasks = tasks.map((task) => ({
      _id: task._id,
      order: task.order,
      columnId: task.columnId,
    }));
    return this.http
      .patch<Task[]>(`${this.tasksSetUrl}`, updatedTasks, { headers })
      .pipe(catchError(handleError(this.toast, 'updateTasksSet', [])));
  }

  getTasksSetByBoardId(boardId: string): Observable<Task[]> {
    this.token = this.authService.getToken() ?? '';
    const headers = this.boardService.getHeaders(this.token);

    return this.http
      .get<Task[]>(`${this.tasksSetUrl}/${boardId}`, { headers })
      .pipe(catchError(handleError(this.toast, 'getTasksSetByBoardId', [])));
  }
}
