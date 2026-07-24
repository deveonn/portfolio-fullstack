import { Component, Input, inject } from '@angular/core';
import { SoftSkill } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { UI } from '../../core/i18n/translations';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss',
})
export class SoftSkillsComponent {
  @Input({ required: true }) skills!: SoftSkill[];

  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly ui = UI;
}
