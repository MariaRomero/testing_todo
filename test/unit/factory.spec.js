describe('ToDoFactory', function() {
  beforeEach(module('toDoApp'));

  var todo;

  beforeEach(inject(function(ToDoFactory) {
    todo = new ToDoFactory('ToDo3');
  }));

  it('initialises a todo not completed', function() {
    expect(todo.completed).toBe(false);
  });

  it('changes a todo to completed', function() {
    todo.complete();
    expect(todo.completed).toBe(true);
  });

});
