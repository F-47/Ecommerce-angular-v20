import { Component, signal } from '@angular/core';
import { ProductCard } from '../../products/product-card/product-card';
import { TProduct } from '../../../models/products';
import { ZardLoaderComponent } from '../../ui/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  imports: [ProductCard, ZardLoaderComponent, RouterLink],
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
