import { Component, computed, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart = inject(CartService);

  shipping = 50;
  subTotal = computed(() => {
    return this.cart.cart().reduce((sum, item) => sum + item.price, 0);
  });
  total = computed(() => {
    return this.cart.cart().reduce((sum, item) => sum + item.price, 0) + this.shipping;
  });
}
