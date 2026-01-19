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
  <vlad-header-description/>
  `,
  styles:``,
})
export class LandingComponent {}
