import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from './store/models/todo-item.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private TODO_URL = "http://localhost:3000/todoList";
  constructor(private http: HttpClient) { }

  getTodoItems() {
    return this.http.get<TodoItem[]>(this.TODO_URL)
      .pipe(
      delay(500)
    )
  }

  addTodoItem(todoItem: TodoItem) {
    return this.http.post(this.TODO_URL,todoItem)
      .pipe(
        delay(500)
      )
  }

  deleteTodoItem(id: string) {
    return this.http.delete(`${this.TODO_URL}/${id}`)
      .pipe(
        delay(500)
      )
  }
}
