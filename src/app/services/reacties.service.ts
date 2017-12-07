import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ReactiesService {
  private _url = '/API/reacties';

  constructor(private http: Http) {}

  addReactie(inhoud: string, by: string, zoekertjeId: string): Observable<boolean>{
    return this.http.post(`${this._url}/add`, { inhoud: inhoud, by: by, zoekertjeId: zoekertjeId})
    .map(res => res.json()).map(res =>{
      if(res.added){
        return true;
      }
    });
  }
}
