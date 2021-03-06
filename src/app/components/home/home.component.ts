import { Component, OnInit } from '@angular/core';
import {Zoekertje} from '../../models/zoekertje';
import {ZoekertjesService} from '../../services/zoekertjes.service';
import {Router} from '@angular/router'
import {ZoekertjesPipe} from '../../pipes/zoekertjes.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _zoekertjes: Zoekertje[] = [];
  public searchText: string;
  public page = 1;
  public totalZoekertjes: number;

  constructor(private zoekertjesService: ZoekertjesService, private router: Router) { }

  ngOnInit() {
    this.zoekertjesService.getAll().subscribe(zoekertjes => {
      this._zoekertjes = zoekertjes;
      this.totalZoekertjes = this._zoekertjes.length;
    });
  }

  get zoekertjes(){
    return this._zoekertjes.slice((this.page-1)*9,this.page*9);
  }

}
