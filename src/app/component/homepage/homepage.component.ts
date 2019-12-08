import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import {Constant} from '../../helpers/constants';
import {ROUTE_CONST} from '../../helpers/route_constant'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentUser: any; 

  constructor(private http:Http,private router: Router) {   }

  ngOnInit() {
    let tkn = Cookie.get(Constant.COOKIE_KEY_NAME);
    if (tkn && tkn != null) {
      this.router.navigate([ROUTE_CONST.HOMEPAGE_PATH]);
    }
    else{
      this.router.navigate([ROUTE_CONST.LOGIN_PATH]);
    }
  }

}
