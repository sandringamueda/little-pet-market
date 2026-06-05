import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim();
    if (!value) return null;

    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(value)) {
      return { invalidName: 'Name can only contain letters and spaces' };
    }
    if (value.length < 5) {
      return { minlength: 'Name must be at least 5 characters' };
    }
    return null;
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim();
    if (!value) return null;

    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value) ? null : { invalidPhone: 'Phone number must be exactly 10 digits' };
  };
}

export function canadaOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'Canada' ? null : { notCanada: 'Only Canada is currently supported' };
  };
}