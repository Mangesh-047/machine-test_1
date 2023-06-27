import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _afAuth: AngularFireAuth,
    private _router: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this._authService.isAuthenticated();
    let login = localStorage.getItem('userRole')
    console.log(login);

    if (login) {
      this._authService.loginStatus.next(true)
      return of(true)
    } else {
      this._router.navigate(['/'])
      return of(false)
    }
  }

}
