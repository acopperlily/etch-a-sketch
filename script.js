function createCells() {
  let cell = document.createElement('div');
  // cell.style.width = "100px";
  // cell.style.height = "100px";
  // cell.style.backgroundColor = "red";
  cell.classList.add('cell');
  cell.addEventListener('click', function () {
    tryThis(cell);
  });
  return cell;
}

const grid = document.querySelector('#grid');
for (let i = 0; i < 16 * 16; i++) {
  grid.appendChild(createCells());
}

function tryThis(e) {
  console.log('hey');
  return e.style.color = "black";
}

