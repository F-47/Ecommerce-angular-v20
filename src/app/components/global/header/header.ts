import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TProduct } from 'src/app/models/products';
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  standalone: true,
  templateUrl: './header.html',
})
export class Header {
  // cart
  cart = inject(Cart);

  // products search
  products = signal<TProduct[]>([]);

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);
  }

  search = signal('');
  updateSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.set(value);
  }

  filteredProducts = computed(() =>
    this.products().filter((item) => item.title.toLowerCase().includes(this.search().toLowerCase()))
  );

  selectProduct(product: TProduct) {
    this.search.set(product.title);
  }
}
