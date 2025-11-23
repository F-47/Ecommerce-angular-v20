import { Component, computed, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';
import { CartItem } from 'src/app/components/cart/cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart = inject(CartService);
}
