import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkipNavigation } from './components/skip-navigation/skip-navigation';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { ModalDialog } from './components/modal-dialog/modal-dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar, SkipNavigation, ModalDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angulatTest');
}
