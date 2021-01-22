
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoNgrxComponent } from './todo-ngrx/todo-ngrx.component';

const routes: Routes = [
  {path: '', component: TodoNgrxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
