import { Component, Input, OnInit } from '@angular/core';
import { Ileaves, leaveStatus } from 'src/app/shared/model/leaves';
import { LeaveService } from 'src/app/shared/services/leave.service';

@Component({
  selector: 'app-hod-leave-card',
  templateUrl: './hod-leave-card.component.html',
  styleUrls: ['./hod-leave-card.component.scss']
})
export class HodLeaveCardComponent implements OnInit {

  // leavesArray: Array<any> = []
  @Input('leavesArray')
  leavesArray!: Array<Ileaves>
  constructor(
    private _leaveService: LeaveService,
  ) { }

  ngOnInit(): void {
    // this._leaveService.getAllLeaves()
    //   .subscribe(
    //     res => {
    //       // console.log(res);
    //       this.leavesArray = res
    //     }
    //   )
  }

  onApprove(leave: Ileaves) {
    // console.log(leave);

    let obj = {
      status: leaveStatus.Approved
    }
    // this._http.patch(`${environment.baseUrl}/leaves/${leave.id}.json`, obj)
    this._leaveService.getApprove(leave)
      .subscribe(
        res => {
          this.leavesArray.forEach(e => {
            if (e.id === leave.id) {
              e.status = obj.status
            }
          })
        }
      )
  }


  onReject(leave: Ileaves) {
    // console.log(leave);

    let obj = {
      status: leaveStatus.Reject
    }
    // this._http.patch(`${environment.baseUrl}/leaves/${leave.id}.json`, obj)
    this._leaveService.getReject(leave)
      .subscribe(
        res => {
          this.leavesArray.forEach(e => {
            if (e.id === leave.id) {
              e.status = obj.status
            }
          })
        }


      )
  }

  //   {
  //     "-NYsWKUZvLQd0E6GyWIt": {
  //         "empName": "Manesh",
  //         "endDate": "2023-07-09T18:30:00.000Z",
  //         "reason": "study",
  //         "startDate": "2023-06-26T18:30:00.000Z",
  //         "status": "Pending"
  //     }
  // }

}
