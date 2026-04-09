import { Component, Input } from '@angular/core';

interface SkipLink {
  label: string;
  targetId: string;
}

@Component({
  selector: 'app-skip-navigation',
  standalone: true,
  imports: [],
  templateUrl: './skip-navigation.html',
  styleUrl: './skip-navigation.scss',
})
export class SkipNavigation {
  @Input() links: SkipLink[] = [
    { label: 'Skip to main content', targetId: 'main-content' },
    { label: 'Skip to primary navigation', targetId: 'main-navigation' },
  ];

  onSkip(targetId: string, event: Event): void {
    event.preventDefault();

    const target = document.getElementById(targetId) as HTMLElement | null;

    if (!target) {
      return;
    }

    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }

    target.focus();
    target.scrollIntoView({ block: 'start' });
  }
}
