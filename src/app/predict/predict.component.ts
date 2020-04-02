import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class PredictComponent implements OnInit {
  arr: string [];
  data: {'Stocks': []};
  constructor(private httpService: HttpClient, private http: HttpClient) { }
  // API KEY Q1VXVY4DNLC6ZP6T
  ngOnInit() {
    this.httpService.get('http://localhost:8080/stocks').subscribe(
      data => {
        // tslint:disable-next-line: no-string-literal
        this.arr = data['Stocks'] as string [];	 // FILL THE ARRAY WITH DATA
        console.log(this.arr[0]);
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
      stkid: pred.stkid,
      quant: 1,
      description: pred.description,
      initcost: pred.initcost
    })
    .subscribe(data => {console.log('We got yaa!!!');
   });
  }
}
