const container = document.querySelector('.container');

container.setAttribute('style', `display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr)`);

for (i=0; i < (16*16); i++) {
    let grid = document.createElement('div');
    grid.setAttribute('style', 'border: 1px  solid grey')
    grid.addEventListener('mouseover', () => {grid.style.backgroundColor = 'grey'});
    container.appendChild(grid);
}

let btn = document.createElement('button');
btn.textContent = 'New Sketch Pad';
btn.style.fontSize = '17px';
document.body.insertBefore(btn, container);

btn.addEventListener('click', () => {
    container.innerHTML = '';
    
    let userChoice = prompt('choose the size of your new pad. (Tip: for 16x16, just type "16")');

    if (userChoice == '' || userChoice > 100 || userChoice < 1) {
        alert('you need to pick a number between 1 - 100. Please try again');
    } else {
        container.setAttribute('style', `display: grid; grid-template-columns: repeat(${userChoice}, 1fr); grid-template-rows: repeat(${userChoice}, 1fr)`);
        for (i=0; i < (userChoice*userChoice); i++) {
            let grid = document.createElement('div');
            grid.setAttribute('style', 'border: 1px  solid grey')
            grid.addEventListener('mouseover', () => {grid.style.backgroundColor = 'grey'});
            container.appendChild(grid);
        }
    } 
});