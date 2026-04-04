import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownMenu } from './dropdown-menu';

describe('DropdownMenu', () => {
  let component: DropdownMenu;
  let fixture: ComponentFixture<DropdownMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle single menu', () => {
    expect(component.singleOpen()).toBeFalsy();

    component.toggleSingleMenu();
    expect(component.singleOpen()).toBeTruthy();

    component.toggleSingleMenu();
    expect(component.singleOpen()).toBeFalsy();
  });

  it('should toggle multi menu', () => {
    expect(component.multiOpen()).toBeFalsy();

    component.toggleMultiMenu();
    expect(component.multiOpen()).toBeTruthy();

    component.toggleMultiMenu();
    expect(component.multiOpen()).toBeFalsy();
  });

  it('should select a single option', () => {
    component.selectSingle('angular');

    expect(component.selectedSingle()).toBe('angular');
    expect(component.singleOpen()).toBeFalsy();
  });

  it('should toggle multi option selection', () => {
    component.toggleMultiSelection('keyboard');
    expect(component.isMultiSelected('keyboard')).toBeTruthy();

    component.toggleMultiSelection('keyboard');
    expect(component.isMultiSelected('keyboard')).toBeFalsy();
  });

  it('should render trigger buttons', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('#single-menu-button')).toBeTruthy();
    expect(element.querySelector('#multi-menu-button')).toBeTruthy();
  });
});
