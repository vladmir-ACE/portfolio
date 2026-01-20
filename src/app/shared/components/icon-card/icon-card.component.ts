import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

export interface IconCard {
  icon: string;
  size: string;
  title?: string;
  link?: string;
  class?: string;
  iconClass?: string;
}
@Component({
  selector: 'vlad-shared-ui-icon-card',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  template: `
  <div class=" flex flex-col border-2 rounded-[4px] border-black  items-center justify-center" [style.width]="iconCardInputs().size" [style.height]="iconCardInputs().size" [ngClass]="iconCardInputs().class">

  <div [ngClass]="iconCardInputs().iconClass">
     <nz-icon [nzType]="iconCardInputs().icon"  />
  </div>


  @if(iconCardInputs().title){
    <div class="text-xs-custom font-bold">{{iconCardInputs().title}}</div>
  }

  </div>

  `,
  styles: ``,
})
export class IconCardComponent {
  iconCardInputs = input.required<IconCard>();

}
