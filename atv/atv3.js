const readline = require('readline-sync');

let salarioBruto = parseFloat(readline.question("Salário Bruto: "));
let adicionalNoturno = parseFloat(readline.question("Adicional Noturno: "));
let horasExtras = parseFloat(readline.question("Horas Extras: "));
let descontos = parseFloat(readline.question("Descontos: "));

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\nSalário Líquido:", salarioLiquido.toFixed(2));