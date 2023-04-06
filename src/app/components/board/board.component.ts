import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from 'src/app/constants/boardClass';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [BoardService],
})
export class BoardComponent implements OnInit {
  board!: Board;
  showModal: boolean = false;
  confirmAction!: () => void;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private router: Router
  ) {}

  ngOnInit() {
    const boardId = this.route.snapshot.paramMap.get('_id');
    localStorage.setItem('boardId', boardId ?? '');
    console.log('boardId:', boardId);
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
    this.confirmAction = this.onDeleteBoard.bind(this);
  }

  openDeleteModal() {
    this.showModal = true;
  }

  closeDeleteModal() {
    this.showModal = false;
  }

  onDeleteBoard() {
    console.log('deleteBoard() board.ts');
    const boardId = localStorage.getItem('boardId')!;
    this.boardService.deleteBoardById(boardId).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/main']);
    });
  }
}
