import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, signal } from '@angular/core';

interface CalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isFocused: boolean;
}

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
})
export class DatePicker {
  readonly weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  readonly isOpen = signal(false);
  readonly visibleMonth = signal(this.startOfMonth(new Date()));
  readonly selectedDate = signal<Date | null>(null);
  readonly focusedDate = signal(this.stripTime(new Date()));

  readonly monthLabel = computed(() => {
    return this.visibleMonth().toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  });

  readonly calendarDays = computed(() => {
    const monthStart = this.visibleMonth();
    const startDate = new Date(monthStart);
    startDate.setDate(startDate.getDate() - monthStart.getDay());

    const selected = this.selectedDate();
    const focused = this.focusedDate();
    const today = this.stripTime(new Date());

    const days: CalendarDay[] = [];

    for (let index = 0; index < 42; index += 1) {
      const current = new Date(startDate);
      current.setDate(startDate.getDate() + index);

      days.push({
        date: current,
        dayNumber: current.getDate(),
        isCurrentMonth: current.getMonth() === monthStart.getMonth(),
        isToday: this.isSameDate(current, today),
        isSelected: selected ? this.isSameDate(current, selected) : false,
        isFocused: this.isSameDate(current, focused),
      });
    }

    return days;
  });

  get selectedDateLabel(): string {
    const value = this.selectedDate();

    if (!value) {
      return 'Select a date';
    }

    return value.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  toggleCalendar(): void {
    const next = !this.isOpen();
    this.isOpen.set(next);

    if (next) {
      const baseDate = this.selectedDate() ?? new Date();
      const normalized = this.stripTime(baseDate);
      this.focusedDate.set(normalized);
      this.visibleMonth.set(this.startOfMonth(normalized));
    }
  }

  closeCalendar(): void {
    this.isOpen.set(false);
  }

  selectDate(date: Date): void {
    const normalized = this.stripTime(date);
    this.selectedDate.set(normalized);
    this.focusedDate.set(normalized);
    this.visibleMonth.set(this.startOfMonth(normalized));
    this.closeCalendar();
  }

  selectToday(): void {
    const today = this.stripTime(new Date());
    this.selectDate(today);
  }

  previousMonth(): void {
    const previous = new Date(this.visibleMonth());
    previous.setMonth(previous.getMonth() - 1);
    this.visibleMonth.set(this.startOfMonth(previous));
    this.syncFocusedMonth();
  }

  nextMonth(): void {
    const next = new Date(this.visibleMonth());
    next.setMonth(next.getMonth() + 1);
    this.visibleMonth.set(this.startOfMonth(next));
    this.syncFocusedMonth();
  }

  onDayKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.moveFocusedDate(-1);
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.moveFocusedDate(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.moveFocusedDate(-7);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.moveFocusedDate(7);
        break;
      case 'Home':
        event.preventDefault();
        this.moveToStartOfWeek();
        break;
      case 'End':
        event.preventDefault();
        this.moveToEndOfWeek();
        break;
      case 'PageUp':
        event.preventDefault();
        this.moveFocusedMonth(-1);
        break;
      case 'PageDown':
        event.preventDefault();
        this.moveFocusedMonth(1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectDate(this.focusedDate());
        break;
      case 'Escape':
        event.preventDefault();
        this.closeCalendar();
        break;
    }
  }

  setFocusedDate(date: Date): void {
    const normalized = this.stripTime(date);
    this.focusedDate.set(normalized);

    if (
      normalized.getMonth() !== this.visibleMonth().getMonth() ||
      normalized.getFullYear() !== this.visibleMonth().getFullYear()
    ) {
      this.visibleMonth.set(this.startOfMonth(normalized));
    }
  }

  isSameDate(first: Date, second: Date): boolean {
    return (
      first.getFullYear() === second.getFullYear()
      && first.getMonth() === second.getMonth()
      && first.getDate() === second.getDate()
    );
  }

  formatAriaLabel(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  trackByDate(_: number, day: CalendarDay): string {
    return day.date.toISOString();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isOpen()) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeCalendar();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (!target?.closest('.date-picker')) {
      this.closeCalendar();
    }
  }

  private moveFocusedDate(days: number): void {
    const next = new Date(this.focusedDate());
    next.setDate(next.getDate() + days);
    this.setFocusedDate(next);
  }

  private moveFocusedMonth(months: number): void {
    const next = new Date(this.focusedDate());
    next.setMonth(next.getMonth() + months);
    this.setFocusedDate(next);
  }

  private moveToStartOfWeek(): void {
    const next = new Date(this.focusedDate());
    next.setDate(next.getDate() - next.getDay());
    this.setFocusedDate(next);
  }

  private moveToEndOfWeek(): void {
    const next = new Date(this.focusedDate());
    next.setDate(next.getDate() + (6 - next.getDay()));
    this.setFocusedDate(next);
  }

  private syncFocusedMonth(): void {
    const focused = this.focusedDate();
    const visible = this.visibleMonth();

    if (
      focused.getMonth() !== visible.getMonth()
      || focused.getFullYear() !== visible.getFullYear()
    ) {
      const next = new Date(visible);
      const maxDay = new Date(
        visible.getFullYear(),
        visible.getMonth() + 1,
        0,
      ).getDate();

      next.setDate(Math.min(focused.getDate(), maxDay));
      this.focusedDate.set(this.stripTime(next));
    }
  }

  private startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  private stripTime(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
