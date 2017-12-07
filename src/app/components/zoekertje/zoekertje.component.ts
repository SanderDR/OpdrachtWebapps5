import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import {ZoekertjesService} from '../../services/zoekertjes.service';
import {ReactiesService} from '../../services/reacties.service';
import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Zoekertje} from '../../models/zoekertje';
import {Reactie} from '../../models/reactie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-zoekertje',
  templateUrl: './zoekertje.component.html',
  styleUrls: ['./zoekertje.component.css']
})
export class ZoekertjeComponent implements OnInit {

  public zoekertje: Zoekertje;
  public id: string;
  public reactie: FormGroup;

  constructor(public authService: AuthService, private reactiesService: ReactiesService, private zoekertjesService: ZoekertjesService, private router: Router, private route: ActivatedRoute,  private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = '' +  this.route.snapshot.params['id'];
      this.zoekertjesService.getZoekertje(this.id).subscribe(res => {
        this.zoekertje = res;
      });
    });
    if(this.authService.loggedIn()){
    this.reactie = this.fb.group({
      inhoud: ['', [Validators.required]],
      by: [JSON.parse(localStorage.getItem('currentUser')).username]
    });
  }
  }

  onSubmit(){
    this.reactiesService.addReactie(this.reactie.value.inhoud, this.reactie.value.by, this.id).subscribe( val => {
      if(val){
        window.location.reload();
      }
    })
  }

}
