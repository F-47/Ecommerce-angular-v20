import { inject, Injectable, signal } from '@angular/core';
import { TProduct } from '../models/products';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<TProduct[]>([]);
  router = inject(Router);

  addToCart(product: TProduct) {
    this.cart.set([...this.cart(), product]);
    toast.success(`${product.title} added to cart`, {
      action: {
        label: 'Go to Cart',
        onClick: () => this.router.navigateByUrl('/cart'),
      },
    });
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter((item) => item.id !== productId));
    toast.success(`Item removed from cart`);
  }

  constructor() {}
}
