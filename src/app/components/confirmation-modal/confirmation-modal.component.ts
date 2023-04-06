import { Component, Input } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  @Input() message!: string;
  @Input() confirmAction!: () => void;
  @Input() confirmButtonText!: string;
  @Input() cancelButtonText!: string;
  @Input() title!: string;
  @Input() showModal: boolean = false;

  constructor(private boardService: BoardService) {}

  open() {
    console.log('ConfirmationModalComponent: open()');
    this.showModal = true;
  }

  close() {
    console.log('ConfirmationModalComponent: close()');
    this.showModal = false;
  }

  confirm() {
    console.log('ConfirmationModalComponent: confirm()');
    this.confirmAction();
    this.close();
  }

  deleteBoard() {
    const boardId = localStorage.getItem('boardId');
    if (!boardId) return;

    console.log('boardId:', boardId);
    this.boardService.deleteBoardById(boardId).subscribe((res) => {
      console.log(res);
      this.confirm();
    });
  }
}
