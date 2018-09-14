import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus = '';
  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('loggedIn'));
    this.loginStatus = localStorage.getItem('loggedIn');
  }

}
