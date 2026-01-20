import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCard, IconCardComponent } from '../../shared/components/icon-card/icon-card.component';

@Component({
  selector: 'vlad-landing-section-skills',
  standalone: true,
  imports: [CommonModule, IconCardComponent],
  template: `

  <div class="w-full">
      <div class="text-center text-medium md:text-large"> My <span class="font-bold">Skills</span> </div>

      <div class="mt-5 flex gap-4 items-center justify-center flex-wrap">

       @for (skill of skillsCard ; track  $index) {
         <vlad-shared-ui-icon-card [iconCardInputs]="skill"/>
       }
      </div>
  </div>


  `,
  styles: ``,
})
export class SkillsComponent {


  skillsCard: IconCard[] = [
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:git',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Git",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:git',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      title: "Git",
      class: "hover:bg-black hover:text-white",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nest',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Nest",
      iconClass: "text-[56px]"
    },

  ];



}
