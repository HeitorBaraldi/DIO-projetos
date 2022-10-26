// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variaveis. Sendo elas 
//     -1 Preço do combustivel 
//     -2 Consumo
//     -3 Distancia percorrida (Km)

//     imprima no console o valor que será gasto de combustivel para realizar essa viagem. 

const precoCombustivel = 5.79;
const consumoCarro = 12;
const distanciaKm = 1580;

const gastoCombustivel = (distanciaKm/consumoCarro)

const custo = gastoCombustivel*precoCombustivel;

console.log('R$'+custo.toFixed(2)); // to fixed - transforma para arredondar para 2 decimais

