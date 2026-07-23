import { Component, Input, inject } from '@angular/core';
import { Project } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { UI } from '../../core/i18n/translations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input({ required: true }) projects!: Project[];

  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly ui = UI;
}
