// Task model
let tasks = [
    {
        text: 'Learn js',
        id: '1'
    },
    {
        text: 'Learn angular',
        id: '2'
    }
];

// Get element list-group
let ul = document.querySelector('.list-group');

// tasks.forEach(task => {
//     let li = listTemplate(task);
//     // insertAdjacentElement
//     ul.insertAdjacentElement("afterbegin", li);
// });

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    // Create element
    let li = document.createElement('li');
    // Add task text
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created li
    return li;
}

// AddTask
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length+1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask))
}

// Delete task
function deleteTask(id) {
    const items = document.querySelectorAll('[data-id]');
    let itemsArray = Array.prototype.slice.call(items);
    itemsArray.forEach(function (li) {
        if(id === li.dataset.id){li.remove();}
    });
}

// Alert
function message(text) {
    const existingAlert = document.querySelector('.alert alert-info');
    const container = document.querySelector('.container');
    //const newAlert =

    if(existingAlert) existingAlert.remove();
    let div = document.createElement('div');
    div.textContent = text;
    div.classList.add('alert', 'alert-info');
    container.insertAdjacentHTML('afterbegin', text);
}