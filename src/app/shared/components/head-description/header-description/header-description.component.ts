import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vlad-header-description',
  imports: [],
  template: `
   <div class="w-full gap-x-4 p-10 flex ">
   <div class="flex flex-col gap-5">
    <div class="text-[2px]  ">Hello I’am <span class="font-bold">Lanwi Vladmir</span></div>

   </div>
   <div class="w-[800px]">
   <img src="assets/head-frame.png" alt="header-img">
   </div>
  
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDescriptionComponent {

}
