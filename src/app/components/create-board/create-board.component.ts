import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, catchError, throwError, tap } from 'rxjs';
import { Board } from 'src/app/constants/boardClass';
import { AuthService } from 'src/app/services/auth.service';
import { BoardService } from 'src/app/services/board.service';
import { ToastService } from 'src/app/services/toast.service';
import { handleError } from 'src/app/utils/handleError';
import { User } from 'src/assets/interfaces/User';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit {
  boardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private boardService: BoardService,
    private router: Router,
    public translate: TranslateService,
    private authService: AuthService,
    private toast: ToastService
  ) {
    this.boardForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      users: [''],
    });
  }

  ngOnInit() {}

  createBoard(): Observable<any> {
    if (this.boardForm.invalid) {
      return throwError(() => new Error('Board form is invalid.'));
    }

    const name = this.boardForm.controls['name'].value;
    const description = this.boardForm.controls['description'].value;
    const users = this.boardForm.controls['users'].value.split(',') ?? [''];
    const userInfo = localStorage.getItem('userInfo');
    const ownerId = userInfo ? JSON.parse(userInfo).userName : '';

    const body: Board = {
      title: name,
      owner: ownerId || '',
      users,
    };

    console.log('body:', body);

    const board = {
      title: name,
      owner: ownerId || '',
      users,
      createdBy: ownerId,
      createdAt: new Date().getTime(),
      description,
    };

    return this.boardService.createBoard(body).pipe(
      tap((res) => {
        const existingBoards = JSON.parse(
          localStorage.getItem('boards') || '[]'
        );

        console.log('res:', res);

        const newBoard = {
          _id: res._id,
          ...board,
        };

        console.log('newBoard:', newBoard);

        const updatedBoards = [...existingBoards, newBoard];

        localStorage.setItem('boards', JSON.stringify(updatedBoards));
        console.log('createBoard() success:', res);
      }),
      catchError((error) => {
        console.log('createBoard() error:', error);
        handleError(error.message);
        return throwError(() => new Error(error.message));
      })
    );
  }

  onCreateBoard() {
    this.createBoard().subscribe({
      next: (res) => {
        this.toast.showSuccess('Board created successfully!');
        this.router.navigate(['/main']);
      },
      error: (err) => {
        this.toast.showError('Error creating board:', err);
      },
    });
  }
}
