function GameBoard(){
    const rows = 3;
    const columns = 7;
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }
}


const getBoard = () => board;

function changePlayers(){
    if(activePlayer == player1){
        activePlayer == player2;
    } else activePlayer == player1;
}

function createPlayer(name, token){
    return {name, token};
}







