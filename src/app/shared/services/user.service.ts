import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  alreadyhaveac: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }


}
