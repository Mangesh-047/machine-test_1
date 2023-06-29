import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LeaveService } from '../../services/leave.service';
import { Ileaves, leaveStatus } from '../../model/leaves';
import { IntercepterService } from '../../services/intercepter.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.scss']
})
export class HodDashboardComponent implements OnInit, OnDestroy {
  // uid!: string

  leavesArray: Array<Ileaves> = []

  constructor(
    // private fbs: AngularFirestore,
    // private _userService: UserService,
    private _leaveService: LeaveService,
    private __intercepterService: IntercepterService
  ) { }
  ngOnInit(): void {
    this._leaveService.getAllLeaves()
      .subscribe(
        res => {
          // console.log(res);
          this.leavesArray = res

          this.leavesArray.forEach(e => {
            // console.log(e.startDate.slice(0, 10));
            // console.log(new Date(e.startDate.slice(0, 10)));
            // console.log(new Date(e.endDate.slice(0, 10)));
            // console.log(this.getDiffDays(e.startDate.slice(0, 10), e.endDate.slice(0, 10)));

            e.numOfDat = this.getDiffDays(e.startDate.slice(0, 10), e.endDate.slice(0, 10))
          })

        }
      )

    // console.log(this.getDiffDays('07/01/2021', '07/10/2021'));


  }




  getDiffDays(sDate: any, eDate: any) {
    let startDate = new Date(sDate);
    let endDate = new Date(eDate);

    let Time = endDate.getTime() - startDate.getTime();
    return Time / (1000 * 3600 * 24);

  }

  ngOnDestroy(): void {
    this.__intercepterService.unSubscribeAll()
  }




}
