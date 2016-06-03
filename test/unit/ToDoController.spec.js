describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, httpBackend, ToDoFactory;
  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;

    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);

    httpBackend.flush();
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
