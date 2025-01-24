# Relatório de Bugs

---

## Bug 001 - Sistema permitindo acessar inventário direto pelo link

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Inventário do sistema

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Ao acessar a tela de cadastro e clicar no botão "Cadastrar" sem preencher os campos, o sistema não exibe uma mensagem informando que o campo "Nome" é obrigatório.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Digitar na barra de endereço do navegador o link direto: https://www.saucedemo.com/v1/inventory.html.  

#### **Resultado Esperado**  
O sistema deveria redirecionar o usuário para a tela de login.

#### **Resultado Obtido**  
O sistema permite o usuário acessar o sistema sem passar pelo login.

### **Severidade do Defeito**  
**Alta**  

### **Prioridade de Correção**  
**Alta**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/491557db-4e0c-481a-8c0e-c3031c244903

### **Referências**  
Caso de Teste CT-006

---

## Bug 002 - Acessar about do sistema redireciona o usuário para outro site

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
About

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Ao clicar em About do menu side bar o sistema redireciona o usuário para o site errado.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/
2. Clicar no botão **"Registrar"**.  
3. Clicar no botão **"Cadastrar"**.  

#### **Resultado Esperado**  
Ao clicar em About, o sistema deveria redirecionar o usuário para a página de mais informações sobre o sistema.

#### **Resultado Obtido**  
Ao clicar em About, o sistema redireciona o usuário para o site errado.

### **Severidade do Defeito**  
**Média**  


### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/92a3cc0c-f458-4bb8-be9f-e332536e0071

### **Referências**  
Caso de Teste CT-008

---

## Bug 003 - Ícone de acessar a rede social twitter/x do sistema não funciona

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Socials de Inventory

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
O ícone para acessar a rede social twitter/x do sistema não funciona, nada acontece ao clicar no ícone

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Clicar no ícone de twitter/x.  

#### **Resultado Esperado**  
Ao clicar no ícone de twitter/x, o sistema deveria abrir a página do perfil oficial do sistema do twitter/x

#### **Resultado Obtido**  
Nada acontece ao clicar no ícone.

### **Severidade do Defeito**  
**Baixa**  

### **Prioridade de Correção**  
**Baixa**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/10316c4e-a258-431f-a2ed-8ed069312eee

### **Referências**  
Caso de Teste CT-009

---

## Bug 004 - Ícone de acessar a rede social facebook do sistema não funciona

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Socials de Inventory

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
O ícone para acessar a rede social twitter/x do sistema não funciona, nada acontece ao clicar no ícone

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Clicar no ícone de facebook.  

#### **Resultado Esperado**  
Ao clicar no ícone de twitter/x, o sistema deveria abrir a página do perfil oficial do sistema do facebook.

#### **Resultado Obtido**  
Nada acontece ao clicar no ícone.

### **Severidade do Defeito**  
**Baixa**  

### **Prioridade de Correção**  
**Baixa**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/6274a223-83b3-4b49-948c-ea726d57f15a

### **Referências**  
Caso de Teste CT-010

---

## Bug 005 - Ícone de acessar a rede social linkedin do sistema não funciona

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Socials de Inventory

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
O ícone para acessar a rede social twitter/x do sistema não funciona, nada acontece ao clicar no ícone

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.
3. Clicar no ícone de linkedin.

#### **Resultado Esperado**  
Ao clicar no ícone de twitter/x, o sistema deveria abrir a página do perfil oficial do sistema do linkedin

#### **Resultado Obtido**  
Nada acontece ao clicar no ícone.

### **Severidade do Defeito**  
**Baixa**  

### **Prioridade de Correção**  
**Baixa**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/86675c5a-1cb5-465c-a813-da8e0431b79e

### **Referências**  
Caso de Teste CT-011

---

## Bug 006 - Sistema permite avançar para o checkout sem ter itens no carrinho

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Carrinho

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema permite avançar para a tela de checkout sem ter itens no carrinho, podendo inclusive finalizar uma compra sem itens.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Clicar no ícone de carrinho.
4. Clicar no botão Checkout

#### **Resultado Esperado**  
O Sistema deveria validar se há itens no carrinho ao clicar no botão de checkout, informando o usuário que ele precisa ter itens adicionados para avançar para checkout.

#### **Resultado Obtido**  
O Sistema permite avançar para a tela de checkout sem ter itens no carrinho.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/97dbc3df-eab1-4055-863d-f5e0d22cbb51

### **Referências**  
Caso de Teste CT-020

---

## Bug 007 - O Sistema está permitindo enviar mais que 100 caracteres no campo de FirstName em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar mais do que 100 caracteres no campo de First Name no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name mais que 100 caracteres
7. Digitar no campo Last Name um sobrenome válido
8. Digitar no campo Postal Code um cep válido
9. Clicar em Continue

#### **Resultado Esperado**  
O Sistema deveria validar se o campo nome tem mais de 100 caracteres, impedindo de continuar se tiver ultrapassado o limite e informando o usuário de que ele ultrapassou o limite.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um First Name maior do que o permitido.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/9826e498-d373-4a1c-8bb6-845337f77a66

### **Referências**  
Caso de Teste CT-025

---

## Bug 008 - O Sistema está permitindo enviar apenas símbolos no campo FirstName em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar apenas símbolos no campo de First Name no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name: !@#$%¨&
7. Digitar no campo Last Name um sobrenome válido
8. Digitar no campo Postal Code um cep válido
9. Clicar em Continue 

#### **Resultado Esperado**  
O Sistema deveria validar se o campo nome não há símbolos, impedindo de continuar se tiver e informando o usuário de que ele não pode usar apenas símbolos no campo.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um First Name contendo apenas símbolos.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/b82cd701-d74a-4d3e-8c5a-0f61f4625747

### **Referências**  
Caso de Teste CT-027

---

## Bug 009 - O Sistema está permitindo enviar apenas 1 caractere no campo FirstName em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar apenas um caractere no campo de First Name no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name: a
7. Digitar no campo Last Name um sobrenome válido
8. Digitar no campo Postal Code um cep válido
9. Clicar em Continue 

#### **Resultado Esperado**  
O Sistema deveria validar se o campo nome atingiu o limite mínimo de caracteres, impedindo de continuar se não tiver atingido e informando o usuário de que ele não atingiu o limite mínimo exigido.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um First Name contendo 1 caractere.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/8b89d05a-c38e-419a-8803-ebb46bb662ff

### **Referências**  
Caso de Teste CT-028

---

## Bug 010 - O Sistema está permitindo enviar mais que 100 caracteres no campo de LastName em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar mais do que 100 caracteres no campo de LastName no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name um nome válido
7. Digitar no campo Last Name mais que 100 caracteres
8. Digitar no campo Postal Code um cep válido
9. Clicar em Continue

#### **Resultado Esperado**  
O Sistema deveria validar se o campo sobrenome tem mais de 100 caracteres, impedindo de continuar se tiver ultrapassado o limite e informando o usuário de que ele ultrapassou o limite.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um Last Name maior do que o permitido.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/88213155-bbe6-4422-b00d-0d174d9bbd97

### **Referências**  
Caso de Teste CT-030

---

## Bug 011 - O Sistema está permitindo enviar apenas símbolos no campo LastName em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar apenas símbolos no campo de Last Name no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name um nome válido
7. Digitar no campo Last Name: !@#$%¨&
8. Digitar no campo Postal Code um cep válido
9. Clicar em Continue 

#### **Resultado Esperado**  
O Sistema deveria validar se o campo sobrenome não há símbolos, impedindo de continuar se tiver e informando o usuário de que ele não pode usar apenas símbolos no campo.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um Last Name contendo apenas símbolos.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/9d2a4c96-9699-4918-88ef-29e2aacf2196


### **Referências**  
Caso de Teste CT-032

---

## Bug 012 - O Sistema está permitindo enviar apenas 1 caractere no campo LastName em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar apenas um caractere no campo de Last Name no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name um nome válido
7. Digitar no campo Last Name: a
8. Digitar no campo Postal Code um cep válido
9. Clicar em Continue 

#### **Resultado Esperado**  
O Sistema deveria validar se o campo sobrenome atingiu o limite mínimo de caracteres, impedindo de continuar se não tiver atingido e informando o usuário de que ele não atingiu o limite mínimo exigido.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um Last Name contendo 1 caractere.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/19e39b10-163d-40b6-9374-a862069081e1

### **Referências**  
Caso de Teste CT-033

---

## Bug 013 - O Sistema está permitindo enviar mais que 10 caracteres no campo de Postal Code em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar mais do que 100 caracteres no campo de Postal Code no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name um nome válido
7. Digitar no campo Last Name um sobrenome válido
8. Digitar no campo Postal Code: 01010101010
9. Clicar em Continue

#### **Resultado Esperado**  
O Sistema deveria validar se o campo Postal Code tem mais de 10 caracteres, impedindo de continuar se tiver ultrapassado o limite e informando o usuário de que ele ultrapassou o limite.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um Postal Code maior do que o permitido.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/6ebf55bf-8e4e-4dac-b00c-40f17b46d52c

### **Referências**  
Caso de Teste CT-035

---

## Bug 014 - O Sistema está permitindo enviar apenas 1 caractere no campo Postal Code em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar apenas um caractere no campo de Postal Code no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name um nome válido
7. Digitar no campo Last Name um sobrenome válido
8. Digitar no campo Postal Code: 1
9. Clicar em Continue 

#### **Resultado Esperado**  
O Sistema deveria validar se o campo Postal Code atingiu o limite mínimo de caracteres, impedindo de continuar se não tiver atingido e informando o usuário de que ele não atingiu o limite mínimo exigido.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um Postal Code contendo 1 caractere.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/a31e2ca0-b82b-4636-919a-5d63b1dd8807

### **Referências**  
Caso de Teste CT-038


---

## Bug 015 - O Sistema está permitindo enviar apenas símbolos no campo Postal Code em checkout

### **Data da Anomalia Encontrada**  
23/01/2025

### **Organização Emissora**  
Quality Assurance LTDA.

### **Autor e Cargo**  
Nimai Rodrigues, Analista de Testes (QA)

### **Objeto de Teste**  
Formulário de Checkout

### **Ambiente de Teste**  
- **Sistema Operacional:** Windows 10 Pro (64-bit) Version 22H2  
- **Navegador:** Google Chrome Versão 131.0.6778.265 (Versão oficial) 64 bits

### **Contexto do Defeito**  
Sistema está permitindo enviar apenas símbolos no campo de Postal Code no formulário de checkout.

### **Descrição da Falha**  
#### **Passo a Passo**  
1. Acessar o sistema: https://www.saucedemo.com/v1/ 
2. Realizar login.  
3. Adicionar um ítem no carrinho.
4. Clicar no carrinho.
5. Clicar no botão Checkout.
6. Digitar no campo First Name um nome válido
7. Digitar no campo Last Name um sobrenome válido
8. Digitar no campo Postal Code: !@#$%¨&
9. Clicar em Continue 

#### **Resultado Esperado**  
O Sistema deveria validar se o campo Postal Code não há símbolos, impedindo de continuar se tiver e informando o usuário de que ele não pode usar apenas símbolos no campo.

#### **Resultado Obtido**  
O Sistema permite enviar no formulário de checkout um Postal Code contendo apenas símbolos.

### **Severidade do Defeito**  
**Média**  

### **Prioridade de Correção**  
**Média**

### **Status do Defeito**  
**Em Aberto**

### **Evidências**  

https://github.com/user-attachments/assets/52b93dc6-9b40-4963-a093-8976d6485120


### **Referências**  
Caso de Teste CT-040

---
