import { Component, signal } from '@angular/core';
import { ModalDialog } from '../../components/modal-dialog/modal-dialog';

@Component({
  selector: 'app-modal-screen',
  imports: [ModalDialog],
  templateUrl: './modal-screen.html',
  styleUrl: './modal-screen.scss'
})
export class ModalScreen {
  isModalOpen = signal(false);

  openModal(): void {
    this.isModalOpen.set(true);
  }

  onModalOpenChange(value: boolean): void {
    this.isModalOpen.set(value);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }
}
