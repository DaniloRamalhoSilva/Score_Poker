# Marcador de Pontos
![WhatsApp Image 2023-02-13 at 18 21 35](https://user-images.githubusercontent.com/69921664/218579998-89de4875-af79-409c-95b6-34843d3f79ca.jpeg)

## OBJETIVO
Este aplicação foi desenvolvida para treinar minhas habilidades de programador e para sanar um problema de ranqueamento de pontos. Ela nada mais é do que um marcador de pontos, que cria um ranking levando em consideração o desempenho individual e o desempenho em relação ao grupo, usado nas partidas de poker da minha família.

## PROBLEMATICA
Minha família e bem grande e sempre nos reunimos para jogar poker, temos 27 jogadores, o sistema de pontuação acontece da seguinte maneira: Primeiro reunimos os jogadores disponíveis no dia (media de 8 pessoas, nem sempre todos estão disponíveis no mesmo dia), então dividimos as fixas e começamos a partida, ao final da partida os três últimos jogadores rebebem pontuação, o primeiro que ganhou todas as fixas 10 pontos, o que perdeu por ultimo 5 pontos, e o antepenúltimo 3 pontos, e uma nova partida e iniciada. Os pontos são contabilizados em um ranking que e postado em um grupo no Facebook onde estão todos os participantes e podemos acompanhar a evolução.<br>
O problema é que sempre achei meio injusto esse ranking já que algumas pessoas jogavam mais vezes que outras pela sua maior disponibilidade, então resolvi desenvolver um ranque que leva em consideração a quantidade de vezes que cada pessoa joga, criando assim mais um fator de critério para a posição no ranking.

## SOLUÇÃO
Funciona da seguinte maneira, além da pontuação já explicada anteriormente a aplicação analisa a quantidade de vezes que a pessoa jogou e a sua pontuação, criando um desempenho individual ex: (joguei 10 partidas, então se eu tivesse ganhado todas em primeiro teria 100 pontos e meu desempenho individual seria de 100%).<br>
A aplicação leva em consideração esses dois fatores (Desempenho em relação ao grupo + desempenho individual) e assim gera um ranking mais justo.

* Veja algumas funcionalidades:

  https://user-images.githubusercontent.com/69921664/218119899-efb87ccb-ed5a-4269-887a-02f5a8cf1d54.mp4

## TECNOLOGIAS e FRAMEWORKS USADAS
Front-end:
> Desenvolvido usando: React, Redux, CSS3, Bootstrap, Vite, JavaScript ES6

Back-end:
> Desenvolvido usando: Arquitetura MSC, NodeJS, ExpressJS, Sequelize, MYSQL2, JavaScript ES6, Joi

Banco de dados:
> MyAQL

## INSTALANDO DEPENDENCIAS
> Front-end:
```bash
npm install
``` 
> Backend
```bash
npm install
``` 
## EXECULTANDO APLICAÇÃO
* Para rodar o front-end:

  ```bash
    npm run dev
  ```
* Para rodar o back-end:
  (o comando ira rodar o prestart, crinado o banco de dados e as tabelas usando o Sequelize).
  
  ```bash
  npm start
  ```
  
* Para rodar o back-end como dev:
  
  ```bash
  npm run prestart
  npm run debug
  ```
