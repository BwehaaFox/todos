import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TodoControlService extends Service {

  @tracked _todos;

  constructor() {
    super(...arguments)
    let todos_data = localStorage.getItem('todos');
    this._todos = todos_data ? JSON.parse(todos_data) : []
  }

  get todos() {
    return this._todos;
  }

  unpdateTodo(index, state) {
    this._todos[index].isDone = !!state;
    this.refrechData();
  }

  renameTodo(index, new_name) {
    this._todos[index].name = new_name;
    this.refrechData();
  }

  createTodo(name, isDone = false) {
    this._todos.push({ name, isDone });
    this.refrechData();
  }

  refrechData() {
    let todos = this._todos = this._todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}