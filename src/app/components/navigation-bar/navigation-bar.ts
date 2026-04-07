import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

interface NavChildItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChildItem[];
}

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {
  mobileMenuOpen = signal(false);
  componentsMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    {
      label: 'Components',
      children: [
        { label: 'Skip Navigation', href: '#skip-navigation' },
        { label: 'Navigation Bar', href: '#navigation-bar' },
        { label: 'Modal Dialog', href: '#modal-dialog' },
        { label: 'Form Inputs', href: '#form-inputs' },
        { label: 'Data Table', href: '#data-table' },
        { label: 'Dropdown Menu', href: '#dropdown-menu' },
        { label: 'Tabs', href: '#tabs' },
        { label: 'Accordion', href: '#accordion' },
        { label: 'Toast Alert', href: '#toast-alert' },
        { label: 'Date Picker', href: '#date-picker' },
      ],
    },
    { label: 'Documentation', href: '#documentation' },
    { label: 'Contact', href: '#contact' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleProductsMenu(): void {
    this.componentsMenuOpen.update((value) => !value);
  }

  openProductsMenu(): void {
    this.componentsMenuOpen.set(true);
  }

  closeProductsMenu(): void {
    this.componentsMenuOpen.set(false);
  }

  onMenuButtonKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.openProductsMenu();
        setTimeout(() => {
          const firstItem = document.querySelector<HTMLElement>(
            '#components-menu a'
          );
          firstItem?.focus();
        });
        break;
      case 'Escape':
        event.preventDefault();
        this.closeProductsMenu();
        break;
    }
  }

  onDropdownItemKeydown(event: KeyboardEvent): void {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>('#components-menu a')
    );

    const currentIndex = items.findIndex((item) => item === document.activeElement);

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[nextIndex]?.focus();
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prevIndex]?.focus();
        break;
      }
      case 'Home':
        event.preventDefault();
        items[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        items[items.length - 1]?.focus();
        break;
      case 'Escape':
        event.preventDefault();
        this.closeProductsMenu();
        document.getElementById('components-menu-button')?.focus();
        break;
      case 'Tab':
        this.closeProductsMenu();
        break;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.navigation-bar')) {
      this.closeProductsMenu();
    }
  }
}
