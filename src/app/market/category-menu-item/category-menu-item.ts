import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {
  
  @Input() categoryName: string = '';

  @Output() itemclicked = new EventEmitter<string>();

  getEmoji(name: string): string {
    switch(name) {
      case 'Dogs': return '🐶';
      case 'Cats': return '🐱';
      case 'Birds': return '🕊️';
      case 'Fish': return '🐟';
      case 'Rabbits': return '🐰';
      default: return '🐾';
    }
  }

  onItemClick() {
    this.itemclicked.emit(this.categoryName);
  }
}