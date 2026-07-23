import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'lang';

function detectInitialLang(platformId: object): Lang {
  if (!isPlatformBrowser(platformId)) {
    return 'pt';
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'pt' || saved === 'en') {
    return saved;
  }

  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly langSignal = signal<Lang>(detectInitialLang(this.platformId));
  readonly lang = this.langSignal.asReadonly();

  setLang(lang: Lang): void {
    this.langSignal.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }

  toggle(): void {
    this.setLang(this.langSignal() === 'pt' ? 'en' : 'pt');
  }
}
