import { Component, OnInit } from '@angular/core';
import {Zoekertje} from '../../models/zoekertje';
import {ZoekertjesService} from '../../services/zoekertjes.service';
import {Router} from '@angular/router'
import {ZoekertjesPipe} from '../../pipes/zoekertjes.pipe';

@Component({
  selector: 'app-my-zoekertjes',
  templateUrl: './my-zoekertjes.component.html',
  styleUrls: ['./my-zoekertjes.component.css']
})
export class MyZoekertjesComponent implements OnInit {

  private _zoekertjes: Zoekertje[] = [];
  public searchText: string;
  public page = 1;
  public totalZoekertjes: number;

  constructor(private zoekertjesService: ZoekertjesService, private router: Router) { }

  ngOnInit() {
    this.zoekertjesService.getAllFromUser(JSON.parse(localStorage.getItem('currentUser')).id).subscribe(zoekertjes => {
      this._zoekertjes = zoekertjes;
      this.totalZoekertjes = this._zoekertjes.length;
    });
  }

  get zoekertjes(){
    return this._zoekertjes.slice((this.page-1)*10,this.page*10);
  }

}
