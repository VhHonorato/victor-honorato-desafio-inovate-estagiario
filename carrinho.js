const prompt = require("prompt-sync")({sigint: true}); 

let carrinho = [];
let valorTotal = 0;
let valorTotalComDesconto;


while (true) {
   let nomeProduto;
   let quantidadeProduto;
   let valorProduto;

    nomeProduto = prompt("Digite o nome do produto, 'total' para finalizar a compra e 'sair' para encerrar: ");
   if (nomeProduto.toLowerCase() === "sair") {
      break;
   }else if(nomeProduto.toLowerCase() === "total"){
           
            for (let i = 0; i < carrinho.length; i++) {
                valorTotal += carrinho[i].quantidade * carrinho[i].valor;   
            }
            
            if(valorTotal >= 100){
                valorTotalComDesconto = valorTotal-(valorTotal * 0.10);
                console.log("Para compras com valor acima de R$ 100,00 você terá um desconto de 10%")
                console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
                console.log(`Valor total da compra com desconto: R$${valorTotalComDesconto.toFixed(2)}`)
            }else{
                console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
            
            }    
        break;
   }else{
          
        if (!isNaN(nomeProduto)&& nomeProduto.trim() !== ""){ //Valida se o nome do produto é apenas um número, o que seria inválido. E verifica se o usário digitou apenas espaços vazios.
            console.log("Digite um produto válido");
            nomeProduto = prompt("Digite o nome do produto, 'total' para finalizar a compra e 'sair' para encerrar: ");
            
            
        } 
        quantidadeProduto = parseInt(prompt(`Digite a quantidade de ${nomeProduto}: `)); // 'parseInt' converte o numéro inserido como strig em número inteiro. 
        valorProduto = parseFloat(prompt(`Digite o valor em reais de ${nomeProduto}: `)); // 'parseFloat'converte o númeor inserido como string em número com casas decimais.
   }

   


   carrinho.push({
      nome: nomeProduto,
      quantidade: quantidadeProduto,
      valor: valorProduto

   });
   

   console.log(carrinho);
}
console.log()