Feature: carrinho

Scenario: Adicionar um item no carrinho pelo botão do card
Given Que realizei o login
And estou na pagina de inventário
When Eu clicar no botão Add to cart de um item
And Eu clicar no ícone de carrinho
Then Deve aparecer no ícone de carrinho o número 1
And Deve aparecer 1 item no carrinho

Scenario: Adicionar 3 itens no carrinho pelo botão do card
Given Que realizei o login
And estou na pagina de inventário
When Eu clicar no botão Add to cart de 3 itens
And Eu clicar no ícone de carrinho
Then Deve aparecer no ícone de carrinho o número 3
And Deve aparecer 3 itens no carrinho

Scenario: Adicionar um item no carrinho pela visualização do item
Given Que realizei o login
And estou na pagina de inventário
When Eu clicar no item
And Eu clicar no botão Add to cart do item
And Eu clicar no ícone de carrinho
Then Deve aparecer no ícone de carrinho o número 1
And Deve aparecer 1 item no carrinho 

Scenario: Remover um item do carrinho pelo botão do card
Given Que realizei o login
And estou na pagina de inventário
When Eu clicar no botão Add to cart de um item
And Eu clicar no botão Remove do item
And Eu clicar no ícone de carrinho
Then Deve aparecer no ícone de carrinho o número 0
And Deve aparecer 0 itens no carrinho

Scenario: Remover um item no carrinho pela visualização do item
Given Que realizei o login
And estou na pagina de inventário
When Eu clicar no item
And Eu clicar no botão Add to cart da tela de visualização do item
And Eu clicar no botão Remove da tela de visualização do item
And Eu clicar no ícone de carrinho
Then Deve aparecer no ícone de carrinho o número 0
And Deve aparecer 0 itens no carrinho

Scenario: Remover um item do carrinho pelo botão de visualização do carrinho
Given Que realizei o login
And estou na pagina de inventário
When Eu clicar no botão Add to cart de um item
And Eu clicar no ícone de carrinho
And Eu clicar no botão de Remove do item
And Deve aparecer 0 itens no carrinho
