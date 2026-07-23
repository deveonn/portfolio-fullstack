import { Component, Input, inject } from '@angular/core';
import { Job } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { UI } from '../../core/i18n/translations';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input({ required: true }) jobs!: Job[];

  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly ui = UI;
}
