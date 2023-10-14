import { Component } from '@angular/core';
import { Todo, TodoService } from '../service/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  user:string | null = ''

  id:number = 0

  todo: Todo = {} as any;

  message:string = ''
  
  constructor(private todoService:TodoService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    this.user = sessionStorage.getItem('authenticatedUser')
    
    if(this.activatedRoute.snapshot.params['id'] !== "addTodo"){
      this.getTodo(this.activatedRoute.snapshot.params['id'])
    }
}

  getTodo(id:number){
    this.todoService.getTodoById(this.user,id).subscribe(
      response => this.todo = response
    )
  }

  saveTodo(todo:Todo){
    if(this.activatedRoute.snapshot.params['id'] !== "addTodo"){
      this.todoService.updateTodo(this.user, todo).subscribe(
        response => {
          this.todo = response
          if(this.todo.id != null){
            this.message = "Todo Updated"
          }
        }
      )
    }
    else{
      this.todoService.addTodo(this.user, todo).subscribe(
        response => {
          this.todo = response
          if(this.todo.id != null){
            this.message = "Todo Saved"
          }
        }
      )
    }
  }

}
