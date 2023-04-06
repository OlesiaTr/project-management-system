import { Component, Input } from '@angular/core';

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
}
