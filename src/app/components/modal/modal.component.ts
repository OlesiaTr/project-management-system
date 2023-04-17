import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() showModal: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.showModal = false;
    this.close.emit();
  }
}
