import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import 'rxjs/add/operator/map';  
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  currentUser: any; 
  constructor(private http:Http,private router: Router) { 
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }
  
  login(creditial){
    return this.http.post('/fake/auth',JSON.stringify(creditial))
    .map(response => {
      let result = response.json();
      if (result && result.token) {

        localStorage.setItem('token', result.token);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    });
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}
