import { Routes } from '@angular/router';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';
import { Product } from './pages/products-list/product/product';
import { ProductsList } from './pages/products-list/products-list';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsList,
  },
  {
    path: 'products/:id',
    pathMatch: 'full',
    component: Product,
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: Cart,
  },
];
