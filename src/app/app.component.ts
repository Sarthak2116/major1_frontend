import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoInvest';
  constructor(private httpService: HttpClient, private http: HttpClient) {}
  arr: string [];
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.httpService.get('./assets/stocks.json').subscribe(
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
