import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-600 px-3 py-1 rounded text-white" (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButton {
  label = input<string>();
  btnClicked = output();
}
