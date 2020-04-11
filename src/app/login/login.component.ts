import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';

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

  ngOnInit() { }

  loginUser() {
    this.authService.signIn(this.signinForm.value);
    // console.log(this.authService.signIn(this.signinForm.value)['status']);
      if (this.authService.signIn(this.signinForm.value)) {
      this.signinForm.reset();
      this.a=1;
      // this.router.navigate(['login']);
      }
  }
}