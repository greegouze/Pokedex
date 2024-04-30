import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxTypeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const type = control.value;
    if (!type || type.length <= 2) {
      return null;
    } else {
      return { tooMany: { expected: 2 } };
    }
  };
}
