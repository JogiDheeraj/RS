/**
 * New typescript file
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "timeStamp"})
export class TimeStampPipe implements PipeTransform {
  transform(value: number): Date {
//    const date = new String(value),
//      year = date[0] + date[1],
//      month = date[2] + date[3],
//      day = date[4] + date[5],
//      hour = date[6] + date[7],
//      minute = date[8] + date[9],
//      seconds = date[10] + date[11];
//
//    const reformattedDate = '20' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds;

    const newDate = new Date(value * 1000);

    return newDate;
  }
}