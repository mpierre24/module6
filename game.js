// document.getElementsByTagName("td").addeventListener("click", putValue)
function putValue() {
    // alert("clicked");
    console.log(boxes[index]);
}

const boxes = document.getElementsByTagName("td");

for(var index = 0; index < boxes.length; index++) {
    boxes[index].addEventListener("click", (e)=> {
        // console.log("X");
        e.currentTarget.innerHTML = "X";
    });
}