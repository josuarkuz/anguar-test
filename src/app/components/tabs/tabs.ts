import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren, ElementRef, signal } from '@angular/core';

interface TabItem {
  id: string;
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {
  @ViewChildren('tabButton') tabButtons?: QueryList<ElementRef<HTMLButtonElement>>;

  readonly tabs: TabItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      content:
        'This component demonstrates an accessible tabs pattern with keyboard navigation and proper ARIA relationships.',
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      content:
        'Tabs support ArrowLeft, ArrowRight, Home, End, Enter, and Space. The active tab exposes aria-selected and is connected to its panel.',
    },
    {
      id: 'usage',
      label: 'Usage',
      content:
        'Use tabs when related sections share the same space and users need to switch between them without leaving the current page context.',
    },
  ];

  activeIndex = signal(0);

  selectTab(index: number): void {
    this.activeIndex.set(index);
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    switch (event.key) {
      case 'ArrowRight': {
        event.preventDefault();
        this.focusTab(index < this.tabs.length - 1 ? index + 1 : 0);
        break;
      }
      case 'ArrowLeft': {
        event.preventDefault();
        this.focusTab(index > 0 ? index - 1 : this.tabs.length - 1);
        break;
      }
      case 'Home': {
        event.preventDefault();
        this.focusTab(0);
        break;
      }
      case 'End': {
        event.preventDefault();
        this.focusTab(this.tabs.length - 1);
        break;
      }
      case 'Enter':
      case ' ': {
        event.preventDefault();
        this.selectTab(index);
        break;
      }
    }
  }

  focusTab(index: number): void {
    this.tabButtons?.get(index)?.nativeElement.focus();
  }

  getTabId(index: number): string {
    return `tab-${this.tabs[index].id}`;
  }

  getPanelId(index: number): string {
    return `panel-${this.tabs[index].id}`;
  }
}
