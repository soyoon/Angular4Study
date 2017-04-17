import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Todo} from "app/models/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('form') todoForm: NgForm;
  submitted = false;
  todolist: Todo[];

  constructor() {
  }

  ngOnInit() {
    this.todolist = [];
  }

  onAddTodoList() {
    const todoValue = this.todoForm.value.todoData.todo;
    console.log(todoValue);

    if(todoValue !== '' && todoValue != null) {
      this.submitted = true;
      this.todolist.push({ todo: todoValue, checked: false});
      this.todoForm.onReset();
    }
  }

  onDeleteTodo(idx) {
    this.todolist.splice(idx,1);
  }

  onCheckTodo(idx) {
    this.todolist[idx].checked = !this.todolist[idx].checked;
  }
}
