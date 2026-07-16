import { Component, Input } from '@angular/core';
import { Job } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input({ required: true }) jobs!: Job[];
}
