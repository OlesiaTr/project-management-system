import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
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
  confirmationModalTitle: string = '';
  pageSize: number = 10;
  pageNumber: number = 1;
  totalPages: number = 1;
  totalBoards: number = 0;
  @ViewChild('confirmationModal')
  confirmationModal!: ConfirmationModalComponent;

  constructor(
    private boardService: BoardService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boards$ = this.boardService.getBoards(this.pageSize, this.pageNumber);

    this.boards$.subscribe((boards) => {
      this.filteredBoards = boards;
      this.totalBoards = this.filteredBoards.length;
      this.totalPages = Math.ceil(this.totalBoards / this.pageSize);
      this.filterBoards();
    });
  }

  deleteBoard(_id: string | undefined) {
    if (!_id) return;

    const board = { _id } as Board;

    this.confirmationModalTitle = 'Delete Board';
    this.confirmationModal.message =
      'Are you sure you want to delete this board?';

    this.confirmationModal.confirmAction = () => {
      this.boardService.deleteBoardById(board).subscribe({
        next: () => {
          console.log('Board deleted successfully');
          this.getBoards();
        },
        error: (err) => {
          console.log('Error deleting board:', err);
          this.toast.showError(err.message);
        },
      });
    };

    this.confirmationModal.open();
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterBoards();
  }

  filterBoards(): void {
    const start = (this.pageNumber - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filteredBoards = this.filteredBoards
      .slice(start, end)
      .filter((board: Board) => {
        const searchFields = [
          board._id ? board._id.toString() : '',
          board.title,
          board.description,
          board.createdAt ? board.createdAt.toString() : '',
          board.createdBy,
        ];
        return searchFields
          .join(' ')
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
  }

  onPageChange(event: any) {
    this.pageNumber = event;
    this.filterBoards();
  }
}
