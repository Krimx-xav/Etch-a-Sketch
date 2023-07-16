function customizeBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size * size;
    for (let i = 0; i <= total; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', () => { square.style.backgroundColor = "black"; });
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
    }
}
customizeBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        customizeBoard(input);
    } else {
        console.log("You chose too much squares");
    }

}