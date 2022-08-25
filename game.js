// document.getElementsByTagName("td").addeventListener("click", putValue)
function putValue() {
    // alert("clicked");
    console.log(boxes[index]);
}

const boxes = document.getElementsByTagName("td");
var player1Turn = true;
for(var index = 0; index < boxes.length; index++) {
    boxes[index].addEventListener("click", (e)=> {
        // console.log("X");
    const player1 = "X";
    const player2 = "O";
    var count = "0";


         if(player1Turn == true) {
            e.currentTarget.innerHTML = player1;
            player1Turn = false;
        } else {
            e.currentTarget.innerHTML = player2;
            player1Turn = true; 
        }
    });
}
