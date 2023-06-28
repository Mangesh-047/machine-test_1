import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  userRole!: string

  isLogin: boolean = false

  // @ViewChild('sideNav')
  // sideNav!: any
  constructor(
    private _authService: AuthService,
  ) { }

  // toggleSidenav() {
  //   this.sideNav.open()
  // }

  ngAfterViewInit(): void {
    this._authService.loginStatus
      .subscribe(res => {
        this.isLogin = res
        this.userRole = localStorage.getItem('userRole')!
      })
  }

  ngOnInit(): void {




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
