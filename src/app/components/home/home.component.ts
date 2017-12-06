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

  public zoekertjes: Zoekertje[];
  public searchText: string;

  constructor(private zoekertjesService: ZoekertjesService, private router: Router) { }

  ngOnInit() {
    this.zoekertjesService.getAll().subscribe(zoekertjes => {
      this.zoekertjes = zoekertjes;
    });
    console.log(this.zoekertjes);
  }

}
