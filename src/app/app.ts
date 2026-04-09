import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkipNavigation } from './components/skip-navigation/skip-navigation';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { ModalDialog } from './components/modal-dialog/modal-dialog';
import { FormInputs } from './components/form-inputs/form-inputs';
import { DataTable } from './components/data-table/data-table';
import { DropdownMenu } from './components/dropdown-menu/dropdown-menu';
import { Tabs } from './components/tabs/tabs';
import { Accordion } from './components/accordion/accordion';
import { ToastAlert } from './components/toast-alert/toast-alert';
import { DatePicker } from './components/date-picker/date-picker';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationBar,
    SkipNavigation,
    ModalDialog,
    FormInputs,
    DataTable,
    DropdownMenu,
    Tabs,
    Accordion,
    ToastAlert,
    DatePicker,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
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
