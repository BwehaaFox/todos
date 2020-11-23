import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class CreateTodoController extends Controller {

    @service('todo-control') todo_service;

    @tracked is_input_error;
    input_name = '';

    @action
    inputChanged({ target: { value } }) {
        this.is_input_error = !value;
        this.input_name = value
    }

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
