import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

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

  user : string | null = ''

  todos : Todo[] = []

  deleteMsg : string = ''

  constructor(private authService:AuthenticationService, private router:Router,
              private todoService : TodoService){
   
  }

  ngOnInit(){
      this.user = sessionStorage.getItem('authenticatedUser');
      this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.getAllTodos(this.user).subscribe(
      response => this.todos = response
    )
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo(this.user,id).subscribe(
      response => {
        this.deleteMsg = `Todo with id ${id} is deleted successfully`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id:number){
    this.router.navigate([`todo/${id}`])
  }

  addTodo(){
    this.router.navigate([`todo/addTodo`])
  }
}
