let container = document.querySelector('.container');
let btn = document.getElementById('btn');
let rainbowz = document.getElementById('rainbow');
let grey = document.getElementById('grey');
let clearBtn = document.getElementById('clear');

function createGrid(nr) {
    nr = prompt('Grid size')
    container.style.gridTemplateColumns = `repeat(${nr}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${nr}, 1fr)`;

    for (let i = 0; i < nr * nr; i++) {
        let squares = document.createElement('div');
        squares.classList.add('square');
        squares.textContent = ' ';
        container.appendChild(squares);
    }

    hover();
    
}

function hover() {
    let cells = container.querySelectorAll('.square');
    cells.forEach(gridCell => {
        gridCell.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = "grey";
        })
    })
}

function newGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
}

function randomRGB() {
    return Math.floor(Math.random() * 255);
}

function rainbow() {
    let cells = container.querySelectorAll('.square');
    cells.forEach(gridCell => {
        gridCell.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = `rgb( ${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
        })
    });
}

function clear() {
    let cells = container.querySelectorAll('.square');
    cells.forEach(gridCell => gridCell.style.backgroundColor = 'white');
}

btn.addEventListener('click', newGrid);
rainbowz.addEventListener('click', rainbow);
grey.addEventListener('click', hover);
clearBtn.addEventListener('click', clear);

createGrid(8);