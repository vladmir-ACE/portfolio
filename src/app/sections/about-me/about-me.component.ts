import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';

@Component({
  selector: 'vlad-landing-section-about-me',
  standalone: true,
  imports: [CommonModule, I18NextModule],
  template: `
  <div class="flex flex-col lg:flex-row  gap-x-[50px] justify-between w-full ">

    <div class="self-center  lg:max-w-[525px]">
    <img src="assets/about_me.svg" alt="header-img" />
    </div>

    <div class="flex lg:max-w-[525px] flex-col gap-y-5">
     <div><div class="text-medium md:text-large"> {{ 'About Me' | i18next }} </div></div>

     <div class="text-sm">
     <p>
    {{ "I’m a passionate Full-Stack Developer who genuinely enjoys turning complex problems into simple, elegant solutions. I love coding, learning new technologies, and constantly challenging myself to grow as an engineer. My goal is to build innovative, scalable, and high-performance applications that deliver real value to users." | i18next }}
    </p>

    <p>
    {{ "I specialize in Angular for modern and maintainable web applications, and Flutter for building smooth, cross-platform mobile experiences. On the backend, I work mainly with Django and NestJS to design secure, robust, and well-structured APIs that scale with product needs." | i18next }}
    </p>

    <p>
    {{ "Beyond coding, I’m a big sports enthusiast — I enjoy playing football, basketball, and tennis. I’m also passionate about cinema and music, which fuel my creativity and help me stay inspired. I believe this balance between technology and personal interests allows me to approach development with fresh ideas, focus, and long-term motivation." | i18next }}
    </p>


     </div>



    </div>

  </div>
  `,
  styles: ``,
})
export class AboutMeComponent { }
