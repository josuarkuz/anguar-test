import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  readonly items: AccordionItem[] = [
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      content:
        'Accordion headers are native buttons, so users can Tab to each header and activate it with Enter or Space.',
    },
    {
      id: 'aria-state',
      title: 'ARIA State',
      content:
        'Each accordion trigger exposes aria-expanded and aria-controls so assistive technology can understand the current state.',
    },
    {
      id: 'content-structure',
      title: 'Content Structure',
      content:
        'Each expanded panel is associated with its trigger through aria-labelledby, which helps preserve structure and relationships.',
    },
  ];

  openIndexes = signal<number[]>([0]);

  toggleItem(index: number): void {
    const current = this.openIndexes();

    if (current.includes(index)) {
      this.openIndexes.set(current.filter((itemIndex) => itemIndex !== index));
      return;
    }

    this.openIndexes.set([...current, index]);
  }

  isOpen(index: number): boolean {
    return this.openIndexes().includes(index);
  }

  getHeaderId(index: number): string {
    return `accordion-header-${this.items[index].id}`;
  }

  getPanelId(index: number): string {
    return `accordion-panel-${this.items[index].id}`;
  }
}
