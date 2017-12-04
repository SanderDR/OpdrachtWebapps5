import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ZoekertjesService {
  private _url = '/API/zoekertje';

  constructor(private http: Http) {}

  addZoekertje(name: string, description: string, price: number, location: string, from: string, pic: string): Observable<boolean> {
    return this.http.post(`${this._url}/zoekertje`, { name: name, description: description, price: price, location: location, from: from, pic: pic })
      .map(res => res.json());
  }

}
