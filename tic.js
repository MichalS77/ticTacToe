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
    
    const printBoard = () => {
        const boardWithCellValues = board.map((row) =>
        row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };
    
    const dropToken = (row, column, activePlayer) => {
       board[row][column].addToken(activePlayer);
    }

return {getBoard, printBoard, dropToken};
}

function Cell(){
    let value = 0;

    const addToken = (player) => value = player.token;

    const getValue = () => value;

return  {addToken, getValue};
}

function player(){

    function createPlayer(name, token){

return {name, token};
}

return {createPlayer};
}

function gameController(){
    let player1 = player().createPlayer('player1', 'X');
    let player2 = player().createPlayer('player2', 'O');
    let activePlayer = player1;

    const changePlayers = (activePlayer) => {
        if(activePlayer.name == player1.name){
            return player2;
        } else {
            return player1;
        }
    }

    
    const getActivePlayer = () => activePlayer;
    
    let gameBoard = GameBoard();
    let board = gameBoard.getBoard();
    const printNewRound = () => {
        
        gameBoard.printBoard();
        
        console.log(`${activePlayer.name}'s turn!`);
    }
    
    printNewRound();
    
    let playRound = (row,column) => {
        console.log(`Dropping ${activePlayer.name}'s token into row ${row} and column ${column}`);

        gameBoard.dropToken(row, column, activePlayer)
        
        activePlayer = changePlayers(activePlayer);
        
        printNewRound();
        }
        return {playRound, getActivePlayer, changePlayers};
}

let game = gameController();













