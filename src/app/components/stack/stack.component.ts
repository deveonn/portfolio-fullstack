import { Component, Input } from '@angular/core';
import { StackGroup } from '../../core/data/data';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {
  @Input({ required: true }) groups!: StackGroup[];
}
