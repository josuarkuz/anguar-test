import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePicker } from './date-picker';

describe('DatePicker', () => {
  let component: DatePicker;
  let fixture: ComponentFixture<DatePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePicker],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start closed', () => {
    expect(component.isOpen()).toBeFalsy();
  });

  it('should toggle calendar open state', () => {
    component.toggleCalendar();
    expect(component.isOpen()).toBeTruthy();

    component.toggleCalendar();
    expect(component.isOpen()).toBeFalsy();
  });

  it('should select a date and close calendar', () => {
    const date = new Date(2026, 3, 10);

    component.toggleCalendar();
    component.selectDate(date);

    expect(component.selectedDate()).toEqual(new Date(2026, 3, 10));
    expect(component.isOpen()).toBeFalsy();
  });

  it('should move to previous and next month', () => {
    const initialMonth = component.visibleMonth().getMonth();

    component.nextMonth();
    expect(component.visibleMonth().getMonth()).toBe((initialMonth + 1) % 12);

    component.previousMonth();
    expect(component.visibleMonth().getMonth()).toBe(initialMonth);
  });

  it('should render trigger button', () => {
    const element: HTMLElement = fixture.nativeElement;
    const trigger = element.querySelector('#date-picker-trigger');

    expect(trigger).toBeTruthy();
  });
});
