import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accordion } from './accordion';

describe('Accordion', () => {
  let component: Accordion;
  let fixture: ComponentFixture<Accordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordion],
    }).compileComponents();

    fixture = TestBed.createComponent(Accordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with first item open', () => {
    expect(component.isOpen(0)).toBeTruthy();
  });

  it('should toggle item closed when already open', () => {
    component.toggleItem(0);

    expect(component.isOpen(0)).toBeFalsy();
  });

  it('should toggle item open when closed', () => {
    component.toggleItem(1);

    expect(component.isOpen(1)).toBeTruthy();
  });

  it('should generate header id', () => {
    expect(component.getHeaderId(0)).toBe('accordion-header-keyboard-navigation');
  });

  it('should generate panel id', () => {
    expect(component.getPanelId(0)).toBe('accordion-panel-keyboard-navigation');
  });

  it('should render accordion trigger buttons', () => {
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelectorAll('button');

    expect(buttons.length).toBeTruthy();
  });
});
