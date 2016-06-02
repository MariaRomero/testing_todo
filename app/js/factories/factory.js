toDoApp.factory('ToDoFactory', function() {
  var Todo = function(todoText, completed) {
  this.text = todoText;
  this.completed = (typeof completed !== 'undefined') ? completed : false;
  this.complete = function(){
    this.completed = true;
  };
};

  return Todo;
})
