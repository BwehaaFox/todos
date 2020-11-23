import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TodoRoute extends Route {
  
  @service('todo-control') todo_service;

  model({ id }) {
    return { ...this.todo_service.todos[id], id };
  }

}
