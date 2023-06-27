import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(
    private _http: HttpClient
  ) { }


  getAllLeaves(): Observable<any> {
    return this._http.get<any>(`${environment.baseUrl}/leaves.json`)
  }
}
