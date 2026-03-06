const rl = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = parseInt(rl.question("Digite o numero que voce deseja encontrar: "));

let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        posicao = i;
    }
}

if (posicao !== -1) {
    console.log("O numero " + numero + " esta localizado na posicao: " + posicao);
} else {
    console.log("O numero " + numero + " nao foi encontrado!");
}