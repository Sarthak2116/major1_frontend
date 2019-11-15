import { Component, OnInit } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  a = '65';
  tf = '$20,000';
  invf = '$12,000';
  lf = '$8,000';
  constructor() { }
  ngOnInit() {
  }

}
