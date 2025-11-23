import { Component, inject, input } from '@angular/core';
import { TCartItem } from 'src/app/models/products';
import { Cart as CartService } from '../../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  product = input.required<TCartItem>();
  cart = inject(CartService);
  increase() {
    this.cart.increaseQuantity(this.product().id);
  }

  decrease() {
    this.cart.decreaseQuantity(this.product().id);
  }
}
