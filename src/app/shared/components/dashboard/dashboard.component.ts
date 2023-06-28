import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LeaveDialogComponent } from '../leave-dialog/leave-dialog.component';
import { Router } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { Observable, map, tap } from 'rxjs';
import { Ileaves } from '../../model/leaves';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  approvedLength!: number
  rejectLength!: number
  leaveArray: Array<Ileaves> = []


  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _leaveService: LeaveService

  ) { }

  ngOnInit(): void {
    this._leaveService.getAllLeaves()

      .subscribe(res => {
        // console.log(res);
        this.leaveArray = res

        this.approvedLength = res.filter(e => e.status === 'Approved').length
        this.rejectLength = res.filter(e => e.status === 'Reject').length


        res.forEach(e => {
          // console.log(e.startDate.slice(0, 10));
          // console.log(new Date(e.startDate.slice(0, 10)));
          // console.log(new Date(e.endDate.slice(0, 10)));
          // console.log(this.getDiffDays(e.startDate.slice(0, 10), e.endDate.slice(0, 10)));

          e.numOfDat = this.getDiffDays(e.startDate, e.endDate)

        })

      })

  }

  getDiffDays(sDate: any, eDate: any) {
    let startDate = new Date(sDate);
    let endDate = new Date(eDate);

    let Time = endDate.getTime() - startDate.getTime();
    return Time / (1000 * 3600 * 24);

  }



  openDialog() {

    // let dialogConf = new MatDialogConfig()
    // dialogConf.disableClose = true
    const dialogRef = this.dialog.open(LeaveDialogComponent, {
      disableClose: true,
      width: '550px',
      // autoFocus: false
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);

        if (result) {
          this._leaveService.getAllLeaves()
            .subscribe(res => {
              console.log(res);
              this.leaveArray = res

              this.leaveArray.forEach(e => {
                // console.log(e.startDate.slice(0, 10));
                // console.log(new Date(e.startDate.slice(0, 10)));
                // console.log(new Date(e.endDate.slice(0, 10)));
                // console.log(this.getDiffDays(e.startDate.slice(0, 10), e.endDate.slice(0, 10)));

                e.numOfDat = this.getDiffDays(e.startDate, e.endDate)

              })
            })
        }
      });
  }

}
