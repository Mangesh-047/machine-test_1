import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userRole = localStorage.getItem('userRole')!

  isLogin: boolean = false
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.loginStatus
      .subscribe(res => this.isLogin = res)


  }

  // logIn() {
  //   this._authService.logInToApp()
  // }

  logOut() {
    // this._authService.logOutApp()
    // localStorage.removeItem("userRole")

    this._authService.logOutApp()
    this._authService.loginStatus.next(false)

  }
}
