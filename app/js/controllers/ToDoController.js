toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.todos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2')];

  self.add = function (todoText) {
    this.todos.push(new ToDoFactory(todoText));
  };

  self.delete = function () {
    self.todos.pop();
  };
}]);
