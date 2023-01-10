let task = document.getElementById('task');
let button = document.getElementById('button');
let output = document.getElementById('output');

button.addEventListener('click', addTask);

function addTask() {
  localStorage.setItem(Math.floor(Math.random()*100)+1, task.value);
  localArray = Object.values(localStorage);
  output.innerHTML = localArray
}



