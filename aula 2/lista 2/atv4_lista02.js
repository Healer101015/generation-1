// Saldo inicial
let saldo = 1000.00;

// Entrada
let operacao = parseInt(prompt(
    "Digite a operação:\n1 - Saldo\n2 - Saque\n3 - Depósito"
));

let valor;

// Estrutura Switch
switch (operacao) {
    case 1:
        alert("Operação - Saldo\nSaldo: R$ " + saldo.toFixed(2));
        break;

    case 2:
        valor = parseFloat(prompt("Digite o valor do saque:"));

        if (valor <= saldo) {
            saldo -= valor;
            alert("Operação - Saque\nNovo Saldo: R$ " + saldo.toFixed(2));
        } else {
            alert("Operação - Saque\nSaldo Insuficiente!");
        }
        break;

    case 3:
        valor = parseFloat(prompt("Digite o valor do depósito:"));

        saldo += valor;
        alert("Operação - Depósito\nNovo Saldo: R$ " + saldo.toFixed(2));
        break;

    default:
        alert("Operação Inválida!");
}