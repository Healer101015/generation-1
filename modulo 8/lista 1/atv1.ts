import * as readline from "readline-sync";


let cores: string[] = [];


for (let i = 0; i < 5; i++) {
    let cor: string = readline.question("Digite uma cor: ");
    cores.push(cor);
}


console.log("\nListar todas as cores:");

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}


cores.sort();


console.log("\nOrdenar as cores:");

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}