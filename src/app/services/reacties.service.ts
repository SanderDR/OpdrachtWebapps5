import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ReactiesService {
  private _url = '/API/reacties';

  constructor(private http: Http) {}

  addReactie(inhoud: string, when: string, by: string, zoekertjeId: string): Observable<boolean>{
    console.log(when);
    return this.http.post(`${this._url}/add`, { inhoud: inhoud, when: when, by: by, zoekertjeId: zoekertjeId})
    .map(res => res.json()).map(res =>{
      if(res.added){
        return true;
      }
    });
  }

  getReactie(id: string){
    return this.http.get(`${this._url}/get/${id}`, )
    .map(res => res.json());
  }

  getCommenter(id: string){
    return this.http.get(`${this._url}/Commenter/${id}`, )
    .map(res => res.json());
  }
}
