import { Component, Input, inject } from '@angular/core';
import { StackGroup } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { UI } from '../../core/i18n/translations';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {
  @Input({ required: true }) groups!: StackGroup[];

  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly ui = UI;
}
