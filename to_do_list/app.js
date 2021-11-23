const input = document.querySelector('.todo-input');
const btn = document.querySelector('.todo-btn');
const container = document.querySelector('.container');
const ul = document.querySelector('.todo-list');
const remainingParag = document.querySelector('.todo-remaining');

let remaining = 0;

btn.addEventListener('click', () => {
    const todo = input.value;
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    span.innerText = 'X';
    span.classList.add('todo-span');
    li.innerText = todo;
    li.classList.add('todo');
    div.appendChild(li);
    div.appendChild(span);
    div.classList.add('todo-div')
    ul.appendChild(div);
    input.value = '';
    remaining++;
    remainingParag.innerText = `Tasks Remaining: ${remaining}`;
    li.addEventListener('click', () => {
        li.classList.toggle('strike-through');
        if (li.classList.contains('strike-through')) {
            remaining--;
        } else {
            remaining++;

        }
        remainingParag.innerText = `Tasks Remaining: ${remaining}`;
    })

    span.addEventListener('click', () => {
        ul.removeChild(div);
        remaining--;
        remainingParag.innerText = `Tasks Remaining: ${remaining}`;
    })
})