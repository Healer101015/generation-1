
let nome = prompt("Digite o nome do colaborador:");
let codigo = parseInt(prompt("Digite o código do cargo (1 a 6):"));
let salario = parseFloat(prompt("Digite o salário atual:"));

let cargo = "";
let percentual = 0;

switch (codigo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10;
        break;

    case 2:
        cargo = "Vendedor";
        percentual = 0.07;
        break;

    case 3:
        cargo = "Supervisor";
        percentual = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        percentual = 0.06;
        break;

    case 5:
        cargo = "Estoquista";
        percentual = 0.05;
        break;

    case 6:
        cargo = "Técnico de TI";
        percentual = 0.08;
        break;

    default:
        alert("Código inválido!");
}


if (percentual > 0) {
    let reajuste = salario * percentual;
    let novoSalario = salario + reajuste;

    alert(
        "Nome do colaborador: " + nome +
        "\nCargo: " + cargo +
        "\nSalário reajustado: R$ " + novoSalario.toFixed(2)
    );
}