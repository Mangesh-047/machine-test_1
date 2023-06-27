import { Pipe, PipeTransform } from '@angular/core';
import { leaveStatus } from '../model/leaves';

@Pipe({
  name: 'leaveStatus'
})
export class LeaveStatusPipe implements PipeTransform {


  transform(value: leaveStatus, ...args: unknown[]): unknown {
    console.log(value);

    // if (!value) {
    //   return value
    // }

    // if (value === 0) {
    //   return 'Pending'
    // }

    // if (value === 0) {
    //   return 'Pending'
    // }

    // if (value === 0) {
    //   return 'Pending'
    // }
    return null;
  }

}
