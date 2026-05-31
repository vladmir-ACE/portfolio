import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideIcons } from './shared/util-icon/icon-provider';

import {
  I18NEXT_SERVICE,
  I18NextModule,
  ITranslationService,
} from 'angular-i18next';
import i18nextLanguageDetector from 'i18next-browser-languagedetector';
import i18nextHttpBackend from 'i18next-http-backend';

registerLocaleData(en);

export function appInit(i18next: ITranslationService) {
  return () =>
    i18next
      .use(i18nextHttpBackend)
      .use(i18nextLanguageDetector)
      .init({
        fallbackLng: 'en',
        debug: true,
        returnEmptyString: false,
        ns: ['translation'],
        defaultNS: 'translation',
        backend: {
          loadPath: '/assets/locales/{{lng}}.json',
        },
        detection: {
          order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
          caches: ['localStorage', 'cookie'],
        },
      });
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule, I18NextModule.forRoot()),
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [I18NEXT_SERVICE],
      multi: true,
    },
    {
      provide: LOCALE_ID,
      deps: [I18NEXT_SERVICE],
      useFactory: localeIdFactory,
    },
  ]
};
