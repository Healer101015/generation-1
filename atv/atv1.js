const readline = require('readline-sync');

let salario = parseFloat(readline.question("Salario: "));
let abono = parseFloat(readline.question("Abono: "));

let novoSalario = salario + abono;

console.log("\nNovo Salário:", novoSalario.toFixed(2));