import { Injectable } from '@angular/core';
import{User} from '../models/user';

import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _appUrl = 'http://localhost:4200/API/users';

  constructor(private http:Http) { }

  get getUsers(): Observable<User[]> {
    return this.http.get(this._appUrl).map(response => 
      response.json().map(item => 
      new User(item.name, item.username, item.email, item.password)
    )
  );
  }

  registerUser(user){
    return this.http.post(this._appUrl, user)
      .map(res => res.json());
  }
}
