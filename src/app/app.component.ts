import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'machine-test_1';

  isLoading: boolean = false

  isLogin: boolean = false

  constructor(
    private _lodaerService: LoaderService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._lodaerService.loaderStatus
      .subscribe(res => this.isLoading = res)

    this._authService.loginStatus.subscribe(res => this.isLogin = res)
  }



}
