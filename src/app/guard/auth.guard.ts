import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from "ng2-cookies";
import {Constant} from '../helpers/constants'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn:boolean = false;
  isLoggedRes:any;
  userStateRes:any;
  userState:any;
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = Cookie.get(Constant.COOKIE_KEY_NAME);
      if (token) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    }
}
