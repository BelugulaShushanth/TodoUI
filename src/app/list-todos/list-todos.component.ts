import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn Music', false, new Date()),
    new Todo(2, 'Learn Angular', false, new Date()),
    new Todo(3, 'Go to gym', true, new Date())
  ]

  constructor(private authService:AuthenticationService, private router:Router){
    if(!authService.isLoggedIn()){
      router.navigate(["login"]);
    }
  }
}
