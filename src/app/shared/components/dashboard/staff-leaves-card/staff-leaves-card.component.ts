import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Ileaves, leaveStatus } from 'src/app/shared/model/leaves';
import { LeaveService } from 'src/app/shared/services/leave.service';
import { LeaveDialogComponent } from '../../leave-dialog/leave-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-leaves-card',
  templateUrl: './staff-leaves-card.component.html',
  styleUrls: ['./staff-leaves-card.component.scss']
})
export class StaffLeavesCardComponent implements OnInit {

  leavesArray: Array<any> = []
  approved: Array<Ileaves> = []
  reject: Array<Ileaves> = []
  constructor(
    private _leaveService: LeaveService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {

    this._leaveService.getAllLeaves()
      .pipe(
        tap(res => console.log(res)),
        map(res => {
          const leavesArray: Array<any> = []
          for (const key in res) {
            // console.log(res[key]);
            console.log(key);
            let obj = {
              id: key,
              empName: res[key].empName,
              startDate: res[key].startDate,
              endDate: res[key].endDate,
              reason: res[key].reason,
              status: res[key].status
            }

            console.log(obj);
            leavesArray.push(obj)
          }
          console.log(leavesArray);


          return leavesArray

        })
      )
      .subscribe(res => {
        console.log(res);
        this.leavesArray = res

        this.approved = res.filter(e => e.status === 'Approved')
        this.reject = res.filter(e => e.status === 'Reject')
      })
  }



}
