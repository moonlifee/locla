const body = document.querySelector("body");
const gameStatus = document.querySelector(".status");
const turn = document.querySelector("#turn");
const cells = document.querySelectorAll(" li");
let player = prompt("Who do you want to play as, X or 0");
let isover = false;
const playerX = "x";
const playerO = "o";

if (player == "x") {
  player = playerX;
} else if (player == "o") {
  player = playerO;
} else if (player == null) {

body.innerHTML =
  '<div class="warning"><h1>You choose an existent hero, please!</h1></div>';


}
 else {
  body.innerHTML =
    '<div class="warning"><h1>You choose an existent hero, please!</h1></div>';
}

turn.innerHTML = player;

const winlist = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

let nextStep = player == playerX ? playerO : playerX;
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (
      cell.textContent == "" && !isover && player == playerX ||
      player == playerO
    ) {
      nextStep = nextStep == playerX ? playerO : playerX;
      cell.innerHTML = nextStep;
      turn.innerHTML = nextStep == playerX ? playerO : playerX;

      wincheck();
    } else {
      alert(isover ? "Game obver,plaese refresh!" : "Already Clicked");
    }
  });
});
function wincheck() {
  let winner = winlist.find((item) => {
    let a = cells[item[0]].textContent;
    let b = cells[item[1]].textContent;
    let c = cells[item[2]].textContent;
    let xwin;

    if (a == b && b == c && c != ""){
     
    
    return item;}

  });
  if (!winner) {
    return false;
  }

  gameStatus.innerHTML = "Game over! winner boy X" ;
  isover = true;
console.log(winner);





}


