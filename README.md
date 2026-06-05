# Purpose
    This is a pet marketplace web application developed using Angular. The project showcases current trends in angular development including standalone components, routing, reactive forms, form validation, and custom validators.

## Assignment Learning Outcomes

    This project demonstrates:

    - Angular Router for navigation between pages (`/register` and `products`)
    - Reactive Forms with `ReactiveFormsModule`
    - Built-in and Custom Validators
    - Form validation with visual feedback
    - Navigation after successful form submission
    - Component organization and reusability
    - Responsive and clean UI design


# Project structure
    src/
    └── app/
    ├── shared/
    │   └── header/
    ├── market/
    │   ├── register-page/  ← New: Registration with validation
    │   ├── products-page/
    │   ├── category-menu/
    │   ├── category-menu-item/
    │   ├── models/
    │   └── validators.ts   ← Custom validators
    ├── app.routes.ts
    └── app.ts


# Key Features

## 1. Routing
    - `/register` → Registration Form
    - `/products` → Pet Category Browser
    - Default route redirects to `/register`

## 2. Registration Form (Reactive)
    - Fields: Name, Email, Phone, Date of Birth, Street Address, Province, Country, Terms & Conditions
    - Real-time validation with error messages
    - Submit button disabled until form is valid
    - Navigates to `/products` on successful submission

## 3. Custom Validators
    - `nameValidator()` — Letters and spaces only, minimum 5 characters
    - `phoneValidator()` — Exactly 10 digits
    - `canadaOnlyValidator()` — Must select Canada

# Components

    - **Header** — Navigation with links to Register and Browse Pets
    - **RegisterPage** — Reactive form with validation and routing
    - **ProductsPage** — Original pet category selection (from Assignment 1)

# AngularMarket

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# AI Usage
- Guidance on implementing Reactive Forms and FormBuilder
- Help creating custom validators (nameValidator, phoneValidator, canadaOnlyValidator) following Angular best practices
- Assistance with Router injection
- Assistance in programmatic navigation after form submission
- Debugging errors