import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  filteredBoards: Board[] = [];
  searchTerm: string = '';
  @ViewChild('confirmationModal', { static: false })
  confirmationModal!: ConfirmationModalComponent;

  constructor(
    private boardService: BoardService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.boards$ = this.boardService.getBoards();

    this.boards$.subscribe((boards) => {
      this.filteredBoards = boards;
      this.filterBoards();
    });
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

  clearSearch() {
    this.searchTerm = '';
    this.filterBoards();
  }

  filterBoards(): void {
    this.boards$
      .pipe(
        debounceTime(500),
        map((boards: Board[]) =>
          boards.filter((board: Board) => {
            const searchFields = [
              board.id.toString(),
              board.title,
              board.description,
              board.createdAt.toString(),
              board.createdBy,
            ];
            return searchFields
              .join(' ')
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase());
          })
        )
      )
      .subscribe((filteredBoards) => {
        this.filteredBoards = filteredBoards;
      });
  }
}
