$(document).ready(function() {
  $('.todo-list').submit(function(event) {
    event.preventDefault();
    var todoAddEl = $('.todo-add');
    var taskListEl = $('.tasks');
    addTask(state, todoAddEl.val());
    renderTasks(state, taskListEl);
    todoAddEl.val('');
  });
});

var state = {
  items: []
};

function addTask(state, item) {
  state.items.push(item);
}

function removeTask(state, item) {
  var index = state.items.indexOf(item);
  if (index > -1) {
    state.items.splice(index, 1);
  }
}

function renderTasks(state, element) {
  var tasksHTML = state.items.map(function(item) {
    return '<li>' + item + '</li>';
  });
  element.html(tasksHTML);
}
