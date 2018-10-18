console.log('-index.js-');

import 'bootstrap/dist/css/bootstrap.css';


//--------------------------------------------------------
// using XHR/Fetch API
//--------------------------------------------------------

let todosBtn = document.querySelector('.btn-warning')
todosBtn.addEventListener('click', e => {
    // send an asyncronous http-request to server ( REST api call)
    let apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    let promise = fetch(apiUrl);
    promise
        .then(response => response.json())
        .then(todos => {
            let todoList = todos.map(todo => {
                return (
                    `
                    <li class="list-group-item">
                        <span class="badge badge-primary">${todo.id}</span>    
                        <label>${todo.title}</label>
                        <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
                    </li>
                `
                );
            });
            document.getElementById('todos').innerHTML = todoList.join(" ");
        });
})

//--------------------------------------------------------
// using Timer API
//--------------------------------------------------------

let timeEle = document.querySelector('.badge-dark')
setInterval(() => {
    let timeNow = new Date().toLocaleTimeString();
    timeEle.innerHTML = timeNow
}, 1000);

//--------------------------------------------------------
// using DOM API
//--------------------------------------------------------
let alertBox = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

showBtn.addEventListener('click', e => {
    alertBox.style.display = 'block'
});
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
});
document.querySelector('.btn-success')
    .addEventListener('click', e => alertBox.innerHTML = "good morning")
//--------------------------------------------------------

