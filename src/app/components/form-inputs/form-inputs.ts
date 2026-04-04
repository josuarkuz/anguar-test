import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ContactMethod = 'email' | 'phone';

@Component({
  selector: 'app-form-inputs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-inputs.html',
  styleUrl: './form-inputs.scss',
})
export class FormInputs {
  name = '';
  favoriteFramework = '';
  contactMethod: ContactMethod | '' = '';
  subscribeToUpdates = false;
  notes = '';

  submitted = signal(false);

  submitForm(): void {
    this.submitted.set(true);

    if (this.isValid()) {
      console.log('Form submitted', {
        name: this.name,
        favoriteFramework: this.favoriteFramework,
        contactMethod: this.contactMethod,
        subscribeToUpdates: this.subscribeToUpdates,
        notes: this.notes,
      });
    }
  }

  isValid(): boolean {
    return (
      this.name.trim().length > 0 &&
      this.favoriteFramework.trim().length > 0 &&
      this.contactMethod !== ''
    );
  }

  showNameError(): boolean {
    return this.submitted() && this.name.trim().length === 0;
  }

  showFrameworkError(): boolean {
    return this.submitted() && this.favoriteFramework.trim().length === 0;
  }

  showContactMethodError(): boolean {
    return this.submitted() && this.contactMethod === '';
  }
}
