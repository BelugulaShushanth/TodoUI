import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, public authService : AuthenticationService){}

  username : string = ""
  password: string = ""

  errorMsg = "Invalid Credentials"
  successMsg = "Logged in successfully"

  loggedIn = false;
  invalidLogin = false;

  handleLogin(){
    if(this.authService.authenticate(this.username, this.password)){
      this.invalidLogin = false; 
      this.router.navigate(['welcome',this.username])
    }
    else{
      this.invalidLogin = true;
    }
  }
}
