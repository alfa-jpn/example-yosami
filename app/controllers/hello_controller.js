const ApplicationController = require('./application_controller');

/**
 * HelloController
 */
module.exports = class HelloController extends ApplicationController {
  static definer() {
    name('hello');
  }

  greet() {
    alert('Hello!');
    this.vm.greetings = (this.vm.greetings || 0) + 1;
  }
}
