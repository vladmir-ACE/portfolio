import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';


export interface ExperienceCard {
  icon?: string;
  image?: string;
  title: string;
  periode: string;
  description?: string;
  class?: string;
  iconClass?: string;
}

@Component({
  selector: 'vlad-shared-ui-experience-card',
  standalone: true,
  imports: [CommonModule, NzIconModule],
  template: `
   <div class="w-full flex flex-col p-4 text-white border border-white rounded-[10px]" [ngClass]="params().class">

    <div class="flex justify-between">
      <div class="flex justify-start items-center gap-4">
        @if(params().icon ; as icon) {
        <div [ngClass]="params().iconClass">
          <nz-icon [nzType]="icon"> </nz-icon>
        </div>
        }
          @if(params().image ; as image) {
            <img [src]="image" alt="experience image" class="w-[32px] h-[32px] object-cover rounded-full"/>
          }

        <div class="text-medium font-bold">
          {{params().title}}
        </div>

      </div>
      <div class="text-xs-custom ">
          {{params().periode}}
      </div>
    </div>

    <div class="text-xs-custom">
      {{params().description}}
    </div>

   </div>

  `,
  styles: ``,
})
export class ExperienceCardComponent {

  params = input.required<ExperienceCard>();


}
