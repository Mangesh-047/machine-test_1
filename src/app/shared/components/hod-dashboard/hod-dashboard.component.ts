import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.scss']
})
export class HodDashboardComponent implements OnInit {
  // uid!: string

  leavesArray: Array<any> = []

  constructor(
    // private fbs: AngularFirestore,
    // private _userService: UserService,
    private _leaveService: LeaveService
  ) { }
  ngOnInit(): void {
    this._leaveService.getAllLeaves()
      .subscribe(
        res => {
          // console.log(res);
          this.leavesArray = res
        }
      )
  }








}
