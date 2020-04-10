import { Component, OnInit } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  a = 65;
  tf = '$20,000';
  invf = '$12,000';
  lf = '$8,000';
  // tslint:disable-next-line: ban-types
  currentUser: Object = {};
  constructor(private httpService: HttpClient, private http: HttpClient, public authService: AuthService,
    private actRoute: ActivatedRoute) {
      // tslint:disable-next-line: prefer-const
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
     }
  ngOnInit() {
    this.httpService.get('http://18.234.126.177:8080/stocks/balance').subscribe(
      data => {
        // this.a = data;	 // FILL THE ARRAY WITH DATA
        // console.log(this.a[0]);
      },
        // response => console.log(response)
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
