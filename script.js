
const cells = document.querySelectorAll(".cells");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // al final de nuestro archivo script.js
let currentPlayer = "X";
let gameEnd = false;
const GANADOR= document.getElementById('p');

const AGREGAR = document.getElementById('agg');

AGREGAR.addEventListener('click',()=>{
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const JUGADOR1 = document.getElementById('j1').value;
    const JUGADOR2 = document.getElementById('j2').value;
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        gameEnd = true;
        if(currentPlayer==="X"){
            GANADOR.innerHTML= "<h1>El ganador es: </h1>"+JUGADOR1;

        }else{

            GANADOR.innerHTML= "<h1>El ganador es: </h1>"+JUGADOR2;
        }
      }else if (checkTie()) {
        gameEnd = true;
        GANADOR.innerHTML="Excelente juego, es un empate!";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});
});

function checkWin() {
//en base a nuestra constante winConditions verificamos si la posición del tablero muestra alguna victoria.
  return winConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkTie() {
//en base a nuestras celdas del tablero verificamos que todas las celdas estén ocupadas por alguna ficha.
  return Array.from(cells).every(cell => {
    return cell.textContent !== "";
  });
}
