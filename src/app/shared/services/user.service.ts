import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userID: Subject<String> = new Subject<String>()

  constructor() { }


}
