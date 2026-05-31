import { ChangeDetectionStrategy, Component, inject, LOCALE_ID } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ViewportScroller, CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

interface MenuItem {
  title: string;
  anchor: string;
}

@Component({
  selector: 'vlad-nav-bar',
  imports: [
    CommonModule,
    NzDrawerModule,
    NzButtonModule,
    RouterLink,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzDropDownModule,
  ],
  standalone: true,
  template: `
    <div
      class="p-4 text-lg font-bold w-full flex justify-between items-center md:hidden"
    >
      <div class="flex gap-2 items-center cursor-pointer" (click)="navigateToAnchor('home')">
        <div>
          <nz-avatar
            nzIcon="user"
            nzSrc="assets/dalv.jpg"
            [nzSize]="50"
          ></nz-avatar>
        </div>
        <div>VLAD</div>
      </div>

      <div class="flex items-center gap-4">
        <a nz-dropdown [nzDropdownMenu]="langMenuMobile" class="text-sm uppercase text-black! flex items-center gap-1">
          {{ currentLocale === 'fr' ? 'FR' : 'EN' }}
          <nz-icon nzType="down" />
        </a>
        <nz-dropdown-menu #langMenuMobile="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item (click)="switchLanguage('en-US')">English</li>
            <li nz-menu-item (click)="switchLanguage('fr')">Français</li>
          </ul>
        </nz-dropdown-menu>

        <nz-icon
          nzType="bars"
          nzTheme="outline"
          class="cursor-pointer"
          (click)="open()"
        />
      </div>

    </div>
    <!--drawer content -->
    <nz-drawer
      class="text-lg font-bold"
      [nzClosable]="true"
      [nzVisible]="visible"
      nzPlacement="right"
      nzTitle="Menu"
      (nzOnClose)="close()"
    >
      <ng-container *nzDrawerContent>
        <div class="flex flex-col gap-y-4">
          @for (item of menu; track $index) {
          <div
            class="cursor-pointer hover:text-blue-500 transition-colors"
            (click)="navigateToAnchor(item.anchor)"
          >
            {{ item.title }}
          </div>
          }
        </div>
      </ng-container>
    </nz-drawer>

    <!--normal div -->
    <div
      class="w-full  text-lg font-bold flex flex-wrap items-center justify-between px-10 hidden md:flex"
    >
      <div class="flex items-center gap-2 cursor-pointer" [routerLink]="['/home']" [fragment]="'home'">
        <div>
          <nz-avatar
            nzIcon="user"
            nzSrc="assets/dalv.jpg"
            [nzSize]="50"
          ></nz-avatar>
        </div>
        VLAD
      </div>

      <div class="flex  flex-wrap gap-5  p-4 items-center justify-between">
        @for (item of menu; track $index) {
        <div
          class="cursor-pointer hover:underline"
          [routerLink]="['/home']"
          [fragment]="item.anchor"
        >
          {{ item.title }}
        </div>
        }
      </div>

      <div class="flex items-center gap-6">
        <a nz-dropdown [nzDropdownMenu]="langMenu" class="text-sm text-black! uppercase flex items-center gap-1 cursor-pointer">
          {{ currentLocale === 'fr' ? 'FR' : 'EN' }}
          <nz-icon nzType="down" style="font-size: 14px;"/>
        </a>
        <nz-dropdown-menu #langMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item (click)="switchLanguage('en-US')">English</li>
            <li nz-menu-item (click)="switchLanguage('fr')">Français</li>
          </ul>
        </nz-dropdown-menu>

        <div class="my-5">
          <div
            class="bg-black  text-white flex gap-x-2 items-center p-4 cursor-pointer"
          >
            <div i18n>Resume</div>
            <nz-icon nzType="download" nzTheme="outline" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
  nz-icon{
  font-size: 30px;

}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);
  currentLocale = inject(LOCALE_ID);

  menu: MenuItem[] = [
    {
      title: $localize`About`,
      anchor: 'about',
    },
    {
      title: $localize`Skills`,
      anchor: 'skills',
    },
    {
      title: $localize`Projects`,
      anchor: 'projects',
    },
    {
      title: $localize`Contact me`,
      anchor: 'contact',
    },
  ];

  //drawer
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  navigateToAnchor(anchor: string): void {
    this.visible = false;
    this.router.navigate(['/home'], { fragment: anchor, replaceUrl: true });

    // On attend que le drawer soit COMPLÈTEMENT fermé (libération du scroll body)
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  }

  switchLanguage(locale: string): void {
    const currentPath = window.location.pathname;
    let newPath = currentPath;

    if (this.currentLocale === 'fr' && locale === 'en-US') {
      newPath = currentPath.replace('/fr/', '/en-US/');
    } else if (this.currentLocale === 'en-US' && locale === 'fr') {
      newPath = currentPath.replace('/en-US/', '/fr/');
    } else if (!currentPath.includes('/fr/') && !currentPath.includes('/en-US/')) {
        // Fallback for development where paths might not have the locale prefix
        // or for the root URL
        newPath = `/${locale}/`;
    }

    if (newPath !== currentPath) {
        window.location.href = newPath;
    }
  }
}
