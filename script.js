let size = 16;

function createCells() {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('mouseenter', function () {
    draw(cell);
  });
  return cell;
}

const grid = document.querySelector('#grid');
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

for (let i = 0; i < size * size; i++) {
  grid.appendChild(createCells());
}

function newGrid(grid, size) {
  for (let i = 0; i < size * size; i++) {
    grid.appendChild(createCells());
  }
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function draw(e) {
  e.style.backgroundColor = "black";
  let opacity = getComputedStyle(e).opacity;
  if (opacity == '1') {
    e.style.opacity = '0.09';
  } else if (opacity < '0.99') {
    e.style.opacity = parseFloat(opacity) + 0.09;
  }
  // console.log(opacity);
}

function clearCells() {
  let cell = document.getElementsByClassName('cell');
  for (let i = 0; i < size * size; i++) {
    cell[i].style.backgroundColor = 'red';
  }
}

function deleteCells() {
  while (grid.firstElementChild) {
    grid.removeChild(grid.firstElementChild);
  }
}

function getSize() {
  let size = parseInt(prompt('Enter size of new grid: '));
  return size;
}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  clearCells();
  deleteCells();
  size = getSize();
  newGrid(grid, size);
});

