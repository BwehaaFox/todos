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

  /**
   * Обновление флага выполнения задачи
   * @param {*} index 
   * @param {*} state 
   */
  unpdateTodo(index, state) {
    this._todos[index].isDone = !!state;
    this.refrechData();
  }

  /**
   * Установка нового имени задачи
   * @param {*} index 
   * @param {*} new_name 
   */
  renameTodo(index, new_name) {
    this._todos[index].name = new_name;
    this.refrechData();
  }

  /**
   * Создание новой задачи
   * @param {*} name 
   * @param {*} isDone 
   */
  createTodo(name, isDone = false) {
    this._todos.push({ name, isDone });
    this.refrechData();
  }

  /**
   * Обновление и сохранение данных
   */
  refrechData() {
    let todos = this._todos = this._todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}