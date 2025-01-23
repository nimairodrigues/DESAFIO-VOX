Feature: Login

Scenario: Realizar login
Given Que estou na pagina de login
When Eu digito um usuário válido
And Eu digito uma senha válida
And Eu clico em login
Then Deve aparecer a página de inventário

Scenario: Tentar login sem dados
Given Que estou na pagina de login
When Eu clico em login
Then Deve aparecer mensagem informando que o username é obrigatório

Scenario: Tentar login apenas com username preenchido
Given Que estou na pagina de login
When Eu digito um usuário válido
And Eu clico em login
Then Deve aparecer mensagem informando que a password é obrigatória

Scenario: Tentar login apenas com password preenchida
Given Que estou na pagina de login
When Eu digito uma senha válida
And Eu clico em login
Then Deve aparecer mensagem informando que o username é obrigatório

Scenario: Tentar login com username válido e senha inválida
Given Que estou na pagina de login
When Eu digito um usuário válido
And Eu digito uma senha inválida
And Eu clico em login
Then Deve aparecer mensagem informando que usuário e senha não existem no sistema

Scenario: Tentar acessar o sistema de inventário diretamente pelo link
Given Que estou na pagina de login
When Eu digito o link direto para o inventário na barra de endereço
Then Deve me redirecionar para a pagina de login