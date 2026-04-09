import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavigationBar } from './navigation-bar';

describe('NavigationBarComponent', () => {
  let component: NavigationBar;
  let fixture: ComponentFixture<NavigationBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile menu', () => {
    expect(component.mobileMenuOpen()).toBeFalsy();

    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBeTruthy();

    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBeFalsy();
  });

  it('should toggle dropdown menu', () => {
    expect(component.componentsMenuOpen()).toBeFalsy();

    component.toggleProductsMenu();
    expect(component.componentsMenuOpen()).toBeTruthy();

    component.toggleProductsMenu();
    expect(component.componentsMenuOpen()).toBeFalsy();
  });

  it('should close menus on navigate', () => {
    component.mobileMenuOpen.set(true);
    component.componentsMenuOpen.set(true);

    component.onNavigate();

    expect(component.mobileMenuOpen()).toBeFalsy();
    expect(component.componentsMenuOpen()).toBeFalsy();
  });

  it('should render navigation landmark', () => {
    const element: HTMLElement = fixture.nativeElement;
    const nav = element.querySelector('nav[aria-label="Primary"]');

    expect(nav).toBeTruthy();
  });

  it('should render router links', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('a');

    expect(links.length).toBeGreaterThan(0);
  });
});
