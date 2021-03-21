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
      Username: [''],
      Password: ['']
    });
    this.signupForm = this.fb.group({
      U_name: [''],
      Email_id: [''],
      U_pass: [''],
      U_c_pass: ['']
    })
  }

  ngOnInit() {
    if(this.authService.getToken()!=null)
    {
      this.router.navigate(['/predict']);
    }
  }

  loginUser() {
    if(this.signinForm.value.Username!=='' && this.signinForm.value.Username!==null &&
    this.signinForm.value.Password!=='' && this.signinForm.value.Password!==null)
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
    if(this.signupForm.value.U_name!=='' && this.signupForm.value.U_name!==null
    && this.signupForm.value.U_pass!=='' && this.signupForm.value.U_pass!==null 
    && this.signupForm.value.Email_id!=='' && this.signupForm.value.Email_id!==null)
    {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      this.a=0;
      this.router.navigate(['']);
      });
    }
    else{
  this.signupForm.reset();
  this.router.navigate(['register']);
  this.a=1;
}
}
}