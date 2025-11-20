import { Component, signal } from '@angular/core';
import { ProductCard } from '../../components/products/product-card/product-card';
import { TProduct } from '../../models/products';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: `./products-list.html`,
  styleUrl: './products-list.css',
})
export class ProductsList {
  products = signal<TProduct[]>([]);

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);
  }
}
