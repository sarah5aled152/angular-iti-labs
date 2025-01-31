import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() sortTodos = new EventEmitter<any>();
}
