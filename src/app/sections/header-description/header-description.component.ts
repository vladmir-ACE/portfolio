import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vlad-header-description',
  imports: [],
  template: `
   <div class="w-full gap-x-4 px-10  flex justify-between ">

   <div class="flex justify-center flex-col gap-2 lg:gap-4">
      <div class="text-medium md:text-large">
        👋 I'm <span class="font-bold">Lanwi Vladmir</span>
      </div>
      <div class="text-medium md:text-large">
        Full-Stack <span class="font-bold">Web & Mobile Developer</span>
      </div>
      <div class="text-medium md:text-large">
        Turning ideas into elegant digital experiences — based in <span class="font-bold">Togo</span>
      </div>
  </div>


   <div>
     <img src="assets/head-frame.png" alt="header-img" width="500" height="596"/>
   </div>

   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDescriptionComponent {

}
