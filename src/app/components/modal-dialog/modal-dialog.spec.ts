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
    fixture.componentRef.setInput('open', false);
    fixture.detectChanges();

    const dialog = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(dialog).toBeFalsy();
  });

  it('should render dialog when open', async () => {
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    await fixture.whenStable();

    const dialog = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
  });

  it('should close when close method is called', () => {
    component.open = true;

    component.close();

    expect(component.open).toBeFalsy();
  });

  it('should emit openChange when closed', () => {
    component.open = true;
    const emitSpy = vi.spyOn(component.openChange, 'emit');

    component.close();

    expect(emitSpy).toHaveBeenCalledWith(false);
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
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    component.onDocumentKeydown(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(component.open).toBeFalsy();
  });
});
