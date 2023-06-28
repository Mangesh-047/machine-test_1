import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ileaves, leaveStatus } from '../model/leaves';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(
    private _http: HttpClient
  ) { }


  getAllLeaves(): Observable<Array<Ileaves>> {
    return this._http.get<Array<Ileaves>>(`${environment.baseUrl}/leaves.json`)
      .pipe(
        // tap(res => console.log(res)),
        map(res => {
          const leavesArray: Array<any> = []
          for (const key in res) {
            // console.log(res[key]);
            // console.log(key);


            let obj = {
              id: key,
              empName: res[key].empName,
              startDate: res[key].startDate,
              endDate: res[key].endDate,
              reason: res[key].reason,
              status: res[key].status
            }

            // console.log(obj);
            leavesArray.push(obj)
          }
          // console.log(leavesArray);


          return leavesArray

        })
      )
  }

  getApprove(leave: Ileaves): Observable<any> {
    let obj = {
      status: leaveStatus.Approved
    }
    return this._http.patch(`${environment.baseUrl}/leaves/${leave.id}.json`, obj)
  }

  getReject(leave: Ileaves): Observable<any> {
    let obj = {
      status: leaveStatus.Reject
    }
    return this._http.patch(`${environment.baseUrl}/leaves/${leave.id}.json`, obj)
  }

  sendLeaveRequest(obj: any): Observable<any> {
    return this._http.post(`${environment.baseUrl}/leaves.json`, obj)
  }
}
