import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "timeStamp"})
export class TimeStampPipe implements PipeTransform {
  transform(value: number) {

    if (value != null) {

      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };

      const newDate = new Date(value);

      return newDate.toLocaleString('en-us', options);;
    } else {
      return '--';
    }
  }
}