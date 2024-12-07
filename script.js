let board = ["", "", "", "", "", "", "", "", ""]; // Estado do tabuleiro
let currentPlayer = "X"; // Jogador atual
let gameActive = true; // Estado do jogo
const statusDisplay = document.getElementById("status");

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Atualiza o status do jogo
function updateStatus(message) {
    statusDisplay.innerText = message;
}

// Verifica se alguém venceu
function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            updateStatus(`Jogador ${board[a]} venceu!`);
            gameActive = false;
            return;
        }
    }
    if (!board.includes("")) {
        updateStatus("Empate!");
        gameActive = false;
    }
}

// Faz uma jogada
function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.querySelectorAll(".cell")[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (gameActive) {
            updateStatus(`Agora é a vez do jogador ${currentPlayer}`);
        }
    }
}

// Reinicia o jogo
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    updateStatus("Jogador 1 (X) começa");
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
}

// Adiciona os eventos de clique nas células
document.querySelectorAll(".cell").forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(index));
});