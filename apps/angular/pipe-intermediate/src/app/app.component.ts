import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ShowPersonAllowedPipe } from './pipes/show-person-allowed.pipe';
import { Person } from './types/person';

@Component({
  standalone: true,
  imports: [NgFor, ShowPersonAllowedPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index; let isFirst = first">
      {{ person | showPersonAllowed: index : isFirst }}
    </div>
  `,
})
export class AppComponent {
  persons: Person[] = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];
}
