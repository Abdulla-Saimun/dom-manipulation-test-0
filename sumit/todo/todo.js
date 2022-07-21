const newTask = document.querySelector('#new-task');
const form = document.querySelector('form');

const todoUl = document.querySelector('#items');
// todoUl.innerHTML = '';
const completedUl = document.querySelector('.todo-completed-task ul');

// console.log(completedUl);

// function

let createTask = (task) =>{
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = (event) => {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    
    todoUl.appendChild(listItem);
    newTask.value = '';

    // bind the new list item

    bindCompleteTask(listItem, completeTask);
}


let completeTask = () => {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completedUl.appendChild(listItem);

    bindcompleteItem(listItem, deleteTask);

}

let deleteTask = () => {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


let bindCompleteTask = (taskItem, checkboxClick) => {
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

let bindcompleteItem = (takItem, deleteButtonClick) => {
    let deleteButton = takItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;

}

form.addEventListener('submit', addTask);