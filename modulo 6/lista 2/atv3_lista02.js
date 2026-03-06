
let num1 = parseFloat(prompt("Digite o 1º número:"));
let num2 = parseFloat(prompt("Digite o 2º número:"));
let operacao = parseInt(prompt(
    "Digite a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
));

let resultado;

switch (operacao) {
    case 1:
        resultado = num1 + num2;
        alert(num1 + " + " + num2 + " = " + resultado);
        break;

    case 2:
        resultado = num1 - num2;
        alert(num1 + " - " + num2 + " = " + resultado);
        break;

    case 3:
        resultado = num1 * num2;
        alert(num1 + " × " + num2 + " = " + resultado);
        break;

    case 4:
        if (num2 !== 0) {
            resultado = num1 / num2;
            alert(num1 + " ÷ " + num2 + " = " + resultado);
        } else {
            alert("Não é possível dividir por zero!");
        }
        break;

    default:
        alert("Operação Inválida!");
}