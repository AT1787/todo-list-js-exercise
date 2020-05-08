// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,


  logState: function ()  {
    console.log(`${title} has${this.complete ? " " : " not "}been completed`);
  },

  markCompleted: function () {
    this.complete = true;
  }
}

  return task
}







// DRIVER CODE BELOW

const task1 = newTask("Clean cat Litter", "Take out all the poop from the litter box");
const task2 = newTask("Do laundry", ":(")
const tasks = [task1, task2];

task1.logState()
task1.markCompleted()
task1.logState()

