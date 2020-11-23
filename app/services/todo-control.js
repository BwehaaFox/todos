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
    this.refreshData();
  }

  /**
   * Установка нового имени задачи
   * @param {*} index 
   * @param {*} new_name 
   */
  renameTodo(index, new_name) {
    this._todos[index].name = new_name;
    this.refreshData();
  }

  /**
   * Создание новой задачи
   * @param {*} name 
   * @param {*} isDone 
   */
  createTodo(name, isDone = false) {
    this._todos.push({ name, isDone });
    this.refreshData();
  }

  /**
   * Обновление и сохранение данных
   */
  refreshData() {
    let todos = this._todos = [ ...this._todos ];
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}