import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  a=0;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      U_name: [''],
      Email_id: [''],
      U_pass: ['']
    })
  }

  ngOnInit() { }

  registerUser() {
      this.authService.signUp(this.signupForm.value).subscribe((res) => {
        this.a=0;
        this.router.navigate(['']);
        });
    this.signupForm.reset();
    this.router.navigate(['register']);
    this.a=1;
  }
}