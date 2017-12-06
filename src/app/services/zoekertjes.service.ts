import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ZoekertjesService {
  private _url = '/API';

  constructor(private http: Http) {}

  addZoekertje(name: string, description: string, price: number, location: string, from: string, pic: string): Observable<boolean>{
    return this.http.post(`${this._url}/zoekertje`, { name: name, description: description, price: price, location: location, from: from, pic: pic })
    .map(res => res.json()).map(res =>{
      if(res.added){
        return true;
      }
    });
  }

  getAll(){
    return this.http.get(`${this._url}/zoekertjes`)
    .map(res => res.json().map(res =>{
      return res;
    }));
  }

  getZoekertje(id: string){
    return this.http.get(`${this._url}/zoekertje/${id}`)
    .map(res => res.json());
  }

}
