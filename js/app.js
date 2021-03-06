// Problem: User interaction doesn't provide result
// Solution: Add interactivity

var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed tasks

// new task <li>
var createNewTaskElement = function(taskString) {
    // create listItem
    var listItem = document.createElement("li");
    // input (checkbox)
    var checkBox = document.createElement("input"); // checkbox
    // label
    var label = document.createElement("label"); // label
    // input (text)
    var editInput = document.createElement("input"); // text
    // button.edit
    var editButton = document.createElement("button"); // button
    // button.delete
    var deleteButton = document.createElement("button"); // button


    // each element need modifying

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "Edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "Delete";

    label.innerText = taskString

    // each element need appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);


    return listItem;
}

// add a new task
var addTask = function() {
    console.log("Add task...");
  // create a list item with text from #new-task
  var listItem = createNewTaskElement(taskInput.value);

  // append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
}

// edit existing task
var editTask = function() {
    console.log("Edit task...");
  // when edit button is pressed
  //  if class of parent is .editMode
    //switch from .editMode
    // label text become inout value
  // else
    // switch to .editMode
    // input value becomes label's text

  // toggle .editMode on parent
  }

// delete existing task
var deleteTask = function() {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    // remove parent <li> from <ul>
    ul.removeChild(listItem)
}

// mark task complete
var taskComplete = function() {
    console.log("Task complete...");
    // append <li> to #completed-tasks
    var listItem = this.parentNode
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

// mark task incomplete
var taskIncomplete = function() {
    console.log("Task incomplete...");
    // append <li> to #incompleted-tasks
    var listItem = this.parentNode
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskComplete);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind <li> events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}


// Set click handler to the addTask function
addButton.onclick = addTask;

// cycle over the incompleteTasksHolder <ul> items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
        // bind events to <li> (taskComplete)
        bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
