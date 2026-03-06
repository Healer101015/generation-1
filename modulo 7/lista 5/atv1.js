const rl = require("readline-sync");

let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(rl.question(`Digite o valor da matriz [${i}][${j}]: `));
    }
}

console.log("Elementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
    somaPrincipal += matriz[i][i];
}

console.log("Elementos da Diagonal Secundaria:");
for (let i = 0; i < 3; i++) {
    let j = 2 - i;
    console.log(matriz[i][j]);
    somaSecundaria += matriz[i][j];
}

console.log("Soma dos Elementos da Diagonal Principal:");
console.log(somaPrincipal);

console.log("Soma dos Elementos da Diagonal Secundaria:");
console.log(somaSecundaria);