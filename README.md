# DESAFIO-VOX

Este desafio tem o objetivo de avaliar os conhecimentos e habilidades em teste de software.

Versão do Cypress utilizada: 14.0.0
Versão do npm utilizada: 10.7.0
Versão do Node utilizada: 22.2.0
Versão do Git utilizada: 2.42.0

### Instalação do Node
Instalação do Node e do NPM podendo serem instalados juntos através do Link https://nodejs.org/

### Instalação do Git
Instalação do Git através do link https://git-scm.com/downloads

### Para configuração e execução dos testes:
1. Criar uma pasta para armazenar os arquivos
2. Apertar "windows + R"
3. Digitar "cmd" no campo da janela aberta
4. No prompt de comando, digitar "cd " e o caminho da pasta criada para armazenar os arquivos de testes, por exemplo: cd C:\Users\nimai\pastaCriada
5. Ir no repositório do github https://github.com/nimairodrigues/DESAFIO-VOX
6. Clicar no botão de "Code"
7. Selecionar a opção HTTPS
8. Copiar o link https
9. Ir no prompt de comando e digitar "git clone " e o link HTTPS copiado do repositório, por exemplo: git clone https://github.com/nimairodrigues/DESAFIO-VOX.git
10. Após baixado, no mesmo prompt estando na mesma pasta, digitar o seguinte para baixar os arquivos necessários: npm install
11. Para abrir a interface do Cypress, digitar: npm run cy:open

## Sobre o Projeto

Os casos de testes foram escritos utilizando o formato BDD (Behavior driven-development), foram feitos 36 casos de testes, cobrindo os casos requeridos e outros contendo outros casos de uso, inclusive aplicando técnicas de caixa-preta como por exemplo análise de valor limite em alguns campos.

**Os Casos de Testes podem ser vistos aqui: https://docs.google.com/spreadsheets/d/1ngpE_1pIVQ257ojtIS0SUHMDiQtynXiXUf2icdbzOUg/edit?usp=sharing**

Foi utilizado o padrão page object na codificação dos testes junto com o cucumber para implementar o BDD na codificação.

Foi feito um relatório de defeitos com os defeitos encontrados contendo várias informações detalhando o máximo para que a equipe possa resolver os defeitos.

**O relatório de defeitos pode ser visto aqui: https://github.com/nimairodrigues/DESAFIO-VOX/blob/main/Relatorio-de-bug.md**

Vários comentários foram feitos na codificação, para o melhor entendimento do código.

Em e2e\step_definitions contém as pastas que levam aos **Steps** contendo a codificação de cada passo dos casos de testes.

Em e2e\step_definitions contendo os arquivos de **Feature** de cada funcionalidade.

Em support\pageObjects contém os arquivos de classes de **PageObject**, contendo os códigos que vão interagir com cada página.
