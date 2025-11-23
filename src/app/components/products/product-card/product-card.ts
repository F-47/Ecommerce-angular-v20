import { Component, inject, input, signal } from '@angular/core';
import { TProduct } from '../../../models/products';
import { Cart } from '../../../services/cart';
import { ZardButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-product-card',
  imports: [ZardButtonComponent],
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<TProduct>();
  cart = inject(Cart);
}
