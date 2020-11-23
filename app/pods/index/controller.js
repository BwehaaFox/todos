import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class IndexController extends Controller {
    @service('todo-control') todo_service;

    get todos() {
        return this.todo_service.todos;
    }

    @action
    todoChecked(index, state) {
        this.todo_service.unpdateTodo(index,state);
    }


}
