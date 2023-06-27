import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeaveDialogComponent } from '../leave-dialog/leave-dialog.component';
import { Router } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { map, tap } from 'rxjs';
import { Ileaves } from '../../model/leaves';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  leaveArrayLength!: number;
  leavesArray: Array<any> = []
  approved: Array<Ileaves> = []
  reject: Array<Ileaves> = []

  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _leaveService: LeaveService

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
        this.leaveArrayLength = res.length
        this.approved = res.filter(e => e.status === 'Approved')
        this.reject = res.filter(e => e.status === 'Reject')
      })
  }




  openDialog() {

    // let dialogConf = new MatDialogConfig()
    // dialogConf.disableClose = true
    const dialogRef = this.dialog.open(LeaveDialogComponent, {
      disableClose: true,
      width: '550px',
      // autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
