toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(todos){
    self.todos = todos;
  });

  self.add = function (todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.delete = function () {
    self.todos.pop();
  };
}]);
