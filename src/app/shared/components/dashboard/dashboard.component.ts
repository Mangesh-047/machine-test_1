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

  leaveArrayLength!: number;
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

        this.leaveArrayLength = res.length
        this.approvedLength = res.filter(e => e.status === 'Approved').length
        this.rejectLength = res.filter(e => e.status === 'Reject').length
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

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);

        if (result) {
          this._leaveService.getAllLeaves()
            .subscribe(res => {
              console.log(res);
              this.leaveArray = res
            })
        }
      });
  }

}
