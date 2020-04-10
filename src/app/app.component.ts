import { Component, Inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
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
  constructor(private httpService: HttpClient, private http: HttpClient, public authService: AuthService) {}
  arr: string [];
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}
  logout() {
    this.authService.doLogout()
  }
}
