import { Component, Input, inject } from '@angular/core';
import { Profile } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { UI } from '../../core/i18n/translations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input({ required: true }) profile!: Profile;

  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly ui = UI;
}
