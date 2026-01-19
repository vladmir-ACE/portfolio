import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../sections/navBar/nav-bar.component';
import { HeaderDescriptionComponent } from '../../sections/header-description/header-description.component';

@Component({
  selector: 'vlad-app-landing',
  standalone: true,
  imports: [CommonModule,NavBarComponent,HeaderDescriptionComponent],
  template: `
  <vlad-nav-bar/>

  <div class="max-w-[1280px] mx-auto ">
  <vlad-header-description/>

  </div>

  `,
  styles:``,
})
export class LandingComponent {}
