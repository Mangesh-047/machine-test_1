import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { SnacbarService } from './snacbar.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // loginStatus: boolean = false

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private _router: Router,
    private _afAuth: AngularFireAuth,
    private _snacbar: SnacbarService
  ) { }



  logInToApp(email: string, pass: string): Promise<any> {


    return this._afAuth.signInWithEmailAndPassword(email as string, pass as string)
  }

  logOutApp() {
    // this.loginStatus = false
    // this._router.navigate(['/'])


    this._afAuth.signOut()
      .then(res => {

        localStorage.removeItem('userRole')
        localStorage.removeItem('userId')
        this._router.navigate(['/'])
        this._snacbar.snacbarOpen('Log Out.........!!!!')
      })
  }


  SignUp(email: string, pass: string): Promise<any> {
    return this._afAuth.createUserWithEmailAndPassword(email as string, pass as string)


  }
}
