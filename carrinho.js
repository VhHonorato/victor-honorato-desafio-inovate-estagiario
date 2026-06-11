const prompt = require("prompt-sync")({sigint: true}); 

let carrinho = [];
let valorTotal = 0;
let valorTotalComDesconto = valorTotal-(valorTotal * 0.10);

while (true) {
   let  nomeProduto = prompt("Digite o nome do produto ou 'sair' para encerrar: "); 

   if (nomeProduto.toLowerCase() === "sair") {
      break;
   }
   if (!isNaN(nomeProduto)&& nomeProduto.trim() !== ""){ //Verifica se o nome do produto é apenas um número, o que seria inválido. E verifica se o usário digitou apenas espaços vazios.
        console.log("Digite um produto válido")
   } 
   let quantidadeProduto = parseInt(prompt(`Digite a quantidade de${nomeProduto}: `)); // 'parseInt' converte o numéro inserido como strig em número inteiro. 
   let valorProduto = parseFloat(prompt(`Digite o valor de ${nomeProduto}: `)); // 'parseFloat'converte o númeor inserido como string em número com casas decimais.


   let quantidadeProduto;
   let valorProduto;
}