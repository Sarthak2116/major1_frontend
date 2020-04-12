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
  color='#00ff00';
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
        if(this.lf>3000)
        {
          this.lf=3000;
        }
        this.ivf=this.tf-this.lf;
        if(this.ivf<0){
          this.ivf=0;
        }
        this.per=(this.ivf/this.tf)*100;
        if(this.per<50)
        {
          this.color='rgb(60,179,113)';
        }
        else if(this.per>=50 && this.per<75)
        {
          this.color='#FFA500';
        }
        else
        {
          this.color='rgb(139,0,0)';
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
