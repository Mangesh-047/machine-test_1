import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(
    private _http: HttpClient
  ) { }


  getAllLeaves(): Observable<any> {
    return this._http.get<any>('https://machine-test-1-a4b52-default-rtdb.asia-southeast1.firebasedatabase.app/leaves.json')
  }
}
