const container = document.querySelector('.container');
const gridSquare = document.querySelector('.gridSquare')
let squareNumber = 10000;

for (i=0; i < squareNumber; i++) {
let grid = document.createElement('div');
grid.addEventListener('mouseover', () => {grid.style.backgroundColor = 'black'});
grid.classList.add('gridSquare');
grid.setAttribute('style', 'display: flex; flex: 1 1 5px; height: 5px; /*border: 1px solid white*/');
container.appendChild(grid);
}
