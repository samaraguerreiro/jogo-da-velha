let turno = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

function jogar(index){

    if (tabuleiro[index]) return;
    tabuleiro[index] = turno;
    document.querySelectorAll('.cedula')[index].textContent = turno;
    if (verificarVencedor()) alert(`Jogador ${turno} venceu!`);
    turno = (turno==='X') ? 'O' : 'X';
}

function verificarVencedor(){
    const combinacoes = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let[a, b, c] of combinacoes){
        if(tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro [c]) return true;

    }
    return false;
}