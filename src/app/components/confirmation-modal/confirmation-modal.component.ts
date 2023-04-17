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
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

  confirm() {
    this.confirmAction();
    this.close();
  }
}
