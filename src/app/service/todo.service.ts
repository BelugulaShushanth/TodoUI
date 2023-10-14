import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

export class Todo{
  constructor(public id:number, public description:string,
            public done:boolean, public targetDate:Date){}
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { }

  private todoUrl:string = 'http://localhost:8191/user';

  getHeader(){
    let username = 'user';
    let password = '3a26a8b9-a467-455e-a0e9-313ed1038652';
    let header = new HttpHeaders({
      Authorization : 'Basic ' + window.btoa(username+":"+password)
    })
    return header
  }

  getAllTodos(username:string | null){
    return this.httpClient.get<Todo[]>(this.todoUrl+`/${username}/getAllTodos`, {headers:this.getHeader()})
  }

  deleteTodo(username:string | null, id:number){
    return this.httpClient.delete(this.todoUrl+`/${username}/deleteTodo/${id}`)
  }

  getTodoById(username:string | null, id:number){
    return this.httpClient.get<Todo>(this.todoUrl+`/${username}/getTodoById/${id}`)
  }

  updateTodo(username:string | null, todo:Todo){
    return this.httpClient.put<Todo>(this.todoUrl+`/${username}/updateTodo`,todo);
  }

  addTodo(username:string | null, todo:Todo){
    return this.httpClient.post<Todo>(this.todoUrl+`/${username}/addTodo`,todo);
  }
}
