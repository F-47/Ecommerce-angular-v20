import { Component } from '@angular/core';
import { Hero } from '../../components/home/hero/hero';
import { Sponsors } from '../../components/home/sponsors/sponsors';
import { Categories } from '../../components/home/categories/categories';
import { FeaturedProducts } from '../../components/home/featured-products/featured-products';

@Component({
  selector: 'app-home',
  imports: [Hero, Sponsors, Categories, FeaturedProducts],
  template: `
    <app-hero></app-hero>
    <app-sponsors></app-sponsors>
    <app-categories></app-categories>
    <app-featured-products></app-featured-products>
  `,
  styles: ``,
})
export class Home {}
