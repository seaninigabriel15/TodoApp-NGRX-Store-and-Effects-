import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoReducer } from './store/reducers/todo.reducer';
import { TodoNgrxComponent } from './todo-ngrx/todo-ngrx.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from  'src/environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    TodoNgrxComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
       todo:TodoReducer,
    }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({maxAge:25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
