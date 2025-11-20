import { Component, signal } from '@angular/core';
import { ProductCard } from '../../components/products/product-card/product-card';
import { TProduct } from '../../models/products';
import { ZardLoaderComponent } from 'src/app/components/ui/loader/loader.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, ZardLoaderComponent],
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
