import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
 
/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  color='#981B40';

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {});
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['dashboard.component.css']
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   call=true;
//   lf = 0;
//   tf = 50000.00;
//   ivf = 0;
//   per=0;
//   s;
//   hide=true;
//   color='#981B40';
  
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
