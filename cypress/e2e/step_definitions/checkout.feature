Feature: checkout

Scenario: Finalizar compra com sucesso
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
And Clicar no botão Finish
Then Deve aparecer que o pedido foi enviado com sucesso

Scenario: Tentar comprar item sem dados do checkout
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Clicar no botão Continue
Then Deve aparecer que o campo First Name é obrigatório

Scenario: Tentar finalizar compra sem itens
Given Que realizei o login
And Estou na pagina do carrinho
When Eu clicar em Checkout
Then Deve aparecer que preciso ter itens no carrinho

Scenario: Tentar comprar item apenas com First Name preenchido
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Clicar no botão Continue
Then Deve aparecer que o campo Last Name é obrigatório

Scenario: Tentar comprar item apenas com First Name e Last Name preenchido
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Clicar no botão Continue
Then Deve aparecer que o campo Postal Code é obrigatório

Scenario: Remover um item através do overview
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
And Clicar no nome do item para visualiza-lo
And Clicar no botão de Remove
And Clicar no botão de Back
Then O item deve ser removido da lista de itens do overview

Scenario: Cancelar compra na tela de overview
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
And Clicar no botão Cancel
Then Deve voltar para página de inventário

Scenario: Preencher First Name com 101 caracteres
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore e"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve informar que o campo First Name atingiu o limite máximo

Scenario: Preencher First Name com 100 caracteres
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore "
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve válidar e passar para a tela de overview

Scenario: Preencher First Name com apenas símbolos
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "!@#$%¨&"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve informar que o campo First Name está inválido

Scenario: Preencher First Name com 1 caractere
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "a"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve informar que o campo First Name não tingiu o limite mínimo de caracteres

Scenario: Preencher First Name com 2 caractere
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "aa"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve válidar e passar para a tela de overview

Scenario: Preencher Last Name com 101 caracteress
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore e"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve informar que o campo Last Name atingiu o limite máximo de caracteres

Scenario: Preencher Last Name com 100 caracteres
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore "
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve válidar e passar para a tela de overview

Scenario: Preencher Last Name com apenas símbolos
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "!@#$%¨&"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve informar que o campo Last Name está inválido

Scenario: Preencher Last Name com 1 caractere
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "a"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve informar que o campo Last Name não tingiu o limite mínimo de caracteres

Scenario: Preencher Last Name com 2 caractere
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "aa"
And Preencher em Postal Code "01010101"
And Clicar no botão Continue
Then Deve válidar e passar para a tela de overview

Scenario: Preencher Postal Code com 11 dígitos
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01010101010"
And Clicar no botão Continue
Then Deve informar que o campo Postal Code atingiu o limite máximo de caracteres

Scenario: Preencher Postal Code com 10 dígitos
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "0101010101"
And Clicar no botão Continue
Then Deve válidar e passar para a tela de overview

Scenario: Preencher Postal Code com 1 dígito
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "0"
And Clicar no botão Continue
Then Deve informar que o campo Postal Code não tingiu o limite mínimo de caracteres

Scenario: Preencher Postal Code com 2 dígitos
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "01"
And Clicar no botão Continue
Then Deve válidar e passar para a tela de overview

Scenario: Preencher Postal Code com apenas símbolos
Given Que realizei o login
And Tenho um ítem adicionado no carrinho
And Estou na pagina do carrinho
When Eu clicar em Checkout
And Preencher em First Name "Nimai"
And Preencher em Last Name "Rodrigues"
And Preencher em Postal Code "!@#$%¨&"
And Clicar no botão Continue
Then Deve informar que o campo Postal Code está inválido