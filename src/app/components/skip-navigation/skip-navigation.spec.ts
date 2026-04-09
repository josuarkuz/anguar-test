import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkipNavigation } from './skip-navigation';

describe('SkipNavigation', () => {
  let component: SkipNavigation;
  let fixture: ComponentFixture<SkipNavigation>;

  const mockScrollIntoView = (element: HTMLElement) => {
    const spy = vi.fn();
    element.scrollIntoView = spy;
    return spy;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(SkipNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    document.getElementById('main-content')?.remove();
    document.getElementById('main-navigation')?.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default skip links', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('a.skip-link');

    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('Skip to main content');
    expect(links[1].textContent?.trim()).toBe('Skip to primary navigation');
  });

  it('should focus target element when skip link is activated', () => {
    const target = document.createElement('main');
    target.id = 'main-content';

    const scrollIntoViewSpy = vi.fn();
    target.scrollIntoView = scrollIntoViewSpy;

    document.body.appendChild(target);

    const event = new MouseEvent('click');
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    component.onSkip('main-content', event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(target.getAttribute('tabindex')).toBe('-1');
    expect(document.activeElement).toBe(target);
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      block: 'start',
    });
  });

  it('should not overwrite existing tabindex on target element', () => {
    const target = document.createElement('header');
    target.id = 'main-navigation';
    target.setAttribute('tabindex', '-1');

    const scrollIntoViewSpy = vi.fn();
    target.scrollIntoView = scrollIntoViewSpy;

    document.body.appendChild(target);

    const event = new MouseEvent('click');

    component.onSkip('main-navigation', event);

    expect(target.getAttribute('tabindex')).toBe('-1');
    expect(document.activeElement).toBe(target);
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      block: 'start',
    });
  });

  it('should do nothing when target element does not exist', () => {
    const event = new MouseEvent('click');
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    component.onSkip('does-not-exist', event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
