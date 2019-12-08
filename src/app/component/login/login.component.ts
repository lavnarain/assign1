import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService} from '../../service/authentication.service';
import {Constant} from '../../helpers/constants';
import {ROUTE_CONST} from '../../helpers/route_constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  submitted = false;
  disableLogin = false;
  LoginForm : FormGroup;

  constructor(private router: Router,private formBuilder : FormBuilder,private toastr: ToastrService,private authService:AuthenticationService) { }
 
  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
       emailId: ['',[ Validators.required,Validators.pattern(Constant.EMAIL_REGEX)]],
			 password: ['',[ Validators.required, Validators.pattern(Constant.PASSWORD_REGEX)]],
		});
  }

  get formControler() { return this.LoginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.LoginForm.invalid) {
      this.toastr.warning(Constant.INVALID_ENTRY);
			return;
    }
    else{
      this.authService.login(this.LoginForm.value)
      .subscribe(result =>{
        if(result){
          this.toastr.success(Constant.LOGIN_SUCCESSFULLY);
            this.router.navigate([ROUTE_CONST.HOMEPAGE_PATH]);
          }
          else{
            this.toastr.error(Constant.ERROR_IN_LOGIN);
          }
        })
    }
  }
  
  reset(){
    this.LoginForm.reset();
  }
}
