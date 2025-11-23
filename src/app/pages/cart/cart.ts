import { Component, computed, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';
import { CartItem } from 'src/app/components/cart/cart-item/cart-item';
import { Router } from '@angular/router';
import { ZardButtonComponent } from 'src/app/components/ui/button/button.component';

@Component({
  selector: 'app-cart',
  imports: [CartItem, ZardButtonComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  router = inject(Router);
  cart = inject(CartService);
  disableCheckOut = computed(() => this.cart.cart().length === 0);

  goToCheckout() {
    if (this.disableCheckOut()) return;
    this.router.navigateByUrl('/checkout');
  }
}
