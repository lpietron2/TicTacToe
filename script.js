const cells = document.querySelectorAll(".box");
const restart = document.getElementById("restart-button");
const spaces = [null, null, null, null, null, null, null, null, null];
var turnBox = document.getElementById("turn-box");
var crrtPlayer = "o";
var activeGame = true;


function checkIfWon(){

    for(var i = 0; i<9; i=i+3){
        if(spaces[i] === crrtPlayer && spaces[i + 1] === crrtPlayer && spaces[i + 2] === crrtPlayer){
            turnBox.innerText = "And " + crrtPlayer + " has won the game!";
            activeGame = false;
        }
    }
    for(var i = 0; i<3; i++){
        if(spaces[i] === crrtPlayer && spaces[i + 3] === crrtPlayer && spaces[i + 6] === crrtPlayer){
            turnBox.innerText = crrtPlayer + " has won the game!";
            activeGame = false;
        }
    }
    if(spaces[0] === crrtPlayer && spaces[4] === crrtPlayer && spaces[8] === crrtPlayer){
        turnBox.innerText = crrtPlayer + " has won the game!";
        activeGame = false;
    }else if(spaces[2] === crrtPlayer && spaces[4] === crrtPlayer && spaces[6] === crrtPlayer){
        turnBox.innerText = crrtPlayer + " has won the game!";
        activeGame = false;
    }
}

function chechIfDraw(){
    var x = false;
    for(let i=0; i<9; i++){
        if(spaces[i] == null){
            x = true;
        }
    }
    if(x == false){
        activeGame = false;
        turnBox.innerText = "Draw!";
    }
}

function play(clicked){
    const clickedCell = clicked.target;
    const index = parseInt(clickedCell.getAttribute("data-cell"));
    if(!activeGame){
        return;
    }

    if(spaces[index] == null){
        spaces[index] = crrtPlayer;
        clickedCell.innerText = crrtPlayer;

        chechIfDraw();
        checkIfWon();

        if(activeGame){
            crrtPlayer = crrtPlayer === "o" ? "x" : "o";
            turnBox.innerText = "It's " + crrtPlayer + " turn";
        }
    }else{
        return;
    }
}

cells.forEach((box) => box.addEventListener('click', play));
restart.addEventListener('click', restartGame = () => {
    window.location.reload();
});