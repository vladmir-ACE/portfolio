import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  template: `
    <p>
      nav-bar works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

}
