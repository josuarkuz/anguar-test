import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationBar } from './navigation-bar';

describe('NavigationBarComponent', () => {
  let component: NavigationBar;
  let fixture: ComponentFixture<NavigationBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBar],
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
    expect(component.productsMenuOpen()).toBeFalsy();

    component.toggleProductsMenu();
    expect(component.productsMenuOpen()).toBeTruthy();

    component.toggleProductsMenu();
    expect(component.productsMenuOpen()).toBeFalsy();
  });

  it('should render navigation landmark', () => {
    const element: HTMLElement = fixture.nativeElement;
    const nav = element.querySelector('nav[aria-label="Primary"]');

    expect(nav).toBeTruthy();
  });
});
