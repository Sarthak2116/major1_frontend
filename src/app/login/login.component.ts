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
  a=0;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      Username: [''],
      Password: ['']
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
}