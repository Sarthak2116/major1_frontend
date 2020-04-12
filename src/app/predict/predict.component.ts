import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';
import { BuycomComponent } from '../buycom/buycom.component';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class PredictComponent implements OnInit {
  arr: string [];
  data: {'Stocks': []};
  selected= 1;
  market = 'trending_up';
  // tslint:disable-next-line: ban-types
  currentUser: Object = {};
  constructor(public dialog: MatDialog, private httpService: HttpClient, private http: HttpClient, public authService: AuthService,
    private actRoute: ActivatedRoute) {
      // tslint:disable-next-line: prefer-const
      this.authService.getUserProfile().subscribe(res => {
      this.currentUser = res.msg;
    })
     }
  ngOnInit() {
    this.httpService.get(environment.Route+'/stocks/prvalue').subscribe(
      data => {
        // tslint:disable-next-line: no-string-literal
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  getData(pred,s) {
    console.log('getData');
    // tslint:disable-next-line: radix
    s=parseInt(s);
    console.log(typeof(s));
    // tslint:disable-next-line: radix
    const cost=parseFloat((pred.cur_price).toFixed(2));
    return this.http.post(environment.Route+'/stocks',
    {
      quant: s,
      description: pred.stk_name,
      initcost: cost
    })
    .subscribe(data => {});
  }
  openDialog(pred,s): void {
    // tslint:disable-next-line: no-use-before-declare
    this.getData(pred,s);
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(BuycomComponent, {
      width: '250px',
    });
  }
  check(a,b): boolean{
    a=parseFloat(a);
    b=parseFloat(b)
    if(a>b)
    {
      return false;
    }
    return true;
  }
}