import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import {ZoekertjesService} from '../../services/zoekertjes.service';
import {ReactiesService} from '../../services/reacties.service';
import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Zoekertje} from '../../models/zoekertje';
import {Reactie} from '../../models/reactie';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-zoekertje',
  templateUrl: './zoekertje.component.html',
  styleUrls: ['./zoekertje.component.css']
})
export class ZoekertjeComponent implements OnInit {

  public zoekertje: Zoekertje;
  public comments: Reactie[] = [];
  public id: string;
  public reactie: FormGroup;

  constructor(public authService: AuthService, private reactiesService: ReactiesService, private zoekertjesService: ZoekertjesService, private router: Router, private route: ActivatedRoute,  private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = '' +  this.route.snapshot.params['id'];
      this.zoekertjesService.getZoekertje(this.id).subscribe(res => {
        this.zoekertje = res;
        for( let id of res.comments){
            this.reactiesService.getReactie(id).subscribe(res =>{
              let reactie = res;
              this.reactiesService.getCommenter(reactie.by).subscribe(res => {
                reactie.by = res;
              });
              this.comments.push(reactie);
            });
        }
      });
    });
    if(this.authService.loggedIn){
    this.reactie = this.fb.group({
      inhoud: ['', [Validators.required]],
      by: [JSON.parse(localStorage.getItem('currentUser')).username]
    });
  }
  }

  onSubmit(){
    var monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
    "Juli", "Augustus", "September", "October", "November", "December"
  ];
    var today = new Date();
    this.reactiesService.addReactie(this.reactie.value.inhoud, today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear(), this.reactie.value.by, this.id).subscribe( val => {
      if(val){
        window.location.reload();
      }
    })
  }

}
