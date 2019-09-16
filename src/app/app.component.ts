import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoInvest';
  constructor(private httpService: HttpClient) { }
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
}
