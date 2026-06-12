const fs = require('fs');



let carrinho = [];
let valorTotal = 0;
let valorTotalComDesconto;


try {
    const data = fs.readFileSync('./dados/produtos.json', 'utf-8'); // Lê o conteúdo do arquivo JSON de forma síncrona.
    carrinho = JSON.parse(data); // Converte o texto em array/objeto

    let valorTotal = 0;

    carrinho.forEach(item => {
        let valorPorIten = item.quantidade * item.precoUnitario;
        valorTotal += valorPorIten;
    
    });
    if(valorTotal >= 100){
        valorTotalComDesconto = valorTotal-(valorTotal * 0.10);
        console.log("DESCONTO DESBLOQUEADO! --- 10% DE DESCONTO APLICADO");
        console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
        console.log(`Valor do desconto: R$${(valorTotal * 0.10).toFixed(2)}`)
        console.log(`Valor total com desconto: R$${valorTotalComDesconto.toFixed(2)}`)
    }else{
        console.log(`Valor total da compra: R$${valorTotal.toFixed(2)}`)
    }


} catch(error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    console.log("Erro ao ler arquivo produtos:", error.message);
}

