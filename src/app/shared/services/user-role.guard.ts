import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(
    private _router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let getUserRoleFromStaticData: string = route.data['userRole'];
    console.log(getUserRoleFromStaticData);

    let getLoginUserRole = localStorage.getItem('userRole')!

    if (getLoginUserRole.includes(getUserRoleFromStaticData)) {
      // console.log('yes hod');

      return true
    } else {
      this._router.navigate(['/'])
      // console.log('you cant go there');

      return false
    }


  }

}
