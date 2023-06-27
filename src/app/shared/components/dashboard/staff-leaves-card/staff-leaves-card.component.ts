import { Component, Input, OnInit } from '@angular/core';
import { Ileaves } from 'src/app/shared/model/leaves';
import { LeaveService } from 'src/app/shared/services/leave.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-leaves-card',
  templateUrl: './staff-leaves-card.component.html',
  styleUrls: ['./staff-leaves-card.component.scss']
})
export class StaffLeavesCardComponent implements OnInit {

  @Input('leaveArray')
  leaveArray!: Array<Ileaves>

  @Input('approvedLength')
  approvedLength!: number

  @Input('rejectLength')
  rejectLength!: number
  // leavesArray: Array<any> = []
  // approved: Array<Ileaves> = []

  constructor(
    private _leaveService: LeaveService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    // console.log(this.approvedLength);

    // this._leaveService.getAllLeaves()
    //   .subscribe(res => {
    //     // console.log(res);
    //     this.leavesArray = res

    //     this.approved = res.filter((e: any) => e.status === 'Approved')
    //     this.reject = res.filter((e: any) => e.status === 'Reject')
    //   })
  }



}
