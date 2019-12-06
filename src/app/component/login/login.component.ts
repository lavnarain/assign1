import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  submitted = false;
  disableLogin = false;
  LoginForm : FormGroup;
  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

  constructor(private router: Router,private formBuilder : FormBuilder,private toastr: ToastrService,private authService:AuthenticationService) { }
 
  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      emailId: ['',[ Validators.required,Validators.pattern(this.emailpattern)]],
			password: ['',[ Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-6]).{6,}')]],
		});
  }

  get f() { return this.LoginForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.LoginForm.invalid) {
      this.toastr.warning('Invalid Entry');
			return;
    }
    else{
      this.authService.login(this.LoginForm.value)
      .subscribe(result =>{
        if(result){
          this.toastr.success('Good to Go');
            this.router.navigate(['/homepage']);
          }
          
          else{
            this.toastr.error('Invalid Login');
          }
        })
    }
  }
  
  reset(){
    this.LoginForm.reset();
  }
}
