import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  arr: string [];
  constructor(private httpService: HttpClient, private http: HttpClient) { }

  ngOnInit() {
    this.httpService.get('http://18.234.126.177:8080/stocks/prvalue').subscribe(
      data => {
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA
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
    return this.http.post('http://18.234.126.177:8080/stocks',
    {
      stkid: pred.stk_id,
      quant: 1,
      description: pred.stk_name,
      initcost: pred.cur_price
    })
    .subscribe(data => {console.log('We got yaa!!!');
   });
  }
}
