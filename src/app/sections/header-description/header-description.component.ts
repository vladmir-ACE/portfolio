import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconCard, IconCardComponent } from '../../shared/components/icon-card/icon-card.component';

@Component({
  selector: 'vlad-header-description',
  imports: [IconCardComponent],
  template: `
   <div class="w-full   flex  flex-col-reverse gap-[10px]  lg:flex-row  lg:justify-between  ">

   <div class="flex justify-center flex-col gap-2 lg:max-w-[600px]">
      <div class="text-medium md:text-large">
        👋 I'm <span class="font-bold">Lanwi Vladmir</span>
      </div>
      <div class="text-medium md:text-large">
        Full-Stack <span class="font-bold">Web & Mobile Developer</span>
      </div>
      <div class="text-medium md:text-large">
        Turning ideas into elegant digital experiences — based in <span class="font-bold">Togo</span>
      </div>

      <div>
      I design and develop modern web and mobile applications with a strong focus on scalability,
      performance, and clean architecture.
      From backend APIs to intuitive user interfaces, I enjoy building complete digital solutions.
      I'm constantly learning new technologies to deliver reliable, maintainable, and future-proof products.
      </div>

      <div class="flex gap-x-2">
    @for (socialMedia of socialMedia; track $index) {

      <vlad-shared-ui-icon-card [iconCardInputs]="socialMedia" />

    }

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

  socialMedia: IconCard[] = [
    {
      icon: 'vlad:instagram',
      size: '56px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      iconClass: "text-[20px]"
    },
    {
      icon: 'vlad:whatsapp',
      size: '56px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      iconClass: "text-[20px]"
    },
    {
      icon: 'vlad:linkedin',
      size: '56px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      iconClass: "text-[20px]"
    },

  ];

}
