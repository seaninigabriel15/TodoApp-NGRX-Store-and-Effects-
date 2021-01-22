import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LoadItemAction, TodoActionTypes, LoadItemSuccessAction, LoadItemFailureAction, AddItemAction, AddItemSuccessAction, AddItemFailureAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction } from '../actions/todo.actions'
import { of } from 'rxjs';
import { TodoServiceService } from 'src/app/todo-service.service';

@Injectable()
export class TodoEffects {

  @Effect() loadTodo$ = this.actions$
    .pipe(
      ofType<LoadItemAction>(TodoActionTypes.LOAD_ITEM),
      mergeMap(
        () => this.todoService.getTodoItems()
          .pipe(
            map(data => {
              return new LoadItemSuccessAction(data)
            }),
            catchError(error => of(new LoadItemFailureAction(error))),
          ),
      ),
  );

  @Effect() addTodoItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(TodoActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.todoService.addTodoItem(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          ),
      ),
  );
  
  @Effect() deleteTodoItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(TodoActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.todoService.deleteTodoItem(data.payload)
          .pipe(
            map(() => new DeleteItemSuccessAction(data.payload)),
            catchError(error => of(new DeleteItemFailureAction(error)))
          ),
      ),
    );

  constructor(
    private actions$: Actions,
    private todoService: TodoServiceService
  ) { }
}