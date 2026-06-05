import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItem } from '../category-menu-item/category-menu-item';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItem],
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css',
})
export class CategoryMenu {
  
  @Input() categories: Category[] = [];

  @Output() categorySelected = new EventEmitter<Category>();

  onItemClicked(category: Category) {
    this.categorySelected.emit(category);
  }
}