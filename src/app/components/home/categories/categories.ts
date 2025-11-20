import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
})
export class Categories {
  categories = signal<string[]>([]);

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    this.categories.set(data);
  }
}
