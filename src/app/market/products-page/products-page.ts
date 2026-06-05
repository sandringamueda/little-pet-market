import { Component } from '@angular/core';
import { CategoryMenu } from '../category-menu/category-menu';
import { Category } from '../models/category';

@Component({
  selector: 'app-products-page',
  imports: [CategoryMenu],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  
  categoryList: Category[] = [
    { id: 1, name: 'Cats' },
    { id: 2, name: 'Dogs' },
    { id: 3, name: 'Birds' }, 
    { id: 4, name: 'Fish' },
    { id: 5, name: 'Rabbits' },
  ];

  onCategorySelected(category: Category) {
    alert(`You selected: ${category.name} ❤️`);
  }
}