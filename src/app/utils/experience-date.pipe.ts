import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

@Pipe({
  name: 'experienceDate',
})
export class ExperienceDatePipe implements PipeTransform {
  transform(value: Date | undefined): string {
    if (value) {
      const date = new Date(value);
      return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
    } else {
      return 'Current';
    }
  }
}
