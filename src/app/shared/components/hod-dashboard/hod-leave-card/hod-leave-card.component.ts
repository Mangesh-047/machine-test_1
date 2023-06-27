import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Ileaves, leaveStatus } from 'src/app/shared/model/leaves';
import { LeaveService } from 'src/app/shared/services/leave.service';

@Component({
  selector: 'app-hod-leave-card',
  templateUrl: './hod-leave-card.component.html',
  styleUrls: ['./hod-leave-card.component.scss']
})
export class HodLeaveCardComponent implements OnInit {

  leavesArray: Array<any> = []

  constructor(
    private _leaveService: LeaveService,
    private _http: HttpClient
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
      .subscribe(
        res => {
          console.log(res);
          this.leavesArray = res
        }
      )
  }

  onApprove(leave: Ileaves) {
    console.log(leave);

    let obj = {
      status: leaveStatus.Approved
    }
    this._http.patch(`https://machine-test-1-a4b52-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/${leave.id}.json`, obj)
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
    console.log(leave);

    let obj = {
      status: leaveStatus.Reject
    }
    this._http.patch(`https://machine-test-1-a4b52-default-rtdb.asia-southeast1.firebasedatabase.app/leaves/${leave.id}.json`, obj)
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
