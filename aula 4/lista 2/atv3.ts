import * as readline from "readline-sync";

let numeros: Set<number> = new Set();

while (numeros.size < 10) {
    let entrada = readline.question("Digite um numero: ");
    let valor = Number(entrada);

    if (!Number.isNaN(valor) && Number.isInteger(valor)) {
        numeros.add(valor);
    }
}

console.log("\nListar dados do Set:");

numeros.forEach((n) => {
    console.log(n);
});