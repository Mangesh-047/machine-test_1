import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ileaves, leaveStatus } from '../../model/leaves';
import { environment } from 'src/environments/environment';
import { LeaveService } from '../../services/leave.service';
import { SnacbarService } from '../../services/snacbar.service';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './leave-dialog.component.html',
  styleUrls: ['./leave-dialog.component.scss']
})
export class LeaveDialogComponent implements OnInit {


  minDate = new Date();
  // maxDate = new Date(2023, 11, 31);
  // defaultDate = new Date();
  constructor(
    // private _http: HttpClient
    private _leaveService: LeaveService,
    private _fb: FormBuilder,
    private _snacbarService: SnacbarService
  ) { }

  leaveForm!: FormGroup

  ngOnInit(): void {
    this.createLeaveForm()

  }


  createLeaveForm() {
    this.leaveForm = new FormGroup({
      empName: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required]),
    })
  }


  onLeaveSubmit() {
    if (this.leaveForm.valid) {

      // console.log(this.leaveForm);
      // console.log(this.leaveForm.value);




      let obj = {
        empName: this.leaveForm.value.empName,
        startDate: this.leaveForm.value.startDate,
        endDate: this.leaveForm.value.endDate,
        reason: this.leaveForm.value.reason,
        status: leaveStatus.Pending,
      }

      // console.log(obj);

      this._leaveService.sendLeaveRequest(obj)
        .subscribe(
          res => {
            console.log(res);
            this._snacbarService.snacbarOpen('Leave Submitted Successfully')
          },
          err => {
            console.log(err);

          }
        )
    }

    // this._http.post('http://localhost:3000/leaves',)

  }

}
