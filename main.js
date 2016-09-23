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

function task(taskName) {
  this.name = taskName;
  this.complete = false;
}

function addTask(state, item) {
  var taskObj = new task(item);
  state.items.push(taskObj);
}

function removeTask(state, item) {
  var index = state.items.indexOf(item);
  if (index > -1) {
    state.items.splice(index, 1);
  }
}

function renderTasks(state, element) {
  var tasksHTML = state.items.map(function(item) {
    if (!item.complete) {
      return '<li>' + item.name + '</li>';
    } else if (item.complete) {
      return '<li class="complete">' + item.name + '</li>';
    }
  });
  element.html(tasksHTML);
}
