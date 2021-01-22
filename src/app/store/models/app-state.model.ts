import { TodoState } from './../reducers/todo.reducer';

export interface AppState {
    readonly todo: TodoState
}