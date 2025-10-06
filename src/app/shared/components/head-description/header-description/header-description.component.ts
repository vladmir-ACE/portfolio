import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vlad-header-description',
  imports: [],
  template: `
   <div class="w-full gap-x-4 px-10 bg-red-200 flex justify-between text-vlad">
   <div class="flex  flex-col gap-5">
    <div class="text-[30px]">Hello I’am <span class="font-bold">Lanwi Vladmir.</span></div>
    <div class="text-[30px]">Full-Stack <span class="font-bold">Web and Mobile Developer</span></div>

   </div>

   <div class="">
   <img src="assets/head-frame.png" alt="header-img" width="500" height="300"/>
   </div>
  
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDescriptionComponent {

}
