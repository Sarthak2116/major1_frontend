import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  signupForm: FormGroup;
  a=0;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      mno: [''],
      password: ['']
    });
    this.signupForm = this.fb.group({
      full_name: [''],
      mno: [''],
      email: [''],
      password: [''],
      U_c_pass: ['']
    })
  }

  ngOnInit() {
    if(this.authService.getToken()!=null)
    {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser() {
    console.log(this.signinForm.value)
    if(this.signinForm.value.mno!=='' && this.signinForm.value.mno!==null &&
    this.signinForm.value.password!=='' && this.signinForm.value.password!==null)
    {
    const t = this.authService.signIn(this.signinForm.value);
      if(!t)
      {
        this.signinForm.reset();
        this.a=1;
      }
    }
    else
    {
      this.signinForm.reset();
      this.a=1;
    }
  }
  registerUser() {
    if(this.signupForm.value.email!=='' && this.signupForm.value.email!==null
    && this.signupForm.value.password!=='' && this.signupForm.value.password!==null 
    // && this.signupForm.value.password!=this.signupForm.value.password
    && this.signupForm.value.Email_id!=='' && this.signupForm.value.Email_id!==null)
    {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      this.signupForm.reset();
      this.a=0;
      this.router.navigate(['\login']);
      });
    }
    else{
  this.signupForm.reset();
  // this.router.navigate(['register']);
  this.a=1;
}
}
}