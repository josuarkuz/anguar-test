import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkipNavigation } from './components/skip-navigation/skip-navigation';
import { NavigationBar } from './components/navigation-bar/navigation-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar, SkipNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
