import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDialog } from './modal-dialog';

describe('ModalDialog', () => {
  let component: ModalDialog;
  let fixture: ComponentFixture<ModalDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render dialog when closed', () => {
    component.open = false;
    fixture.detectChanges();

    const dialog = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(dialog).toBeFalsy();
  });

  it('should render dialog when open', () => {
    component.open = true;
    fixture.detectChanges();

    const dialog = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
  });

  it('should close when close method is called', () => {
    component.open = true;

    component.close();

    expect(component.open).toBeFalsy();
  });

  it('should close on backdrop click when enabled', () => {
    component.open = true;
    component.closeOnBackdropClick = true;

    component.onBackdropClick();

    expect(component.open).toBeFalsy();
  });

  it('should stay open on backdrop click when disabled', () => {
    component.open = true;
    component.closeOnBackdropClick = false;

    component.onBackdropClick();

    expect(component.open).toBeTruthy();
  });

  it('should close on escape key when open', () => {
    component.open = true;

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    component.onDocumentKeydown(event);

    expect(component.open).toBeFalsy();
  });
});
