const rl = require("readline-sync");

let soma = 0;
let numero;

do {
    numero = parseInt(rl.question("Digite um numero: "));

    if (numero > 0) {
        soma += numero;
    }

} while (numero !== 0);

console.log("A soma dos numeros positivos e: " + soma);