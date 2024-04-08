import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyComputationPipe } from './pipes';

@Component({
  standalone: true,
  imports: [NgFor, NgForOf, HeavyComputationPipe],
  selector: 'app-root',
  template: `
    @for (person of persons; let index = $index; track person) {
      <div>{{ person | heavyComputation: index }}</div>
    }
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
