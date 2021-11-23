const carInput = document.querySelector('.car-input');
const carBtn = document.querySelector('.car-btn');
const carList = document.querySelector('.car-list');
const carContainer = document.querySelector('.container');
const totalPrice = document.querySelector('.total-price');

let total = 0;

carBtn.addEventListener('click', () => {
    let count = 0;
    const carName = carInput.value;
    const div = document.createElement('div');
    const span = document.createElement('span');
    const plusBtn = document.createElement('button');
    const minusBtn = document.createElement('button');
    div.classList.add('car');
    plusBtn.innerText = '+';
    minusBtn.innerText = '-';
    span.textContent = `${carName}: ${count}`;
    div.appendChild(span);
    div.appendChild(plusBtn);
    div.appendChild(minusBtn);
    carList.appendChild(div);
    carInput.value = '';
    if (count === 0) {
        minusBtn.disabled = true;
    }
    plusBtn.addEventListener('click', () => {
        if (count >= 0) {
            minusBtn.disabled = false;
        }
        count++;
        total++;
        span.textContent = `${carName}: ${count}`;
        totalPrice.textContent = `Total: ${total} car(s)`;
    });
    minusBtn.addEventListener('click', () => {
        if (count <= 1) {
            minusBtn.disabled = true;
        }
        count--;
        total--;
        span.textContent = `${carName}: ${count}`;
        totalPrice.textContent = `Total: ${total} car(s)`;
    });
});