import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavChildItem {
  label: string;
  route: string;
}

interface NavItem {
  label: string;
  route?: string;
  children?: NavChildItem[];
}

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {
  mobileMenuOpen = signal(false);
  componentsMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Home', route: '/' },
    {
      label: 'Components',
      children: [
        { label: 'Forms', route: '/forms' },
        { label: 'Modal Dialog', route: '/modal' },
        { label: 'Data Table', route: '/table' },
        { label: 'Dropdown Menu', route: '/dropdown' },
        { label: 'Tabs and Accordion', route: '/tabs-accordion' },
        { label: 'Toast and Date Picker', route: '/toast-datepicker' },
      ],
    },
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
          const firstItem = document.querySelector<HTMLElement>('#components-menu a');
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

  onNavigate(): void {
    this.closeProductsMenu();
    this.closeMobileMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.navigation-bar')) {
      this.closeProductsMenu();
    }
  }
}
