let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

//all winning patterns are defined here

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
  turnO = true;
  msgcontainer.classList.add("hide");
  count = 0;
  enablebutt();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    count++;
    box.disabled = true;
    checkwinner();
    let iswinner = checkwinner();
    if (count === 9 && !iswinner) {
      draw();
    }
  });
});

const draw = () => {
  msg.innerText = "Game is draw";
  msgcontainer.classList.remove("hide");
  disablebutt();
};
//function to disable button

const disablebutt = () => {
  for (let box of boxes) {
    box.disabled = "true";
  }
};
//function to enable button

const enablebutt = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
//funtion to detemine winner

const showwinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebutt();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        showwinner(pos1val);
      }
    }
  }
};
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
