import { Component, OnInit } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  lf = 0;
  tf = 3000;
  ivf = 0;
  per=0;
  // tslint:disable-next-line: ban-types
  currentUser: Object = {};
  constructor(private httpService: HttpClient, private http: HttpClient, public authService: AuthService,
    private actRoute: ActivatedRoute) {
      // tslint:disable-next-line: prefer-const
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.authService.getUserProfile().subscribe(res => {
      this.currentUser = res.msg;
    })
     }
  ngOnInit() {
    this.httpService.get(environment.Route+'/stocks/balance').subscribe(
      data => {
        this.lf = data as number;	 // FILL THE ARRAY WITH DATA
        this.ivf=this.tf-this.lf;
        this.per=(this.ivf/this.tf)*100;
      },
        // response => console.log(response)
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
