import { computed, inject, Injectable, signal } from '@angular/core';
import { TCartItem, TProduct } from '../models/products';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<TCartItem[]>(JSON.parse(localStorage.getItem('cartItems') || '[]'));
  router = inject(Router);

  addToCart(product: TProduct) {
    const items = this.cart();
    const existing = items.find((item) => item.id === product.id);

    let updated: TCartItem[];

    if (existing) {
      updated = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...items, { ...product, quantity: 1 }];
    }
    this.cart.set(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    toast.success(`${product.title} added to cart`, {
      action: {
        label: 'Go to Cart',
        onClick: () => this.router.navigateByUrl('/cart'),
      },
    });
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter((item) => item.id !== productId));
    localStorage.setItem('cartItems', JSON.stringify(this.cart()));
    toast.success(`Item removed from cart`);
  }

  increaseQuantity(productId: number) {
    const updated = this.cart().map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    this.cart.set(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  }

  decreaseQuantity(productId: number) {
    const updated = this.cart().map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    this.cart.set(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  }

  shipping = 50;
  subTotal = computed(() => this.cart().reduce((sum, item) => sum + item.price * item.quantity, 0));
  total = computed(() => this.subTotal() + this.shipping);

  constructor() {}
}
