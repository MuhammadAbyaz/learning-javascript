let tasks = ["new", "delete", "list", "quit"];
let task = "";
let user_tasks = [];
while (task !== tasks[3]) {
  task = prompt("What whould you like to do?");
  if (task === task[3]) break;
  else if (task === tasks[0]) {
    task = prompt("Create a new todo");
    user_tasks.push(task);
    console.log("Created a new todo");
  } else if (task === tasks[1]) {
    task = prompt("Enter index of task you want to delete!");
    user_tasks.splice(parseInt(task - 1), 1);
    console.log("Todo Removed!!");
  } else if (task === tasks[2]) {
    console.log("***********************************");
    for (let i = 0; i < user_tasks.length; i++) {
      console.log(`${i + 1}: ${user_tasks[i]}`);
    }
    console.log("***********************************");
  }
}
console.log("Exited");
