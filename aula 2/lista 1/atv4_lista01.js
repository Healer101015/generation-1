
let p1 = prompt("Digite a 1ª palavra (vertebrado ou invertebrado):").toLowerCase().trim();
let p2 = prompt("Digite a 2ª palavra:").toLowerCase().trim();
let p3 = prompt("Digite a 3ª palavra:").toLowerCase().trim();

let animal = "";


if (p1 === "vertebrado") {
    if (p2 === "ave") {
        if (p3 === "carnivoro") animal = "Águia";
        else if (p3 === "onivoro") animal = "Pomba";
    } else if (p2 === "mamifero") {
        if (p3 === "onivoro") animal = "Homem";
        else if (p3 === "herbivoro") animal = "Vaca";
    }
} else if (p1 === "invertebrado") {
    if (p2 === "inseto") {
        if (p3 === "hematofago") animal = "Pulga";
        else if (p3 === "herbivoro") animal = "Lagarta";
    } else if (p2 === "anelideo") {
        if (p3 === "hematofago") animal = "Sanguessuga";
        else if (p3 === "onivoro") animal = "Minhoca";
    }
}


if (animal !== "") {
    alert(animal);
} else {
    alert("Combinação inválida! Confira as palavras digitadas.");
}