import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class CreateTodoController extends Controller {

  @service('todo-control') todo_service;

  /**
   * Валидно ли поле
   */
  @tracked is_input_error;

  /**
   * Стартовое значение
   */
  input_name = '';

  /**
   * Значение поля ввода изменилось
   * @param {*} param0 
   */
  @action
  inputChanged({ target: { value } }) {
      this.is_input_error = !value;
      this.input_name = value
  }

  /**
   * Добавление новой задачи
   */
  @action 
  addTodo() {
    let target_name = this.input_name;
    this.is_input_error = !target_name;

    if(target_name) {
        this.todo_service.createTodo(target_name);
        this.transitionToRoute('index')
    }
  }

}
