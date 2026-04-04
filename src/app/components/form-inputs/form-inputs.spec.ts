import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormInputs } from './form-inputs';

describe('FormInputs', () => {
  let component: FormInputs;
  let fixture: ComponentFixture<FormInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputs],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start as not submitted', () => {
    expect(component.submitted()).toBeFalsy();
  });

  it('should be invalid when required fields are empty', () => {
    component.name = '';
    component.favoriteFramework = '';
    component.contactMethod = '';

    expect(component.isValid()).toBeFalsy();
  });

  it('should be valid when required fields are filled', () => {
    component.name = 'Jane Doe';
    component.favoriteFramework = 'angular';
    component.contactMethod = 'email';

    expect(component.isValid()).toBeTruthy();
  });

  it('should show name error only after submit', () => {
    component.name = '';

    expect(component.showNameError()).toBeFalsy();

    component.submitForm();

    expect(component.showNameError()).toBeTruthy();
  });

  it('should render required inputs', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('#full-name')).toBeTruthy();
    expect(element.querySelector('#favorite-framework')).toBeTruthy();
    expect(element.querySelector('#notes')).toBeTruthy();
  });
});
