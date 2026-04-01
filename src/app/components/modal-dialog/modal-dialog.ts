import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-dialog.html',
  styleUrl: './modal-dialog.scss',
})
export class ModalDialog implements OnChanges {
  @Input() open = false;
  @Input() title = 'Dialog title';
  @Input() description?: string;
  @Input() closeOnBackdropClick = true;

  @ViewChild('dialogPanel') dialogPanel?: ElementRef<HTMLElement>;

  private previouslyFocusedElement: HTMLElement | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      if (this.open) {
        this.previouslyFocusedElement = document.activeElement as HTMLElement | null;
        setTimeout(() => this.focusFirstElement());
      } else {
        this.restoreFocus();
      }
    }
  }

  close(): void {
    this.open = false;
    this.restoreFocus();
  }

  onBackdropClick(): void {
    if (!this.closeOnBackdropClick) {
      return;
    }

    this.close();
  }

  onPanelClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.open) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  }

  private focusFirstElement(): void {
    const panel = this.dialogPanel?.nativeElement;

    if (!panel) {
      return;
    }

    const focusableElements = this.getFocusableElements(panel);

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
      return;
    }

    panel.focus();
  }

  private trapFocus(event: KeyboardEvent): void {
    const panel = this.dialogPanel?.nativeElement;

    if (!panel) {
      return;
    }

    const focusableElements = this.getFocusableElements(panel);

    if (focusableElements.length === 0) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  private restoreFocus(): void {
    this.previouslyFocusedElement?.focus();
  }

  private getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(
      container.querySelectorAll<HTMLElement>(
        [
          'button:not([disabled])',
          '[href]',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(','),
      ),
    ).filter((element) => {
      return !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true';
    });
  }
}
