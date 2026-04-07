import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';

type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastItem {
  id: number;
  type: ToastType;
  title: string;
  message: string;
  autoDismiss: boolean;
}

@Component({
  selector: 'app-toast-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-alert.html',
  styleUrl: './toast-alert.scss',
})
export class ToastAlert implements OnDestroy {
  private nextId = 1;
  private timeoutMap = new Map<number, ReturnType<typeof setTimeout>>();

  toasts = signal<ToastItem[]>([]);

  showToast(
    type: ToastType,
    title: string,
    message: string,
    autoDismiss = true,
  ): void {
    const id = this.nextId++;
    const toast: ToastItem = {
      id,
      type,
      title,
      message,
      autoDismiss,
    };

    this.toasts.set([...this.toasts(), toast]);

    if (autoDismiss) {
      const timeout = setTimeout(() => {
        this.dismissToast(id);
      }, 5000);

      this.timeoutMap.set(id, timeout);
    }
  }

  showSuccessToast(): void {
    this.showToast(
      'success',
      'Changes saved',
      'Your accessibility settings were saved successfully.',
      true,
    );
  }

  showInfoToast(): void {
    this.showToast(
      'info',
      'Draft available',
      'A draft version of the component documentation is now available.',
      true,
    );
  }

  showWarningToast(): void {
    this.showToast(
      'warning',
      'Incomplete fields',
      'Some required fields still need attention before submission.',
      false,
    );
  }

  showErrorToast(): void {
    this.showToast(
      'error',
      'Save failed',
      'We could not save your changes. Please try again.',
      false,
    );
  }

  dismissToast(id: number): void {
    const timeout = this.timeoutMap.get(id);

    if (timeout) {
      clearTimeout(timeout);
      this.timeoutMap.delete(id);
    }

    this.toasts.set(this.toasts().filter((toast) => toast.id !== id));
  }

  getToastRole(type: ToastType): 'status' | 'alert' {
    return type === 'error' || type === 'warning' ? 'alert' : 'status';
  }

  ngOnDestroy(): void {
    this.timeoutMap.forEach((timeout) => clearTimeout(timeout));
    this.timeoutMap.clear();
  }
}
