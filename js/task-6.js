const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateButtonClick);
destroyBtn.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick() {
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  const boxes = createBoxes(amount);
  appendBoxesToContainer(boxes);
  input.value = "";
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }
  return boxes;
}

function appendBoxesToContainer(boxes) {
  clearBoxes();
  boxes.forEach((box) => {
    boxesContainer.appendChild(box);
  });
}

function onDestroyButtonClick() {
  clearBoxes();
}

function clearBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
