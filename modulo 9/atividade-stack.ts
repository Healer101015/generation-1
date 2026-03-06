import promptSync from "prompt-sync";
import { Stack } from "./Stack";

const prompt = promptSync();
const pilha = new Stack<string>();

let opcao: number;

function mostrarMenu(): void {
   console.log("\n*****************************************************");
   console.log("\n1 - Adicionar Livro na Pilha");
   console.log("2 - Listar todos os Livros");
   console.log("3 - Retirar Livro da Pilha");
   console.log("0 - Sair");
   console.log("\n*****************************************************");
}

do {
   mostrarMenu();
   opcao = Number(prompt("\nEntre com a opção desejada: "));

   switch (opcao) {
      case 1:
         const livro = prompt("\nDigite o nome: ");
         pilha.push(livro);
         console.log("\nPilha:");
         pilha.printStack();
         console.log("\nLivro Adicionado!");
         break;

      case 2:
         if (pilha.isEmpty()) {
            console.log("\nA pilha está vazia!");
         } else {
            console.log("\nLista de Livros na Pilha:");
            pilha.printStack();
         }
         break;

      case 3:
         if (pilha.isEmpty()) {
            console.log("\nA pilha está vazia!");
         } else {
            pilha.pop();
            console.log("\nPilha:");
            pilha.printStack();
            console.log("\nUm Livro foi retirado da pilha!");
         }
         break;

      case 0:
         console.log("\nPrograma Finalizado!");
         break;

      default:
         console.log("\nOpção Inválida!");
   }
} while (opcao !== 0);
