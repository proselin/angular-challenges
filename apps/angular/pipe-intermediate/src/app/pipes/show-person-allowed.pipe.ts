import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../types/person';
@Pipe({
  name: 'showPersonAllowed',
  standalone: true,
})
export class ShowPersonAllowedPipe implements PipeTransform {
  showName(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }

  isAllowed(age: number, isFirst: boolean) {
    if (isFirst) {
      return 'always allowed';
    } else {
      return age > 25 ? 'allowed' : 'declined';
    }
  }

  transform(person: Person, index: number, isFirst: boolean = false): any {
    return `${this.showName(person.name, index)} ${this.isAllowed(person.age, isFirst)}`;
  }
}
