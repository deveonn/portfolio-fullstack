import { Component, Input } from '@angular/core';
import { Project } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input({ required: true }) projects!: Project[];
}
