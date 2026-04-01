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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
