import { Component, OnInit } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

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
  constructor(private httpService: HttpClient, private http: HttpClient) { }
  ngOnInit() {
    this.httpService.get('http://18.234.126.177:8080/stocks/invalue').subscribe(
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
