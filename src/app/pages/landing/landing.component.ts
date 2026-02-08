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

  <vlad-header-description/>

  <vlad-landing-section-skills/>

  <vlad-landing-section-experiences/>

  <vlad-landing-section-about-me/>

  </div>
  <vlad-landing-section-footer/>

  `,
  styles: ``,
})
export class LandingComponent { }
