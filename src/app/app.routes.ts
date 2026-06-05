import { Routes } from '@angular/router';
import { RegisterPage } from './market/register-page/register-page';
import { ProductsPage } from './market/products-page/products-page';

export const routes: Routes = [
  { path: 'register', component: RegisterPage },
  { path: 'products', component: ProductsPage },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', redirectTo: '/register' }
];