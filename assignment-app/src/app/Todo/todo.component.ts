import { Component, OnInit } from '@angular/core';
import {data} from "../data";
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [` span {
                    display: inline-block;
                    width: 8%;
                  }`
          ],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = data;
  editTodo: Todo;

  constructor(private TodoService: TodoService) {}

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): Todo[]{
    return this.todos;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    const newItem: Todo = { name } as Todo;
    this.TodoService
      .addTodo(newItem)
      .subscribe(item => this.todos.push(item));
  }

  delete(item: Todo): void {
    this.todos = this.todos.filter(h => h !== item);
    this.TodoService
      .deleteTodo(item.name)
      .subscribe();
  }
}