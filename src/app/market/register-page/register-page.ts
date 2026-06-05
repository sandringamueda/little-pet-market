import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { nameValidator, phoneValidator, canadaOnlyValidator } from '../validators';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {

  registerForm: FormGroup;

  provinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia',
    'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, phoneValidator()]],
      dateOfBirth: ['', Validators.required],
      streetAddress: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      province: ['', Validators.required],
      country: ['Canada', [Validators.required, canadaOnlyValidator()]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      alert('Registration Successful! Welcome to Everyday Market!');
      
      this.router.navigate(['/products']);
      
      console.log('Registration Data:', this.registerForm.value);
    } else {
      alert('Registration failed. Please fix the errors in the form before submitting.');
    }
  }
}