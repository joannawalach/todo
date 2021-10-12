let btn = document.getElementById("submit");
btn.addEventListener('click', addTask);

function addTodo(todo) {
    let targetDiv = document.getElementById("tasksList");
    let newTask = document.createElement("p");
    newTask.innerHTML = `
    <p>${todo} 
    <button id="buttonedit">edytuj</button>
    <button id="buttonremove">usuń</button>
    </p>
    `;
    newTask.classList.add('newtask');
    targetDiv.appendChild(newTask);
}

function addTask(e) {
    e.preventDefault();
    let input = document.getElementById("input");
    addTodo(input.value);
}

let removeBtn = document.getElementById("buttonremove");
removeBtn.addEventListener('click', removeTask);

function removeTask(e) {
    let targetDiv = document.getElementById('tasksList');
    targetDiv.removeChild(newTask);
}