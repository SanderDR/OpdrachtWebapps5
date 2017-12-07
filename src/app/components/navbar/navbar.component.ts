import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public current: string;

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.current = JSON.parse(localStorage.getItem('currentUser')).username;
    };
  }

  

}
