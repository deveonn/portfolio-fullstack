import { Component, Input } from '@angular/core';
import { Profile } from '../../core/data/data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input({ required: true }) profile!: Profile;
}
