import { Component, inject, signal } from '@angular/core';
import { TCartItem, TProduct } from '../../../models/products';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ZardLoaderComponent } from 'src/app/components/ui/loader/loader.component';
import { LucideAngularModule } from 'lucide-angular';
import { Cart } from '../../../services/cart';
import { ZardButtonComponent } from 'src/app/components/ui/button/button.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ZardLoaderComponent, LucideAngularModule, ZardButtonComponent],
  standalone: true,
  templateUrl: './product.html',
})
export class Product {
  route = inject(ActivatedRoute);
  cart = inject(Cart);
  product = signal<TCartItem | null>(null);

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    this.product.set(data);
  }
}
// export class Product {
//   private route = inject(ActivatedRoute);
//   private id = this.route.snapshot.paramMap.get('id');

//   productResource = resource<{}, TProduct>({
//     loader: async ({ abortSignal }) => {
//       if (!this.id) return null as any;
//       const res = await fetch(`https://fakestoreapi.com/products/${this.id}`, {
//         signal: abortSignal,
//       });
//       return res.json();
//     },
//   });
// }
