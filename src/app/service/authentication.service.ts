import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private todoService:TodoService) { }


  authenticate(header:string){
    return this.todoService.authenticateUser(header)
  }

  isLoggedIn(){
    return sessionStorage.getItem('authenticatedUser') != null;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('authToken')
  }
}
