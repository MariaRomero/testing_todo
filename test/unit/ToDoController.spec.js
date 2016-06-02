describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with 2 toDos', function() {
    expect(ctrl.todos.length).toEqual(2);
  });

  it('adds a toDo', function() {
    ctrl.add("ToDo3")
    expect(ctrl.todos.length).toEqual(3);
  });

  it('deletes a toDo', function() {
    ctrl.delete()
    expect(ctrl.todos.length).toEqual(1);
  });
});
