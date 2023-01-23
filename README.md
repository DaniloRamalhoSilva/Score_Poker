## OBJETIVO
Este aplicação foi desenvolvida para treinar minhas habilidades de programador e para sanar um problema de rankeamento de pontos.
Ela nada mais é do que um marcador de pontos, que criando um rankin levando em consideração o desempenho individual e o desempenho em relação ao grupo, usado nas partidas de poker da minha familha.

## PROBLEMATICA
Minha familia e bem grande e sempre nos reunimos para jogar poker, temos 27 jogadores, o sistema de pontuação acotece da seguinte maneira: Primeiro reunimos os jogadores disponiveis no dia (media de 8 pessoas, nem sempre todos estão disponiveis no mesmo dia), então dividimos as fixas e começamos a partida, ao final da partida os tres ultimos jogatores rebebem pontuação, o primeiro que ganhou todas as fixas 10 pontos, o que perdeu por ultimo 5 pontos, e o antepenultimo 3 pontos, e uma nova partida e iniciada. Os pontos são contabilizados em um rankin que e postado em um grupo no fecebook onde estão todos os participantes e podemos acompanhar a evolução.
O problema é que sempre achei meio injusto esse rankin ja que algumas pessoas jogavaõa mais vezes que outras pela sua maior disponibilidade, então resolvi desenvolver um ranke que leva em consideração a quantidade de veses que cada pessoa joga, criando assim mais um fator de criterio para a posição no ranken.

## SOLUÇÂO
Funciona da seguinte maneira, alem da pontuação ja explicada anteriormente a aplicação analiza a quantidade de vezes que a pessoa jogou e a sua pontuação, criando um desempenho individual ex: (joguei 10 partidas, então se eu tivesse ganhado todas em primeiro teria 100 pontos e meu desenpenho individual seria de 100%).
A aplicação leva em cosideração esses dois fatores (Desempenho em relação ao grupo + desempenho individual) e assim gera um ranking mais justo.

## TECNOLOGIAS
### FRONT-END
react
vite
bootstrap

### BACK-END
Arquitetura MSC (model-service-controller)
express
joi
mysql2
sequelize

### BANCO DE DADOS
MySQL

## INSTRUÇOES DEV
#FRONT-END
para subir o servidor rode o comando: npm run dev

#BACK-END
para subir o servidor rode o comando: npm start
(o comando ira rodar o prestart, crinado o banco de dados e as tabelas usando o sequelize).
se preferir pode rodar o comando: npm run prestart
e em seguina o nodemon com o comando: npm run debug



