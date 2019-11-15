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
    this.httpService.get('../assets/stocks.json').subscribe(
      data => {
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA.
        // console.log(this.arr[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  getData() {
    console.log('getData');
    return this.http.get('http://localhost:8080/stocks')
    .subscribe(data => {console.log('We got yaa!!!');
   });
  }
}
