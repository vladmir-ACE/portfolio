import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../sections/navBar/nav-bar.component';
import { HeaderDescriptionComponent } from '../../sections/header-description/header-description.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ExperiencesComponent } from '../../sections/experiences/experiences.component';
import { AboutMeComponent } from '../../sections/about-me/about-me.component';
import { FooterComponent } from '../../sections/footer/footer';

@Component({
  selector: 'vlad-app-landing',
  standalone: true,
  imports: [CommonModule, NavBarComponent, HeaderDescriptionComponent, SkillsComponent, ExperiencesComponent, AboutMeComponent,FooterComponent],
  template: `
  <vlad-nav-bar/>

  <div class="max-w-[1280px] mx-auto flex flex-col gap-y-5  mb-5 px-[20px]">

    <div id="home">
      <vlad-header-description />
    </div>

    <div id="skills">
      <vlad-landing-section-skills />
    </div>

    <div id="projects">
      <vlad-landing-section-experiences />
    </div>

    <div id="about">
      <vlad-landing-section-about-me />
    </div>

  </div>

  <div id="contact">
    <vlad-landing-section-footer />
  </div>

  `,
  styles: ``,
})
export class LandingComponent { }
