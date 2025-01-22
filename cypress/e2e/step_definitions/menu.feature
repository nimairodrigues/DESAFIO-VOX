Feature: Menu

Scenario: Realizar logout

Given Que realizei o login
And estou na pagina de inventário
When Eu clico no Menu
And Eu clico em logout
Then Eu deslogo com sucesso

Scenario: Acessar about
Given Que realizei o login
And estou na pagina de inventário
When Eu clico no Menu
And Eu clico em about
Then Aparece a pagina de mais informações sobre o sistema