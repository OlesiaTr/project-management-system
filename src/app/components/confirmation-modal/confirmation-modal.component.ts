import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  @Input() message!: string;
  @Input() confirmAction!: () => void;
  showModal = false;

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
