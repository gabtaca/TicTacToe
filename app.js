function reset() {
    for (let cell of cells) {
        cell.textContent = '';
    }
    turn = 1;
}

let board = document.querySelector('.board');
let turn = 1;

board.addEventListener('click', (event) => {
    let cell = event.target;
    if (cell.classList.contains('cell') && !cell.textContent) {
        cell.textContent = turn % 2 ? 'X' : 'O';
        turn++;
    }
});

let btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', reset);