import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vlad-header-description',
  imports: [],
  template: `
   <div class="w-full gap-x-4 px-10  mt-5 flex justify-start ">
   <div class="flex  justify-center flex-col gap-2 lg:gap-5">
    <div class="text-medium md:text-large">Hello I’am <span class="font-bold">Lanwi Vladmir.</span></div>
    <div class="text-medium md:text-large">Full-Stack <span class="font-bold">Web and Mobile Developer</span></div>
    <div class="text-medium md:text-large">Based in <span class="font-bold">TOGO</span></div>
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
