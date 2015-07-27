// Problem: User interaction doesn't provide result
// Soluition: Add interactivity

var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed tasks

// add a new task
var addTask = function() {
    console.log("Add task...")
  // when button is pressed
  // create a list item with text from #new-task
    // input (checkbox)
    // label
    // input (text)
    // button.edit
    // button.delete
    // each elements, need modified and appended
}

// edit existing task
var editTask = function() {
    console.log("Edit task...")
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
    console.log("Delete task...")
  // when delete button is pressed
    // remove parent <li> from <ul>
}

// mark task complete
var taskComplete = function() {
    console.log("Task complete...")
  // when checkbox is checked
    // append <li> to #completed-tasks
}

// mark task incomplete
var taskIncomplete = function() {
    console.log("Task incomplete...")
  // when checkbox is unchecked
    // append <li> to #incompleted-tasks
}

// Set click handler to the addTask function
