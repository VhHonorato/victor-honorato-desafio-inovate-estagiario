-- Criação da tabela produtos 
CREATE TABLE produtos (
  id_produto INT PRIMARY KEY,
  nome_produto VARCHAR(50) NOT NULL,
  proco_unitario DECIMAL(10, 2) NOT NULL
);
 -- Criação da tabela compras, com foreign key para tabela produtos
CREATE TABLE compras(
  id_compra INT PRIMARY KEY,
  id_produto INT,
  quantidade INT NOT NULL,
  FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

--Correção do erro de digitação no nome da coluna preco_unitario
ALTER TABLE produtos RENAME COLUMN proco_unitario TO preco_unitario;

--Inserção dos dados nas tabelas produtos e compras
INSERT INTO produtos (id_produto, nome_produto, preco_unitario) VALUES 
(1, 'Arroz', 15.00),
(2, 'Feijão', 8.00),
(3, 'Óleo', 5.00);

INSERT INTO compras (id_compra, id_produto, quantidade) VALUES 
(101, 1, 2),
(102, 2, 1),
(103, 3, 3);


-- Questão 01 - Query para retornar o valor total de cada compra

SELECT 
  c.id_compra,
  p.nome_produto,
  c.quantidade,
  p.preco_unitario,
  (c.quantidade * p.preco_unitario) AS valor_total_da_compra
FROM compras c INNER JOIN produtos p ON c.id_produto = p.id_produto;

--Questão 02 - Query para retornar o produto mais vendido
SELECT 
  p.id_produto,
  p.nome_produto,
  SUM(c.quantidade) AS quantidade_total_comprada
FROM produtos p INNER JOIN compras c ON p.id_produto = c.id_produto
GROUP BY p.id_produto, p.nome_produto
ORDER BY quantidade_total_comprada DESC
LIMIT 1;

-- Questão 03 - Query para retornar a lista de todos os produtos e quantidade total de unidades compradas de cada um.

-- Inserido um item para testar a condição de listagem de produtos que não tenham compras registradas.
INSERT INTO produtos(id_produto, nome_produto, preco_unitario) VALUES
  (4,'Farinha',4); 

SELECT 
p.id_produto,
p.nome_produto,
COALESCE(SUM(c.quantidade),0) AS quantidade_total_comprada
FROM produtos p LEFT JOIN compras c ON p.id_produto = c.id_produto
GROUP BY p.id_produto, p.nome_produto
ORDER BY id_produto ASC;