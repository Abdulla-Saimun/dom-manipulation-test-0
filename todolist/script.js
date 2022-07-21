const form = document.querySelector('form');
const todoUl = document.querySelector('.items');
const completeUl = document.querySelector('.complete-list ul');
const inputBox = document.querySelector('#new-task');
console.log(todoUl);


const createTask = (task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = task;

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
}

const addTask = (e) => {
    e.preventDefault();
    const listItem = createTask(inputBox.value);
    todoUl.appendChild(listItem);
    inputBox.value = "";

    //bind the new llist item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

const completeTask = () => {
    let listItem = task.parentNode;
    console.log(listItem);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = 'Delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);

    bindCompleteItem(listItem, deleteTask);

}

const deleteTask = () => {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = (taskItem, checkClick) => {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkClick;
}

let bindCompleteItem = (taskItem, deleteBtnClick) => {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteBtnClick;
}

form.addEventListener('submit', addTask);