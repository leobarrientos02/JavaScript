//SetUp
var origBoard;
const Player1 = 'O';
const Player2 = 'X';

const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame(){
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    //console.log(origBoard);

    for ( var i =0; i<cells.length; i++){

        cells[i].innerText = "";
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    //console.log(square.target.id);
    turn(square.target.id, Player1)
}

function turn( squareId, player){
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}

//Logic

//AI
