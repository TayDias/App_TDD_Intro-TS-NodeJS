<h1 align="center">App TDD Intro - Typescript Node.js</h1>

<p>Projeto desenvolvido com base no video tutorial do Youtube citado em referências. O objetivo é estudar desenvolvimento voltado para testes usando Node.js, Typescript e o Vitest.</p>


# Índice

* [Status do projeto](#Status-do-projeto)
* [Tecnologias utilizadas](#Tecnologias-utilizadas)
* [Testes Unitários](#testes-unitários)
* [Configuração do ambiente de teste](#Configuração-do-ambiente-de-teste)
* [Referências](#Referências)


# Status do projeto

:heavy_check_mark: Finalizado :heavy_check_mark:


# Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/download/)
- [Eslint](https://eslint.org/docs/latest/use/getting-started)
- [Typescript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev/guide/)
- [Date-Fns](https://date-fns.org/docs/Getting-Started)


# Testes Unitários

<table>
  <thead>
    <th>Teste</th>
    <th>Tipo</th>
    <th>Requisito</th>
    <th>Resultado esperado</th>
  </thead>
  <body>
    <tr>
      <td>Should be able to create an appointment</td>
      <td>Funcional</td>
      <td>N/A</td>
      <td>Esperado que consiga criar um agendamento ao informar o nome do cliente, a data de início e a data final.</td>
    </tr>
    <tr>
      <td>Should not be able to create an appointment with overlapping dates</td>
      <td>Não funcional</td>
      <td>N/A</td>
      <td>Esperado que não consiga criar um agendamento com datas simultâneas aos agendamentos anteriores.</td>
    </tr>
    <tr>
      <td>Cannot create an appointment with end date before start date</td>
      <td>Não funcional</td>
      <td>N/A</td>
      <td>Esperado que não consiga criar um agendamento quando a data de início for maior ou igual a data final.</td>
    </tr>
    <tr>
      <td>Cannot create an appointment with end date before now</td>
      <td>Não funcional</td>
      <td>N/A</td>
      <td>Esperado que não consiga criar um agendamento quando a data de início for menor ou igual a data atual.</td>
    </tr>
  </body>
</table>


# Configuração do ambiente de teste

## Pré-requisitos

- **Node.js** versão 4 ou superior;


## Instalação

1. Faça o clone do repositório e no terminal navegue até a pasta.
2. Abra o seu editor de código e instale as dependências do projeto com `npm install`. O código foi desenvolvido no [Visual Studio Code](https://code.visualstudio.com).
3. Rode os testes da aplicação com `npm test`.
...


# Referências

Find and fix problems in your JavaScript code:
https://eslint.org

Seu próximo back-end Node com TESTES! (+ SOLID):
https://www.youtube.com/watch?v=jBOLRzjEERk