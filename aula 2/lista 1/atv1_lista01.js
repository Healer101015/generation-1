
let A = parseInt(prompt("Digite o número A:"));
let B = parseInt(prompt("Digite o número B:"));
let C = parseInt(prompt("Digite o número C:"));

let S = A + B;

if (S > C) {
    alert(A + " + " + B + " = " + S + " > " + C +
        "\nA soma de A + B é Maior que C");
} else if (S < C) {
    alert(A + " + " + B + " = " + S + " < " + C +
        "\nA soma de A + B é Menor que C");
} else {
    alert(A + " + " + B + " = " + S + " = " + C +
        "\nA soma de A + B é Igual a C");
}