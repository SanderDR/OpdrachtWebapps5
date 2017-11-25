import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    //roep register post aan
    this.authService.registerUser(user).subscribe(() => {
    this.router.navigateByUrl('/');
    });
  }
}
