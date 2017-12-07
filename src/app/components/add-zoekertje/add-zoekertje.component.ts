import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { ZoekertjesService } from '../../services/zoekertjes.service'
import { Zoekertje } from '../../models/zoekertje';

function imageValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    console.log(control.value);
    return control.value.split('.')[1] =='png' || 'jpg' ? {'NoImage':'Must be an image'}: null;
  };
}

@Component({
  selector: 'app-add-zoekertje',
  templateUrl: './add-zoekertje.component.html',
  styleUrls: ['./add-zoekertje.component.css']
})
export class AddZoekertjeComponent implements OnInit {
  public zoekertje: FormGroup;
  public isInvalidFoto: boolean;
  public current: string = JSON.parse(localStorage.getItem('currentUser')).username;
  
  constructor(private zoekertjesService: ZoekertjesService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.zoekertje = this.fb.group({
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      pic: [''],
      from: this.current
    });
  }


  onFileChange($event) {
    let file = $event.target.files[0]; // <--- File Object for future use.
    if(file.name.split('.')[1]!=='png' && file.name.split('.')[1]!=='jpg'){
      this.isInvalidFoto = true;
    }else{
      this.isInvalidFoto = false;
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.zoekertje.value.pic = btoa(binaryString);
   }

  onSubmit(){
    if(this.zoekertje.value.pic === ''){
      this.isInvalidFoto = true;
      this.zoekertje.controls["pic"].markAsTouched();
    }
    if(!this.isInvalidFoto){
    this.zoekertjesService.addZoekertje(this.zoekertje.value.name, this.zoekertje.value.description,  this.zoekertje.value.price, this.zoekertje.value.location, this.zoekertje.value.from, this.zoekertje.value.pic).subscribe(val => {
      if (val) {
        this.router.navigate(['/']);
      }
    });
  }
  }

}
