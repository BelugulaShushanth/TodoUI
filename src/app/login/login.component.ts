import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { TodoService } from '../service/todo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, public authService : AuthenticationService){
    }

  username : string = ""
  password: string = ""

  errorMsg = "Invalid Credentials"
  successMsg = "Logged in successfully"

  loggedIn = false;
  invalidLogin = false;

  getHeader(username : string, password : string){
    return 'Basic '+window.btoa(username+":"+password)
  }

  handleLogin(){

    this.authService.authenticate(this.getHeader(this.username,this.password)).subscribe(
      success => {
        console.log("Success: "+success)
        this.invalidLogin = false; 
        sessionStorage.setItem('authenticatedUser', this.username)
        sessionStorage.setItem('authToken',this.getHeader(this.username,this.password))
        this.router.navigate(['welcome',this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
    )
  }

  
}
