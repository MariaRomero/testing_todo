describe('Todos tracker', function() {
  // it('has a todo', function() {
  //   browser.get('/');
  //   var todo = $('#todo');
  //   expect(todo.getText()).toEqual('ToDo1');
  // });

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
});
