const readline = require('readline-sync');

let n1 = parseFloat(readline.question("numero1: "));
let n2 = parseFloat(readline.question("numero2: "));
let n3 = parseFloat(readline.question("numero3: "));
let n4 = parseFloat(readline.question("numero4: "));

let diferenca = (n1 * n2) - (n3 * n4);

console.log("\nDiferença:", diferenca.toFixed(1));