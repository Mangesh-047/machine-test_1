import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ileaves, leaveStatus } from '../../model/leaves';

@Component({
  selector: 'app-leave-dialog',
  templateUrl: './leave-dialog.component.html',
  styleUrls: ['./leave-dialog.component.scss']
})
export class LeaveDialogComponent implements OnInit {


  constructor(
    private _http: HttpClient
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

      console.log(this.leaveForm);
      console.log(this.leaveForm.value);

      let obj = {
        empName: this.leaveForm.value.empName,
        startDate: this.leaveForm.value.startDate,
        endDate: this.leaveForm.value.endDate,
        reason: this.leaveForm.value.reason,
        status: leaveStatus.Pending
      }

      console.log(obj);

      this._http.post(`https://machine-test-1-a4b52-default-rtdb.asia-southeast1.firebasedatabase.app/leaves.json`, obj)
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);

          }
        )
    }

    // this._http.post('http://localhost:3000/leaves',)

  }

}
