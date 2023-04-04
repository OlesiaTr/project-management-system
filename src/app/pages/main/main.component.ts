import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { Board } from 'src/app/constants/boardClass';
import { BoardService } from 'src/app/services/board.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  boards$: Observable<Board[]> = new Observable<Board[]>();
  @ViewChild('confirmationModal', { static: false })
  confirmationModal!: ConfirmationModalComponent;

  constructor(
    private boardService: BoardService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.boards$ = this.boardService.getBoards();
  }

  deleteBoard(id: string) {
    const board = { id } as Board;

    this.confirmationModal.message =
      'Are you sure you want to delete this board?';

    this.confirmationModal.confirmAction = () => {
      this.boardService.deleteBoardById(board).subscribe({
        next: () => {
          this.boards$ = this.boardService.getBoards();
        },
        error: (err) => {
          console.log(err);
          this.toast.showError(err.message);
        },
      });
    };
  }
}
