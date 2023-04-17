import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from 'src/app/constants/boardClass';
import { BoardService } from 'src/app/services/board.service';
import { ColumnService } from 'src/app/services/column.service';
import { Column } from 'src/assets/interfaces/Column';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService],
})
export class BoardComponent implements OnInit {
  board!: Board;
  showModal: boolean = false;
  showCreateColumnModal: boolean = false;
  showCreateTaskModal: boolean = false;
  newColumnName: string = '';

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private columnService: ColumnService,
    private router: Router
  ) {}

  ngOnInit() {
    const boardId = this.route.snapshot.paramMap.get('_id');
    localStorage.setItem('boardId', boardId ?? '');
    if (boardId) {
      this.boardService.getBoardById(boardId).subscribe({
        next: (board: Board) => {
          this.board = board;
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  openDeleteModal() {
    this.showModal = true;
  }

  closeDeleteModal() {
    this.showModal = false;
  }

  openCreateColumnModal() {
    this.showCreateColumnModal = true;
  }

  closeCreateColumnModal() {
    this.showCreateColumnModal = false;
    this.newColumnName = '';
  }

  openCreateTaskModal() {
    this.showCreateTaskModal = true;
  }

  onDeleteBoard() {
    const boardId = localStorage.getItem('boardId')!;
    this.boardService.deleteBoardById(boardId).subscribe(() => {
      this.router.navigate(['/main']);
    });
  }

  onCreateColumnSubmit(event: any) {
    event.preventDefault();
    const boardId = localStorage.getItem('boardId')!;

    const newColumn: Column = {
      title: this.newColumnName,
      order: 0,
    };
    this.columnService.createColumnInBoard(boardId, newColumn).subscribe({
      next: (column) => {
        if (this.board.columns) {
          this.board.columns.push(column);
        } else {
          // If it's not defined, set it to an empty array and then push the new column
          this.board.columns = [column];
        }
        this.closeCreateColumnModal();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
