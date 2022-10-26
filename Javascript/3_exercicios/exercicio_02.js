// IMC = PESO / (ALTURA * ALTURA)
// 18.5 - ABAIXO DO PESO 
// 18.5 E 25 - NORMAL 
// 25 E 30 - ACIMA DO PESO
// 30 E 40 - OBESO
// 40 - OBESIDADE GRAVE

const peso = 80;
const altura = 1.70;

const imc = peso / (altura*altura)
console.log('Seu imc é: '+imc.toFixed(1))

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >=18.5 && imc <=25) {
    console.log('Normal')
} else if (imc >=25 && imc <=30) {
    console.log('Acima do peso')
} else if (imc >=25 && imc <=30) {
    console.log('Obeso')
} else if (imc >40) {
    console.log('Obesidade Grave')
}