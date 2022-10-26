// Faça um programa para calcular o valor de uma viagem

// Você terá 5 variaveis. Sendo elas:
//     1 - preço Etanol 
//     2 - preço gasolina
//     3 - Tipo de combustivel que está no carro
//     4 - Consumo
//     5 - Distancia da viagem

//Imprima no console o valor que será gasto

// const etanol = 3.59;
// const gasolina = 4.99;
// const consumoEtanol = 10;
// const consumoGasolina = 15;
// const distanciaViagem = 550;

// if (etanol) {
//     let gastoEtanol = (distanciaViagem/consumoEtanol) * etanol
//     console.log('O gasto com Etanol será de: R$'+gastoEtanol);
// } else {
//     let gastoGasolina = (distanciaViagem/consumoGasolina) * gasolina
//     console.log('O gasto com Etanol será de: R$'+gastoGasolina);
// }

const precoEtanol = 3.79;
const precoGasolina = 4.89;
const consumoCarroEtanol = 10;
const consumoCarroGasolina = 13;
const distanciaKm = 450;
const tipoCombustivel = `Gasolina`;

if (tipoCombustivel === 'Etanol') {
    const gastoCombustivel = distanciaKm/consumoCarroEtanol;
    const custo = gastoCombustivel * precoEtanol;
    console.log('R$'+custo.toFixed(2));
} else {
    const gastoCombustivel = distanciaKm/consumoCarroGasolina;
    const custo = gastoCombustivel * precoGasolina;
    console.log('R$'+custo.toFixed(2));
}



//console.log('R$'+custo.toFixed(2)); // to fixed - transforma para arredondar para 2 decimais