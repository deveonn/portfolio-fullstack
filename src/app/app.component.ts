import { Component, computed, inject } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { StackComponent } from './components/stack/stack.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { PROFILE } from './core/data/data';
import { LanguageService } from './core/i18n/language.service';
import { getProjects, getSoftSkills, getStacks, getTimeline } from './core/i18n/translations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    TimelineComponent,
    StackComponent,
    SoftSkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly languageService = inject(LanguageService);

  readonly profile = PROFILE;
  readonly timeline = computed(() => getTimeline(this.languageService.lang()));
  readonly stacks = computed(() => getStacks(this.languageService.lang()));
  readonly softSkills = computed(() => getSoftSkills(this.languageService.lang()));
  readonly projects = computed(() => getProjects(this.languageService.lang()));
}
