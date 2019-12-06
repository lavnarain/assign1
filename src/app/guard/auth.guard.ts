import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn:boolean = false;
  isLoggedRes:any;
  userStateRes:any;
  userState:any;
  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLoggedRes = localStorage.getItem('constantVariable.isLoggedIn')
    this.isLoggedIn = JSON.parse(this.isLoggedRes);
    this.userStateRes = localStorage.getItem('constantVariable.currentUserStates');
    if(this.isLoggedRes){
      if(this.isLoggedIn){
          // this.router.navigate(['/myprofile']);
          return true;
      }else{
          this.router.navigate(['/login']);
      }
    }else{
      console.log('localStorage isLoggedIn undefied');
      this.router.navigate(['/login']);
    }
  }
}
