# Marcador de Pontos

## OBJETIVO
Este aplicação foi desenvolvida para treinar minhas habilidades de programador e para sanar um problema de rankeamento de pontos.
Ela nada mais é do que um marcador de pontos, que criando um rankin levando em consideração o desempenho individual e o desempenho em relação ao grupo, usado nas partidas de poker da minha familha.

## PROBLEMATICA
Minha familia e bem grande e sempre nos reunimos para jogar poker, temos 27 jogadores, o sistema de pontuação acotece da seguinte maneira: Primeiro reunimos os jogadores disponiveis no dia (media de 8 pessoas, nem sempre todos estão disponiveis no mesmo dia), então dividimos as fixas e começamos a partida, ao final da partida os tres ultimos jogatores rebebem pontuação, o primeiro que ganhou todas as fixas 10 pontos, o que perdeu por ultimo 5 pontos, e o antepenultimo 3 pontos, e uma nova partida e iniciada. Os pontos são contabilizados em um rankin que e postado em um grupo no fecebook onde estão todos os participantes e podemos acompanhar a evolução.
O problema é que sempre achei meio injusto esse rankin ja que algumas pessoas jogavaõa mais vezes que outras pela sua maior disponibilidade, então resolvi desenvolver um ranke que leva em consideração a quantidade de veses que cada pessoa joga, criando assim mais um fator de criterio para a posição no ranken.

## SOLUÇÂO
Funciona da seguinte maneira, alem da pontuação ja explicada anteriormente a aplicação analiza a quantidade de vezes que a pessoa jogou e a sua pontuação, criando um desempenho individual ex: (joguei 10 partidas, então se eu tivesse ganhado todas em primeiro teria 100 pontos e meu desenpenho individual seria de 100%).
A aplicação leva em cosideração esses dois fatores (Desempenho em relação ao grupo + desempenho individual) e assim gera um ranking mais justo.

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
cd api/ 
npm install
``` 
> Backend
```bash
cd api/ 
npm install
``` 
## EXECULTANDO APLICAÇÃO
* Para rodar o front-end:

  ```bash
    npm run dev
  ```
* Para rodar o back-end:
  (o comando ira rodar o prestart, crinado o banco de dados e as tabelas usando o sequelize).
  
  ```bash
  npm start
  ```
  
* Para rodar o back-end como dev:
  
  ```bash
  npm run prestart
  npm run debug
  ```
