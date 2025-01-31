import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css'],
})
export class TodoWrapperComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(todoText: string) {
    this.todos.push({ text: todoText, completed: false });
    this.sortTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.sortTodos();
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
  sortTodos(): void {
    this.todos = this.todos.sort((a, b) => {
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    });
  }
}
