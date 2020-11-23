import EmberRouter from '@ember/routing/router';
import config from 'todo-list/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {

  this.route('index', { path: '/' });
  this.route('create-todo', { path: '/create-todo' });
  this.route('todo', { path: '/todo/:id' });

});
