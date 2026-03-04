const rl = require("readline-sync");

let inicio = parseInt(rl.question("Digite o primeiro numero do Intervalo: "));
let fim = parseInt(rl.question("Digite o ultimo numero do Intervalo: "));

if (inicio >= fim) {
    console.log("Intervalo Inválido!");
} else {
    console.log(`No Intervalo entre ${inicio} e ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
        if (i % 15 === 0) {
            console.log(`${i} e multiplo do 3 e 5`);
        }
    }
}