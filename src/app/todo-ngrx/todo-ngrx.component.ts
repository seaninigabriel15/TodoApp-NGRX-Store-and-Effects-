import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from '../store/models/app-state.model';
import { TodoItem } from './../store/models/todo-item.model';
import { AddItemAction,DeleteItemAction,LoadItemAction } from '../store/actions/todo.actions';

@Component({
  selector: 'app-todo-ngrx',
  templateUrl: './todo-ngrx.component.html',
  styleUrls: ['./todo-ngrx.component.css']
})
export class TodoNgrxComponent implements OnInit {


  
  todoItems$:Observable<Array<TodoItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newTodoItem: TodoItem = { id: '', name: '' }

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
   this.todoItems$ = this.store.select(store => store.todo.list);
   this.loading$ = this.store.select(store => store.todo.loading);
    this.error$ = this.store.select(store => store.todo.error); 
   this.store.dispatch(new LoadItemAction());
  }
  addItem() {
    this.newTodoItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newTodoItem));
    this.newTodoItem = { id: '', name: '' };

  }
  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
