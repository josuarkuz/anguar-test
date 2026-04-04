import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tabs } from './tabs';

describe('Tabs', () => {
  let component: Tabs;
  let fixture: ComponentFixture<Tabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabs],
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with first tab selected', () => {
    expect(component.activeIndex()).toBe(0);
  });

  it('should select the requested tab', () => {
    component.selectTab(2);

    expect(component.activeIndex()).toBe(2);
  });

  it('should generate tab id', () => {
    expect(component.getTabId(0)).toBe('tab-overview');
  });

  it('should generate panel id', () => {
    expect(component.getPanelId(0)).toBe('panel-overview');
  });

  it('should render tablist', () => {
    const element: HTMLElement = fixture.nativeElement;
    const tablist = element.querySelector('[role="tablist"]');

    expect(tablist).toBeTruthy();
  });
});
