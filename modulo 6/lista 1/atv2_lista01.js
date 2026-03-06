
let N = parseInt(prompt("Digite um número:"));


if (N % 2 === 0) {

    if (N >= 0) {
        alert("O número " + N + " é par e positivo!");
    } else {
        alert("O número " + N + " é par e negativo!");
    }
} else {

    if (N >= 0) {
        alert("O número " + N + " é ímpar e positivo!");
    } else {
        alert("O número " + N + " é ímpar e negativo!");
    }
}