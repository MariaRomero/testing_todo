describe('Todos tracker', function() {

  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
        method: 'GET'
      },
      response: {
        data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
      }
    }]);
  });

  it('has 2 todos', function() {
    browser.get('/');
    var todo = $$('#todos p');
    expect(todo.first().getText()).toEqual('ToDo1: completed');
    expect(todo.last().getText()).toEqual('ToDo2: not completed');
  });

  it('can add a toDo', function() {
    browser.get('/');
    var todo = $$('#todos p');
    $("#todoText").sendKeys("ToDo3");
    $("#Add").click();
    expect(todo.last().getText()).toEqual('ToDo3: not completed');
  });

  it('can delete a toDo', function() {
    browser.get('/');
    var todo = $$('#todos p');
    $("#Delete").click();
    expect(todo.last().getText()).toEqual('ToDo1: completed');
  });

  afterEach(function(){
    mock.teardown();
  });
});
