import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bought',
  templateUrl: './bought.component.html',
  styleUrls: ['./bought.component.css']
})
export class BoughtComponent implements OnInit {
  arr: string [];
  constructor(private httpService: HttpClient, private http: HttpClient) { }

  ngOnInit() {
    this.httpService.get('http://18.234.126.177:8080/stocks').subscribe(
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

}
