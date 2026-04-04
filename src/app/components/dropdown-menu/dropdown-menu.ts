import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, signal } from '@angular/core';

interface DropdownOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-menu.html',
  styleUrl: './dropdown-menu.scss',
})
export class DropdownMenu {
  @ViewChild('singleMenuButton') singleMenuButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('multiMenuButton') multiMenuButton?: ElementRef<HTMLButtonElement>;

  readonly singleOptions: DropdownOption[] = [
    { id: 'angular', label: 'Angular' },
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'svelte', label: 'Svelte' },
  ];

  readonly multiOptions: DropdownOption[] = [
    { id: 'keyboard', label: 'Keyboard Support' },
    { id: 'screen-reader', label: 'Screen Reader Support' },
    { id: 'focus', label: 'Focus Management' },
    { id: 'contrast', label: 'Color Contrast' },
  ];

  singleOpen = signal(false);
  multiOpen = signal(false);

  activeSingleIndex = signal(0);
  activeMultiIndex = signal(0);

  selectedSingle = signal<string>('');
  selectedMulti = signal<string[]>([]);

  get selectedSingleLabel(): string {
    const found = this.singleOptions.find((option) => option.id === this.selectedSingle());
    return found?.label ?? 'Select a framework';
  }

  get selectedMultiLabel(): string {
    if (this.selectedMulti().length === 0) {
      return 'Select accessibility topics';
    }

    return this.multiOptions
      .filter((option) => this.selectedMulti().includes(option.id))
      .map((option) => option.label)
      .join(', ');
  }

  toggleSingleMenu(): void {
    const next = !this.singleOpen();
    this.singleOpen.set(next);
    this.multiOpen.set(false);

    if (next) {
      const selectedIndex = this.singleOptions.findIndex(
        (option) => option.id === this.selectedSingle(),
      );
      this.activeSingleIndex.set(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }

  toggleMultiMenu(): void {
    const next = !this.multiOpen();
    this.multiOpen.set(next);
    this.singleOpen.set(false);

    if (next) {
      this.activeMultiIndex.set(0);
    }
  }

  closeSingleMenu(): void {
    this.singleOpen.set(false);
  }

  closeMultiMenu(): void {
    this.multiOpen.set(false);
  }

  selectSingle(optionId: string): void {
    this.selectedSingle.set(optionId);
    this.closeSingleMenu();
    this.singleMenuButton?.nativeElement.focus();
  }

  toggleMultiSelection(optionId: string): void {
    const current = this.selectedMulti();

    if (current.includes(optionId)) {
      this.selectedMulti.set(current.filter((id) => id !== optionId));
      return;
    }

    this.selectedMulti.set([...current, optionId]);
  }

  isMultiSelected(optionId: string): boolean {
    return this.selectedMulti().includes(optionId);
  }

  onSingleButtonKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
      case 'Enter':
      case ' ': {
        event.preventDefault();
        if (!this.singleOpen()) {
          this.toggleSingleMenu();
        }
        break;
      }
      case 'Escape': {
        event.preventDefault();
        this.closeSingleMenu();
        break;
      }
    }
  }

  onMultiButtonKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
      case 'Enter':
      case ' ': {
        event.preventDefault();
        if (!this.multiOpen()) {
          this.toggleMultiMenu();
        }
        break;
      }
      case 'Escape': {
        event.preventDefault();
        this.closeMultiMenu();
        break;
      }
    }
  }

  onSingleOptionKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        this.activeSingleIndex.set(
          this.activeSingleIndex() < this.singleOptions.length - 1
            ? this.activeSingleIndex() + 1
            : 0,
        );
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        this.activeSingleIndex.set(
          this.activeSingleIndex() > 0
            ? this.activeSingleIndex() - 1
            : this.singleOptions.length - 1,
        );
        break;
      }
      case 'Home': {
        event.preventDefault();
        this.activeSingleIndex.set(0);
        break;
      }
      case 'End': {
        event.preventDefault();
        this.activeSingleIndex.set(this.singleOptions.length - 1);
        break;
      }
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const option = this.singleOptions[this.activeSingleIndex()];
        this.selectSingle(option.id);
        break;
      }
      case 'Escape': {
        event.preventDefault();
        this.closeSingleMenu();
        this.singleMenuButton?.nativeElement.focus();
        break;
      }
      case 'Tab': {
        this.closeSingleMenu();
        break;
      }
    }
  }

  onMultiOptionKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        this.activeMultiIndex.set(
          this.activeMultiIndex() < this.multiOptions.length - 1
            ? this.activeMultiIndex() + 1
            : 0,
        );
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        this.activeMultiIndex.set(
          this.activeMultiIndex() > 0
            ? this.activeMultiIndex() - 1
            : this.multiOptions.length - 1,
        );
        break;
      }
      case 'Home': {
        event.preventDefault();
        this.activeMultiIndex.set(0);
        break;
      }
      case 'End': {
        event.preventDefault();
        this.activeMultiIndex.set(this.multiOptions.length - 1);
        break;
      }
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const option = this.multiOptions[this.activeMultiIndex()];
        this.toggleMultiSelection(option.id);
        break;
      }
      case 'Escape': {
        event.preventDefault();
        this.closeMultiMenu();
        this.multiMenuButton?.nativeElement.focus();
        break;
      }
      case 'Tab': {
        this.closeMultiMenu();
        break;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (!target?.closest('.dropdown-menu')) {
      this.closeSingleMenu();
      this.closeMultiMenu();
    }
  }
}
