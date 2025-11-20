import { Component, signal } from '@angular/core';
import { ZardLoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-categories',
  imports: [ZardLoaderComponent],
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
