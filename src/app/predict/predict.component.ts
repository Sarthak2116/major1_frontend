import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class PredictComponent implements OnInit {
  arr: string [];
  data: {'Stocks': []};
  // tslint:disable-next-line: ban-types
  currentUser: Object = {};
  constructor(private httpService: HttpClient, private http: HttpClient, public authService: AuthService,
    private actRoute: ActivatedRoute) {
      // tslint:disable-next-line: prefer-const
      // let id = this.actRoute.snapshot.paramMap.get();
      this.authService.getUserProfile().subscribe(res => {
      this.currentUser = res.msg;
    })
     }
  ngOnInit() {
    this.httpService.get('http://localhost:8080/stocks/prvalue').subscribe(
      data => {
        // tslint:disable-next-line: no-string-literal
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA
      },
        // response => console.log(response)
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  getData(pred) {
    console.log('getData');
    return this.http.post('http://localhost:8080/stocks',
    {
      quant: 1,
      description: pred.stk_name,
      initcost: pred.cur_price
    })
    .subscribe(data => {console.log('We got yaa!!!');
   });
  }
}
