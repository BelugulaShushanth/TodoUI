import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username : string, password : string){
    if(username.toLowerCase() === 'sushanth' && password === '12345'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return sessionStorage.getItem('authenticatedUser') != null;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
