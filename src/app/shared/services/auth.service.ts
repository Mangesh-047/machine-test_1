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

  // userData: Array<any> = [
  //   {
  //     email: '123@gmail.com',
  //     pass: '123'
  //   }
  // ]
  // isAuthenticated(): Promise<boolean> {
  //   return new Promise((res) => {
  //     res(this.loginStatus)
  //   })
  // }

  logInToApp(email: string, pass: string): Promise<any> {

    // if ((this.userData.find(e => e.pass === '123')) && (this.userData.find(e => e.email === '123@gmail.com'))) {
    //   console.log('match');

    //   this.loginStatus = true
    //   this._router.navigate(['/'])
    // } else {
    //   alert('error')
    // }

    return this._afAuth.signInWithEmailAndPassword(email as string, pass as string)
  }

  logOutApp() {
    // this.loginStatus = false
    // this._router.navigate(['/'])


    this._afAuth.signOut()
      .then(res => {

        localStorage.removeItem('userRole')
        this._router.navigate(['/'])
        this._snacbar.snacbarOpen('Log Out.........!!!!  successfully')
      })
  }


  SignUp(email: string, pass: string): Promise<any> {
    return this._afAuth.createUserWithEmailAndPassword(email as string, pass as string)


  }
}
