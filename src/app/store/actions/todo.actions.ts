import { Action } from '@ngrx/store'
import {TodoItem} from '../models/todo-item.model'

export enum TodoActionTypes {
    LOAD_ITEM = '[TODO] Load Item',// this action is part of the todo state
    LOAD_ITEM_SUCCESS = '[TODO] Load Item Success',
    LOAD_ITEM_FAILURE = '[TODO] Load Item Failure',
    ADD_ITEM = '[TODO] Add Item', // this action is part of the todo state
    ADD_ITEM_SUCCESS = '[TODO] Add Item Success',
    ADD_ITEM_FAILURE = '[TODO] Add Item Failure',
    DELETE_ITEM = '[TODO] Delete Item', // this action is part of the todo state
    DELETE_ITEM_SUCCESS = '[TODO] Delete Item Success',
    DELETE_ITEM_FAILURE = '[TODO] Delete Item Failure'
 
}
export class LoadItemAction implements Action {
    readonly type = TodoActionTypes.LOAD_ITEM 
  }
  export class LoadItemSuccessAction implements Action {
    readonly type = TodoActionTypes.LOAD_ITEM_SUCCESS
    constructor(public payload: Array<TodoItem>) {}
  }
  export class LoadItemFailureAction implements Action {
    readonly type = TodoActionTypes.LOAD_ITEM_FAILURE   
    constructor(public payload: Error) {}
  }

export class AddItemAction implements Action{
    readonly type= TodoActionTypes.ADD_ITEM;
    constructor(public payload : TodoItem){}
}
export class AddItemSuccessAction implements Action {
    readonly type = TodoActionTypes.ADD_ITEM_SUCCESS
    constructor(public payload: TodoItem) { }
  }
  export class AddItemFailureAction implements Action {
    readonly type = TodoActionTypes.ADD_ITEM_FAILURE
    constructor(public payload: Error) { }
  }
export class DeleteItemAction implements Action{
    readonly type= TodoActionTypes.DELETE_ITEM;
    constructor(public payload : string){}
}
export class DeleteItemSuccessAction implements Action {
    readonly type = TodoActionTypes.DELETE_ITEM_SUCCESS
  
    constructor(public payload: string) { }
  }
  export class DeleteItemFailureAction implements Action {
    readonly type = TodoActionTypes.DELETE_ITEM_FAILURE
  
    constructor(public payload: string) { }
  }

export type TodoAction =  LoadItemAction |
                          LoadItemFailureAction |
                          LoadItemSuccessAction | 
                          AddItemAction |
                          AddItemSuccessAction |
                          AddItemFailureAction |
                          DeleteItemAction |
                          DeleteItemSuccessAction |
                          DeleteItemFailureAction;