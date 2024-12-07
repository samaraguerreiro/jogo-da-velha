let board = ["", "", "", "", "", "", "", "", ""]; // Representação do tabuleiro
let currentPlayer = "X"; // Jogador 1 começa com "X"
let gameStatus = document.getElementById("status");

// Função para verificar se há vencedor
function checkWinner() {
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

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setTimeout(() => alert(`${board[a]} venceu!`), 100);
            gameStatus.innerText = `${board[a]} venceu!`;
            return true;
        }
    }
    return false;
}

// Função para fazer a jogada
function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        if (checkWinner()) {
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterna o jogador
        gameStatus.innerText = `Agora é a vez do jogador ${currentPlayer}`;
    }
}

// Função para reiniciar o jogo
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameStatus.innerText = `Jogador 1 (X) começa`;
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}
