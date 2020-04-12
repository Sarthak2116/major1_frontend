import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-buycom',
  templateUrl: './dialog.html',
  styles: ['./dialog.css'],
})
export class BuycomComponent {

    constructor(
    public dialogRef: MatDialogRef<BuycomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
    this.dialogRef.close();
  }

}
