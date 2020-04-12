import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'reverse'
})
@Component({
  selector: 'app-bought',
  templateUrl: './bought.component.html',
  styleUrls: ['./bought.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class BoughtComponent implements OnInit,PipeTransform {
  arr: string [];
  constructor(private httpService: HttpClient, private http: HttpClient) { }

  ngOnInit() {
    this.httpService.get(environment.Route+'/stocks').subscribe(
      data => {
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  transform(arr) {
    const copy = arr.slice();
    return copy.reverse();
}

}
