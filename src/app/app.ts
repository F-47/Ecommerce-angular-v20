import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Footer } from './components/global/footer/footer';
import { Header } from './components/global/header/header';
import { ZardToastComponent } from './components/ui/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LucideAngularModule, Footer, ZardToastComponent],
  template: `
    <app-header />
    <router-outlet />
    <z-toaster richColors />
    <app-footer />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('angular-ecomm');
}
