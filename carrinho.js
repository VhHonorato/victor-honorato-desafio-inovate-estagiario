const fs = require('fs');
const path = require('path');


let carrinho = [];
let valorTotal = 0;
let valorTotalComDesconto;


try {
    const caminhoArquivo = path.join(__dirname, 'produtos.json');
    const data = fs.readFileSync(caminhoArquivo, 'utf-8'); // Lê o conteúdo do arquivo JSON de forma síncrona.
    carrinho = JSON.parse(data); // Converte o texto em array/objeto

    let valorTotal = 0;
    let deuErro = false;

    for(const item of carrinho){
        let valorPorIten = item.quantidade * item.precoUnitario;
        if(item.quantidade <= 0){
            console.log(`A quantidade do item ${item.produto} não pode ser negativa.`)
            deuErro = true;
            break;
        }else if(item.precoUnitario < 0){
            console.log(`O preço do item ${item.produto} não pode ser negativo.`)
            deuErro = true;
            break;
        }
        valorTotal += valorPorIten;
    
    };
    if(!deuErro){
        if(valorTotal >= 100){
        valorTotalComDesconto = valorTotal-(valorTotal * 0.10);
        console.log("DESCONTO DESBLOQUEADO! --- 10% DE DESCONTO APLICADO");
        console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
        console.log(`Valor do desconto: R$${(valorTotal * 0.10).toFixed(2)}`)
        console.log(`Valor total com desconto: R$${valorTotalComDesconto.toFixed(2)}`)
        }else{
        console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
        }if(valorTotal >= 100){
        valorTotalComDesconto = valorTotal-(valorTotal * 0.10);
        console.log("DESCONTO DESBLOQUEADO! --- 10% DE DESCONTO APLICADO");
        console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
        console.log(`Valor do desconto: R$${(valorTotal * 0.10).toFixed(2)}`)
        console.log(`Valor total com desconto: R$${valorTotalComDesconto.toFixed(2)}`)
        }else{
        console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
        }
    }
    


} catch(error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    console.log("Erro ao ler arquivo produtos:", error.message);
}
