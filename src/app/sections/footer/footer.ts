import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'vlad-landing-section-footer',
  imports: [NzAvatarModule],
  template: `<div class="bg-black w-full  flex justify-between items-center px-4 py-2">

 <div class="flex items-center  text-white gap-2">
        <div>
          <nz-avatar
            nzIcon="user"
            nzSrc="assets/dalv.jpg"
            [nzSize]="50"
          ></nz-avatar>
        </div>
        VLAD
  </div>

  <div class="text-white font-bold ">
    &#64;copyright 2026. All rights reserved.
  </div>

  </div>`,
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
