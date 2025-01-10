const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusText.textContent = `${board[a]} Wins!`;
      isGameActive = false;
      return;
    }
  }
  if (!board.includes("")) {
    statusText.textContent = "It's a draw!";
    isGameActive = false;
  }
}

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (board[index] !== "" || !isGameActive) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("taken");

  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (isGameActive) {
    statusText.textContent = `${currentPlayer}'s Turn`;
  }
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
statusText.textContent = `${currentPlayer}'s Turn`;
