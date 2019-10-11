function startGame() {
    notifyStartInfo();
}

//notify players of start conditions
function notifyStartInfo() {
    const message = "P1 is \"X\" and goes first, " +
        "P2 is \"O\".\n  Select a location on the board."
    console.log(message);
    //change the infobox message to start info
    document.getElementById("bottomBox").textContent = message;
}

//creates board/ array
function createBoard() {
    //fill board with false values
    var newBoard = new Array(9).fill(false);
    console.log(newBoard)
    return newBoard;
}

function checkIfWinner(){
    //arrays to hold for player win conditions
    var p1_total = new Array;
    var p2_total = new Array;
   
    //pushes both players moves from board to player array
    for (var i = 0; i < newBoard.length; i++){
        if(newBoard[i] == p1Token){
            p1_total.push(i);
        }else if(newBoard[i] == p2Token){
            p2_total.push(i);
        }
    }
    console.log("1: " + p1_total + " | 2: " + p2_total)
    //BUTEFORCE!!!
    //If p1 array contains any of the following win conditions
    if( (p1_total.includes(0) && p1_total.includes(1) && p1_total.includes(2)) ||
        (p1_total.includes(3) && p1_total.includes(4) && p1_total.includes(5)) ||
        (p1_total.includes(6) && p1_total.includes(7) && p1_total.includes(8)) ||
        (p1_total.includes(0) && p1_total.includes(4) && p1_total.includes(8)) ||
        (p1_total.includes(2) && p1_total.includes(4) && p1_total.includes(6)) ||
        (p1_total.includes(0) && p1_total.includes(3) && p1_total.includes(6)) ||
        (p1_total.includes(2) && p1_total.includes(5) && p1_total.includes(8)) ||
        (p1_total.includes(1) && p1_total.includes(4) && p1_total.includes(7)) ){ 
        //notify infobox and console of a win
        console.log("p1 Wins");
        document.getElementById("bottomBox").textContent = "Player1 Wins!";
        //if win for X change winning locations to Orange
        if((p1_total.includes(0) && p1_total.includes(1) && p1_total.includes(2))){
            document.getElementById(0).style.backgroundColor = "orange";
            document.getElementById(1).style.backgroundColor = "orange";
            document.getElementById(2).style.backgroundColor = "orange";
        }else if((p1_total.includes(3) && p1_total.includes(4) && p1_total.includes(5))){
            document.getElementById(3).style.backgroundColor = "orange";
            document.getElementById(4).style.backgroundColor = "orange";
            document.getElementById(5).style.backgroundColor = "orange";
        }else if((p1_total.includes(6) && p1_total.includes(7) && p1_total.includes(8))){
            document.getElementById(6).style.backgroundColor = "orange";
            document.getElementById(7).style.backgroundColor = "orange";
            document.getElementById(8).style.backgroundColor = "orange";
        }else if ((p1_total.includes(0) && p1_total.includes(4) && p1_total.includes(8))){
            document.getElementById(0).style.backgroundColor = "orange";
            document.getElementById(4).style.backgroundColor = "orange";
            document.getElementById(8).style.backgroundColor = "orange";
        }else if ((p1_total.includes(2) && p1_total.includes(4) && p1_total.includes(6))){
            document.getElementById(2).style.backgroundColor = "orange";
            document.getElementById(4).style.backgroundColor = "orange";
            document.getElementById(6).style.backgroundColor = "orange";
        }else if((p1_total.includes(0) && p1_total.includes(3) && p1_total.includes(6))){
            document.getElementById(0).style.backgroundColor = "orange";
            document.getElementById(3).style.backgroundColor = "orange";
            document.getElementById(6).style.backgroundColor = "orange";
        }else if((p1_total.includes(2) && p1_total.includes(5) && p1_total.includes(8))){
            document.getElementById(2).style.backgroundColor = "orange";
            document.getElementById(5).style.backgroundColor = "orange";
            document.getElementById(8).style.backgroundColor = "orange";
        }else if((p1_total.includes(1) && p1_total.includes(4) && p1_total.includes(7))){
            document.getElementById(1).style.backgroundColor = "orange";
            document.getElementById(4).style.backgroundColor = "orange";
            document.getElementById(7).style.backgroundColor = "orange";
        }

    }else if( (p2_total.includes(0) && p2_total.includes(1) && p2_total.includes(2)) ||
              (p2_total.includes(3) && p2_total.includes(4) && p2_total.includes(5)) ||
              (p2_total.includes(6) && p2_total.includes(7) && p2_total.includes(8)) ||
              (p2_total.includes(0) && p2_total.includes(4) && p2_total.includes(8)) ||
              (p2_total.includes(2) && p2_total.includes(4) && p2_total.includes(6)) ||
              (p2_total.includes(0) && p2_total.includes(3) && p2_total.includes(6)) ||
              (p2_total.includes(2) && p2_total.includes(5) && p2_total.includes(8)) ||
              (p2_total.includes(1) && p2_total.includes(4) && p2_total.includes(7)) ){
        console.log("p2 Wins");
        
        document.getElementById("bottomBox").textContent = "Player2 Wins!";
        if((p2_total.includes(0) && p2_total.includes(1) && p2_total.includes(2))){
            document.getElementById(0).style.backgroundColor = "blue";
            document.getElementById(1).style.backgroundColor = "blue";
            document.getElementById(2).style.backgroundColor = "blue";
        }else if((p2_total.includes(3) && p2_total.includes(4) && p2_total.includes(5))){
            document.getElementById(3).style.backgroundColor = "blue";
            document.getElementById(4).style.backgroundColor = "blue";
            document.getElementById(5).style.backgroundColor = "blue";
        }else if((p2_total.includes(6) && p2_total.includes(7) && p2_total.includes(8))){
            document.getElementById(6).style.backgroundColor = "blue";
            document.getElementById(7).style.backgroundColor = "blue";
            document.getElementById(8).style.backgroundColor = "blue";
        }else if ((p2_total.includes(0) && p2_total.includes(4) && p2_total.includes(8))){
            document.getElementById(0).style.backgroundColor = "blue";
            document.getElementById(4).style.backgroundColor = "blue";
            document.getElementById(8).style.backgroundColor = "blue";
        }else if ((p2_total.includes(2) && p2_total.includes(4) && p2_total.includes(6))){
            document.getElementById(2).style.backgroundColor = "blue";
            document.getElementById(4).style.backgroundColor = "blue";
            document.getElementById(6).style.backgroundColor = "blue";
        }else if((p2_total.includes(0) && p2_total.includes(3) && p2_total.includes(6))){
            document.getElementById(0).style.backgroundColor = "blue";
            document.getElementById(3).style.backgroundColor = "blue";
            document.getElementById(6).style.backgroundColor = "blue";
        }else if((p2_total.includes(2) && p2_total.includes(5) && p2_total.includes(8))){
            document.getElementById(2).style.backgroundColor = "blue";
            document.getElementById(5).style.backgroundColor = "blue";
            document.getElementById(8).style.backgroundColor = "blue";
        }else if((p2_total.includes(1) && p2_total.includes(4) && p2_total.includes(7))){
            document.getElementById(1).style.backgroundColor = "blue";
            document.getElementById(4).style.backgroundColor = "blue";
            document.getElementById(7).style.backgroundColor = "blue";
        }
    }   
}

function checkLocation(location) {
    if (newBoard[location] != false) {
        errorMessage("invalid location " + location +" > try again.")
    } else {
        turnsTaken++;
        newBoard[location] = tokenTurn;
        document.getElementById(location).textContent = tokenTurn;
        if(turnsTaken > 4){checkIfWinner()};
        if (tokenTurn == p1Token) {
            tokenTurn = p2Token;
        } else {
            tokenTurn = p1Token;
        }
    }
    console.log(newBoard)
}

function errorMessage(message) {
    document.getElementById("bottomBox").textContent = "Error: " + message;
}

function returnLocation(loc) {
    // alert("returned " + loc)
    document.getElementById("bottomBox").textContent = "Location: " + loc + " selected.";
    var location = loc;
    checkLocation(location);
}

function resetGame(){
    location.reload();
}

var newBoard = createBoard();
var p1Token = "X";
var p2Token = "O";
var tokenTurn = p1Token;
var turnsTaken = 0;
