const container = document.querySelector('.container');
const gridSquare = document.querySelector('.gridSquare')
const header = document.querySelector('header')

let btn = document.createElement('button');
btn.textContent = "New Sketch Pad";
btn.style.fontSize = '17px';
document.body.insertBefore(btn, container);

btn.addEventListener('click', getPad);

function getPad() {
    container.innerHTML = '';
    
    let userChoice = prompt('Choose the size of your new pad. (Tip: for 16x16, just type "16")');

    if (userChoice == '' || userChoice > 100 || userChoice < 1) {
        alert('you need to pick between 1 & 100. Now refersh your page');
    } else {
        let chosenGrid = (10 * userChoice) + 'px';

        container.style.height = chosenGrid;
        container.style.width = chosenGrid;

        for (i=0; i < (userChoice * userChoice); i++) {
            let grid = document.createElement('div');
            grid.classList.add('gridSquare');
            grid.addEventListener('mouseover', () => {grid.style.backgroundColor = 'grey'});
            container.appendChild(grid);
        }
    } 
}

function clearPad() {
    

    /*
    get container 
    remove all its children 
    then run get 
    */

    getPad();
}



/*
let squareNumber = 16*16;
for (i=0; i < squareNumber; i++) {
let grid = document.createElement('div');
grid.addEventListener('mouseover', () => {grid.style.backgroundColor = 'grey'});
grid.classList.add('gridSquare');
container.appendChild(grid);
}
*/