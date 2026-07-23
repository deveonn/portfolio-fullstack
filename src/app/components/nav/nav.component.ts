import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { UI } from '../../core/i18n/translations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private readonly languageService = inject(LanguageService);

  readonly lang = this.languageService.lang;
  readonly ui = UI;

  toggleLang(): void {
    this.languageService.toggle();
  }
}
