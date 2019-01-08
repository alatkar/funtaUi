import { Component } from '@angular/core';

@Component({
  selector: 'funta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLogin: boolean = false;
  title = 'ui';
  constructor() {
    this.isLogin = window.location.pathname.includes('login');
  }
}
