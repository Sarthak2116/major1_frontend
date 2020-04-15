import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { BuycomComponent } from '../buycom/buycom.component';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  call_market=true;
  arr: string [];
  market = 'trending_up';
  // tslint:disable-next-line: ban-types
  currentUser: Object = {};
  constructor(public dialog: MatDialog, private httpService: HttpClient, private http: HttpClient, public authService: AuthService,
    private actRoute: ActivatedRoute) {
     }
  ngOnInit(): void {
    this.httpService.get(environment.Route+'/stocks/market').subscribe(
      data => {
        let i=0;
        // tslint:disable-next-line: no-string-literal
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA
        console.log(this.arr);
        for(i=0;i<this.arr.length;i++)
        {
          const s='selected';
          (this.arr[i])[s]='1';
        }
        this.call_market=false;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  getData(pred,s) {
    // tslint:disable-next-line: radix
    s=parseInt(s);
    // tslint:disable-next-line: radix
    const cost=parseFloat((pred.cur_price).toFixed(2));
    this.http.post(environment.Route+'/stocks',
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
  convert(a,b)
  {
    // a=parseFloat(a);
    // b=parseFloat(b);
    console.log(typeof(b));
    const c=parseFloat(((a*b).toFixed(2)));
    return c;
  }
  trackById(item) {
    return item.id
}
}
