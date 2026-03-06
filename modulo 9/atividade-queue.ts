import promptSync from "prompt-sync";
import { Queue } from "./Queue";

const prompt = promptSync();
const fila = new Queue<string>();

let opcao: number;

function mostrarMenu(): void {
   console.log("\n*****************************************************");
   console.log("\n1 - Adicionar Cliente na Fila");
   console.log("2 - Listar todos os Clientes");
   console.log("3 - Retirar Cliente da Fila");
   console.log("0 - Sair");
   console.log("\n*****************************************************");
}

do {
   mostrarMenu();
   opcao = Number(prompt("\nEntre com a opção desejada: "));

   switch (opcao) {
      case 1:
         const nome = prompt("\nDigite o nome: ");
         fila.enqueue(nome);
         console.log("\nFila:");
         fila.printQueue();
         console.log("\nCliente Adicionado!");
         break;

      case 2:
         if (fila.isEmpty()) {
            console.log("\nA fila está vazia!");
         } else {
            console.log("\nLista de Clientes na Fila:");
            fila.printQueue();
         }
         break;

      case 3:
         if (fila.isEmpty()) {
            console.log("\nA fila está vazia!");
         } else {
            fila.dequeue();
            console.log("\nFila:");
            fila.printQueue();
            console.log("\nO Cliente foi Chamado!");
         }
         break;

      case 0:
         console.log("\nPrograma Finalizado!");
         break;

      default:
         console.log("\nOpção Inválida!");
   }
} while (opcao !== 0);
