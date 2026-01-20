import { inject, provideAppInitializer } from "@angular/core";
import { NzIconService } from "ng-zorro-antd/icon";
import { CUSTOM_ICONS } from "./icons";


export const provideIcons = () => {
  return provideAppInitializer(() => {
    const nzIconService = inject(NzIconService);

    Object.keys(CUSTOM_ICONS).forEach((key) => {
      const iconValue = CUSTOM_ICONS[key];

      nzIconService.addIconLiteral(`vlad:${key}`, iconValue);
    });
  });
};
