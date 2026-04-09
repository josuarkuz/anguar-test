import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render main heading', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent?.trim()).toBe(
      'Accessible Angular Component Library',
    );
  });

  it('should render skip navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-skip-navigation')).toBeTruthy();
  });

  it('should render main landmark', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main#main-content');

    expect(main).toBeTruthy();
  });

  it('should open modal when openModal is called', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.openModal();

    expect(app.isModalOpen()).toBe(true);
  });

  it('should update modal state from openChange handler', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.onModalOpenChange(true);
    expect(app.isModalOpen()).toBe(true);

    app.onModalOpenChange(false);
    expect(app.isModalOpen()).toBe(false);
  });

  it('should close modal when closeModal is called', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.isModalOpen.set(true);
    app.closeModal();

    expect(app.isModalOpen()).toBe(false);
  });
});
