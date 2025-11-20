import { Component, signal } from '@angular/core';
import { ProductCard } from '../../products/product-card/product-card';
import { TProduct } from '../../../models/products';

@Component({
  selector: 'app-featured-products',
  imports: [ProductCard],
  templateUrl: './featured-products.html',
})
export class FeaturedProducts {
  featuredProducts = signal<TProduct[]>([]);

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.featuredProducts.set(data.slice(0, 4));
  }
}
