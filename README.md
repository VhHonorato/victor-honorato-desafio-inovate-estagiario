# Carrinho de Compras

Um script simples em Node.js para calcular o valor total de um carrinho de compras a partir de uma lista de produtos em formato JSON. O sistema valida se as quantidades e os preços são válidos e aplica um desconto automático de 10% em compras a partir de R$ 100,00.

## Pré-requisitos

Para executar este projeto, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Como executar a aplicação

1. Clone o repositório para a sua máquina executando o comando abaixo no terminal:

```bash
git clone https://github.com/VhHonorato/victor-honorato-desafio-inovate-estagiario.git
```

3. Execute o script principal com o comando abaixo:

```bash
node carrinho.js
```

## Arquivos do Projeto

* `carrinho.js`: Script principal contendo a lógica de leitura, validação e cálculo do valor total com ou sem desconto.
* `produtos.json`: Arquivo de dados que contém os itens do carrinho (nome do produto, quantidade e preço unitário).
* `parte02-sql`: Arquivo com as resoluções das quesões da parte 2 da avaliação.