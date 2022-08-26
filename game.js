// document.getElementsByTagName("td").addeventListener("click", putValue)
function putValue() {
    // alert("clicked");
    console.log(boxes[index]);
}

var count = 0;
const boxes = document.getElementsByTagName("td");
var player1Turn = true;
for(var index = 0; index < boxes.length; index++) {
    boxes[index].addEventListener("click", (e)=> {
        // console.log("X");
    const player1 = "X";
    const player2 = "O";
    if(count == 4) {
        winTopAcross();
    }

         if(player1Turn == true) {
            e.currentTarget.innerHTML = player1;
            player1Turn = false;
            count++;
            console.log(count);
        } else {
            e.currentTarget.innerHTML = player2;
            player1Turn = true; 
            count++;
            console.log(count);
        }
    });
}


function winTopAcross() {

    const player1 = "X";
    const player2 = "O";

    let player1Won = checkTopRow(player1);
    let player2Won =  checkTopRow(player2);

    if(player1Won == true) {
        alert("player 1 won!");
    } else if (player2Won == true) {
        alert("player 2 won!");
    } 
}

function checkTopRow(player) {
    var topRow = document.getElementById("top-row");
    let playerWon = false;
    for(var index = 0; index < topRow.children.length; index++) {
        if(topRow.children[index].innerHTML == player) {
            playerWon = true;
            continue;
        } else if(topRow.children[index].innerHTML != player && index != topRow.children.length-1) {
            playerWon = false;
            break;
        }
    }
    return playerWon;
    // console.log("Player who is X has won the game!");
    // alert("Player 1 won!");
}


