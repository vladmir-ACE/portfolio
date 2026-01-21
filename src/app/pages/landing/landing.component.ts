import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../sections/navBar/nav-bar.component';
import { HeaderDescriptionComponent } from '../../sections/header-description/header-description.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ExperiencesComponent } from '../../sections/experiences/experiences.component';

@Component({
  selector: 'vlad-app-landing',
  standalone: true,
  imports: [CommonModule, NavBarComponent, HeaderDescriptionComponent, SkillsComponent, ExperiencesComponent],
  template: `
  <vlad-nav-bar/>

  <div class="max-w-[1280px] mx-auto flex flex-col gap-y-5  px-[20px]">

  <vlad-header-description/>

  <vlad-landing-section-skills/>

  <vlad-landing-section-experiences/>


  </div>

  `,
  styles: ``,
})
export class LandingComponent { }
