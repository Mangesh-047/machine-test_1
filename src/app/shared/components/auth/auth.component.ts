import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { SnacbarService } from '../../services/snacbar.service';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnacbarComponent } from '../snacbar/snacbar.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hide = true;
  hide1 = true;




  alreadyHaveAccount: boolean = false

  constructor(
    private _authService: AuthService,
    private _fireStore: AngularFirestore,
    private _router: Router,
    private _loaderService: LoaderService,
    private _snacbarService: SnacbarService,
    private _userService: UserService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('userRole')?.includes('staff')) {
      this._router.navigate(['/staff-dashboard'])
    } else if (localStorage.getItem('userRole')?.includes('hod')) {
      this._router.navigate(['/hod-dashboard'])

    }

    this._userService.alreadyhaveac
      .subscribe(res => {
        this.alreadyHaveAccount = res
      })




  }


  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {

      // console.log(loginForm.value);

      let { email, password } = loginForm.value
      // console.log(email, password);

      // this._loaderService.loaderStatus.next(true)

      setTimeout(() => {
        // this._authService.loginStatus.next(true)
        // this._loaderService.loaderStatus.next(false)

      }, 1000);

      this._authService.logInToApp(email, password)
        .then(res => {
          // this._router.navigate(['/staff-dashboard'])
          // console.log(res)
          // this.alreadyHaveAccount = true

          const uid = res.user?.uid
          // this._userService.userID.next(uid)
          localStorage.setItem('userId', uid)
          this._fireStore.collection('user').doc(uid).get()
            .subscribe((res: any) => {
              // console.log(res.data());
              const userObj = res.data()
              // this._userService.userObj.next(res.data())
              // console.log(userObj);
              localStorage.setItem('userRole', userObj.role)

              localStorage.getItem('userRole')?.includes('hod') ? this._router.navigate(['/hod-dashboard']) : this._router.navigate(['/staff-dashboard'])

              // localStorage.getItem('userRole') === 'USER' ? 


            })
        })
        .catch(err => {
          // console.log(err)
          this._snacbarService.snacbarOpen(err)
        })

    }
  }


  onSignUp(signUpForm: NgForm) {
    // console.log(signUpForm.controls['password'].value);
    // console.log(signUpForm.controls['repassword'].value);

    if (signUpForm.valid) {
      // console.log(signUpForm);
      // console.log(signUpForm.value);
      if ((signUpForm.controls['password'].value === signUpForm.controls['repassword'].value)) {
        // let email = signUpForm.value.email
        // let pass = signUpForm.value.password

        let { email, password, userRole, firstName, lastName } = signUpForm.value

        // console.log(email, password, userRole, firstName, lastName);

        // console.log({ email, pass } = signUpForm.value);

        this._authService.SignUp(email, password)
          .then((res) => {
            this._snacbarService.snacbarOpen('Account created successully')

            this._userService.alreadyhaveac.next(true)
            // localStorage.setItem('userRole', userRole)

            // localStorage.getItem('userRole')?.includes('hod') ? this._router.navigate(['/hod-dashboard']) : this._router.navigate(['/staff-dashboard'])

            // console.log(res);
            // console.log(res.user);
            const uid = res.user?.uid;

            // localStorage.setItem('userId', uid)
            // console.log(uid);
            this._fireStore.collection('user').doc(uid).set({
              role: userRole,
              firstName: firstName,
              lastName: lastName,
              email: email.toLowerCase(),
              pass: password
            })
          })
          .catch((err) => {
            console.log(err, typeof err);
            this._snacbarService.snacbarOpen(err)
          })
      } else {
        // this._snacbarService.snacbarOpen('password does not match')

        this._snackBar.openFromComponent(SnacbarComponent, {

          duration: 3000,
        });
      }


    }

  }



}
