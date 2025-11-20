import { Component, inject, signal } from '@angular/core';
import { TProduct } from '../../../models/products';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  standalone: true,

  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  route = inject(ActivatedRoute);
  product = signal<TProduct | null>(null);

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
