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
      icon: 'vlad:html',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Html",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:css',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Css",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:javascript',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      title: "JavaScript",
      class: "hover:bg-black hover:text-white",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:typescript',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "TypeScript",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:python',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Python",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:dart',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Dart",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:angular',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Angular",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:vuejs',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Vue.js",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:flutter',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Flutter",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:nestjs',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "NestJS",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:django',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Django",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:hasura',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Hasura",
      iconClass: "text-[56px]"
    },
     {
      icon: 'vlad:github',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "GitHub",
      iconClass: "text-[56px]"
    },
    {
      icon: 'vlad:figma',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "Figma",
      iconClass: "text-[56px]"
    },

     {
      icon: 'vlad:wordpress',
      size: '186px',
      link: 'https://www.facebook.com/vlad.lanwi',
      class: "hover:bg-black hover:text-white",
      title: "WordPress",
      iconClass: "text-[56px]"
    },
  ];



}
