import {FormGroup } from '@angular/forms';

export class FormUtils {

  static isInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  static getError(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['min']) return 'Value must be greater than 0';
    if (control.errors['maxlength']) return 'Maximum length exceeded';
    if (control.errors['email']) return 'Invalid email address';

    return 'Invalid value';
  }
}
