import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'vlad-nav-bar',
 imports: [NzDrawerModule,NzButtonModule,RouterLink, NzIconModule, NzLayoutModule, NzMenuModule,NzAvatarModule],
  standalone:true,
  template: `
   <div class="p-4 text-lg font-bold w-full flex justify-between items-center md:hidden">
   <div class="flex gap-2 items-center">
    <div>
    <nz-avatar nzIcon="user" nzSrc="assets/dalv.jpg" [nzSize]="50"></nz-avatar>
    </div>
    <div>
    VLAD
    </div>
   </div>
   <div>
      <nz-icon nzType="bars" nzTheme="outline" class="cursor-pointer" (click)="open()"  />
   </div>
</div>
<!--drawer content -->
<nz-drawer
      class="text-lg font-bold"
      [nzClosable]="false"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="Menu"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
      @for (item of menu; track $index) {
      <div class="cursor-pointer" [routerLink]="item.route">{{item.title}}</div>
    }
      </ng-container>
</nz-drawer>
<!--normal div -->
<div class="w-full  text-lg font-bold flex flex-wrap items-center justify-between px-10 hidden md:flex">
<div class="flex items-center gap-2">
    <div>
    <nz-avatar nzIcon="user" nzSrc="assets/dalv.jpg" [nzSize]="50"></nz-avatar>
    </div>
    VLAD
   </div>
  <div class="flex  flex-wrap gap-5  p-4 items-center justify-between">
    @for (item of menu; track $index) {
      <div class="cursor-pointer" [routerLink]="item.route">{{item.title}}</div>
    }
  </div>
  <div>
     <div class="bg-black  text-white flex gap-x-2 items-center p-4 cursor-pointer">
      <div >Resume</div>
      <nz-icon nzType="download" nzTheme="outline" />
     </div>
  </div>

</div>
  `,
  styles: `
  nz-icon{
  font-size: 30px;

}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {


  menu:MenuItem[]=[
    {
      title:"About",
      route:"about"
    },
    {
      title:"Skills",
      route:"skills"
    },
    {
      title:"Projects",
      route:"projects"
    },
    {
      title:"Contact me",
      route:"contact"
    }

  ]

  //drawer 
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
