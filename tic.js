function GameBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }
    const getBoard = () => board;

function Cell(){
    let value = 0;

    const addToken = (player) => value = player;

    const getValue = () => value;

    return  {addToken, getValue};
}

const printBoard = () => {
    const boardWithCellValues = board.map((row) =>
    row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
};
return {getBoard, printBoard};
}

GameBoard().printBoard();

function changePlayers(){
    if(activePlayer == player1){
        activePlayer == player2;
    } else activePlayer == player1;
}

function createPlayer(name, token){
    return {name, token};
}






