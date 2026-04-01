import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkipNavigation } from './skip-navigation';
import { spyOn } from 'storybook/test';


describe('SkipNavigation', () => {
  let component: SkipNavigation;
  let fixture: ComponentFixture<SkipNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(SkipNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default skip links', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('a.skip-link');

    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('Skip to main content');
    expect(links[1].textContent?.trim()).toBe('Skip to navigation');
  });

  it('should focus target element when skip link is activated', () => {
    const target = document.createElement('main');
    target.id = 'main-content';
    document.body.appendChild(target);

    const event = new MouseEvent('click');
    spyOn(event, 'preventDefault');

    component.onSkip('main-content', event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(document.activeElement).toBe(target);

    document.body.removeChild(target);
  });
});
