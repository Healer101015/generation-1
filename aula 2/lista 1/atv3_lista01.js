
let nome = prompt("Digite o nome do doador:");
let idade = parseInt(prompt("Digite a idade do doador:"));
let primeiraDoacao = confirm("Primeira doação de sangue?\nOK = Sim\nCancelar = Não");


let apto = false;

if (idade >= 18 && idade <= 69) {
    if (idade >= 60) {

        apto = (primeiraDoacao === false);
    } else {

        apto = true;
    }
} else {
    apto = false;
}


if (apto) {
    alert(nome + " está apto para doar sangue!");
} else {
    alert(nome + " não está apto para doar sangue!");
}