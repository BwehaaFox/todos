import Route from '@ember/routing/route';

export default class CreateTodoRoute extends Route {

  setupController(controller) {
    controller.is_input_error = true;
  }

}
