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

    const three = (arr) => arr.every(Cell => Cell.getValue() === 'X' || Cell.getValue() == 'O');
    
    const getActivePlayer = () => activePlayer;
    
    let gameBoard = GameBoard();
    let board = gameBoard.getBoard();

    const printNewRound = () => {
        
        gameBoard.printBoard();
        
        console.log(`${activePlayer.name}'s turn!`);
    }
    
    printNewRound();
    let checkWinner = () =>{
        let board = gameBoard.getBoard();
        const flatBoard = board.flatMap(row => row);
        
        let col1 = [flatBoard[0], flatBoard[3], flatBoard[6]];
        let col2 = [flatBoard[1], flatBoard[4], flatBoard[7]];
        let col3 = [flatBoard[2], flatBoard[5], flatBoard[8]];
        let diag1 = [flatBoard[0], flatBoard[4], flatBoard[8]];
        let diag2 = [flatBoard[2], flatBoard[4], flatBoard[6]];

        if(three(board[0]) || three(board[1]) || three(board[2]) || three(col1) || three(col2) || three(col3) || three(diag1) || three(diag2))
        return console.log(`${activePlayer.name} won`);
        }
    
    let playRound = (row,column) => {
        console.log(`Dropping ${activePlayer.name}'s token into row ${row} and column ${column}`);

        gameBoard.dropToken(row, column, activePlayer);
        
        checkWinner();
        
        activePlayer = changePlayers(activePlayer);
        
        printNewRound();
    }

        return {playRound, getActivePlayer, changePlayers, board, checkWinner};

}



    

let game = gameController();






