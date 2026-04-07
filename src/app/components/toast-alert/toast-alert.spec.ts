import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastAlert } from './toast-alert';

describe('ToastAlert', () => {
  let component: ToastAlert;
  let fixture: ComponentFixture<ToastAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a toast', () => {
    component.showToast('success', 'Saved', 'Changes saved successfully.');

    expect(component.toasts().length).toBe(1);
  });

  it('should dismiss a toast', () => {
    component.showToast('success', 'Saved', 'Changes saved successfully.', false);
    const toastId = component.toasts()[0].id;

    component.dismissToast(toastId);

    expect(component.toasts().length).toBe(0);
  });

  it('should return alert role for warning and error', () => {
    expect(component.getToastRole('warning')).toBe('alert');
    expect(component.getToastRole('error')).toBe('alert');
  });

  it('should return status role for success and info', () => {
    expect(component.getToastRole('success')).toBe('status');
    expect(component.getToastRole('info')).toBe('status');
  });

  it('should render action buttons', () => {
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelectorAll('.toast-alert__action-button');

    expect(buttons.length).toBe(4);
  });
});
