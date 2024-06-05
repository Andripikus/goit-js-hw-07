function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', onCreateButtonClick);
destroyBtn.addEventListener('click', onDestroyButtonClick);

function onCreateButtonClick() {
    const amount = parseInt(input.value);
    
    if (amount < 1 || amount > 100) {
        return;
    }
    
    createBoxes(amount);
    input.value = '';
}

function createBoxes(amount) {
    clearBoxes();
    
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
    }
}

function onDestroyButtonClick() {
    clearBoxes();
}

function clearBoxes() {
    boxesContainer.innerHTML = '';
}

