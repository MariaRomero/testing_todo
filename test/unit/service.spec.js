describe('ToDoService', function() {
  beforeEach(module('toDoApp'));

  var ToDoService, ToDoFactory, httpBackend;

  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function(_ToDoService_, _ToDoFactory_, $httpBackend) {
    ToDoService = _ToDoService_;
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of todos', function() {
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);

    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);

    ToDoService.getAll().then(function(todos) {
      expect(todos.length).toEqual(2);
    });

    httpBackend.flush();

    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);

    ToDoService.getAll().then(function(todos) {
      expect(todos[0].text).toEqual(todo1.text);
    });

    httpBackend.flush();
  });

});
