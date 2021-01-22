import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNgrxComponent } from './todo-ngrx.component';

describe('TodoNgrxComponent', () => {
  let component: TodoNgrxComponent;
  let fixture: ComponentFixture<TodoNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
