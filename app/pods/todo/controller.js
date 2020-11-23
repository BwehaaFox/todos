import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class TodoController extends Controller {

  @service('todo-control') todo_service;

  @tracked is_input_error = false;
  @tracked is_done = this.todo.isDone;

  get todo() {
    return { ...this.model };
  }

  @action
  inputChanged({ target: { value } }) {
    this.is_input_error = !value;
    this.input_name = value

    if(value) {
      this.todo_service.renameTodo(this.todo.id, value);
    } 
  }

  @action
  toggleDone() {
    let todo = this.todo;
    this.todo_service.unpdateTodo(todo.id, this.is_done = !this.is_done);
  }

}
