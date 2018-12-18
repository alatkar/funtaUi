import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'funta-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn = true;
  constructor() { }

  ngOnInit() {
  }

}
