import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";
import { Token_Generator } from "../helpers/token_generator";
import { Cookie } from "ng2-cookies";
import {Constant} from '../helpers/constants';
import {ROUTE_CONST} from '../helpers/route_constant'

@Injectable()
export class AuthenticationService {
  currentUser: any;
  constructor(private http: Http, private router: Router) {}

  login(creditial) {
    return this.http
      .post(ROUTE_CONST.SERVER_PATH, JSON.stringify(creditial)) 
      .map(response => {
        let result = response.json();
        if (result && result.token) {
          let expiresValue = new Date(new Date().getTime() + 60 * 1000);
          Cookie.set(Constant.COOKIE_KEY_NAME, result.token, expiresValue); 
          let tkn = Cookie.get(Constant.COOKIE_KEY_NAME); 
          if (tkn) {
            this.currentUser = Token_Generator.decryptData(tkn);
          }
          return true;
        } else return false;
      });
  }

  logout() {
    Cookie.delete(Constant.COOKIE_KEY_NAME); 
    this.currentUser = null;
    this.router.navigate([ROUTE_CONST.LOGIN_PATH]);
  }

  isLoggedIn() {
    let token = Cookie.get(Constant.COOKIE_KEY_NAME);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
