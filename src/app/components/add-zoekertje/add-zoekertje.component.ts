import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { ZoekertjesService } from '../../services/zoekertjes.service'

@Component({
  selector: 'app-add-zoekertje',
  templateUrl: './add-zoekertje.component.html',
  styleUrls: ['./add-zoekertje.component.css']
})
export class AddZoekertjeComponent implements OnInit {
  public zoekertje: FormGroup;

  constructor(private zoekertjesService: ZoekertjesService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.zoekertje = this.fb.group({
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      pic: [''],
      from: JSON.parse(localStorage.getItem('currentUser')).username
    });
  }

  onSubmit(){
    this.zoekertjesService.addZoekertje(this.zoekertje.value.name, this.zoekertje.value.description,  this.zoekertje.value.price, this.zoekertje.value.location, this.zoekertje.value.from, this.zoekertje.value.pic).subscribe(val => {
      if (val) {
        this.router.navigate(['/']);
      }
    });
  }

}
