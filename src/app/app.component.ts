import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NavBarComponent } from './shared/components/navBar/nav-bar.component';
import { HeaderDescriptionComponent } from './shared/components/head-description/header-description/header-description.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet,NavBarComponent,HeaderDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCollapsed = false;


  


}
