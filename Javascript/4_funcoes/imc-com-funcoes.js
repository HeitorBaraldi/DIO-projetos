

// function incrementarJuros (valor,percentualJuros) {

//     const valorDeAcrescimo = (percentualJuros/100) * valor
//     return valor + valorDeAcrescimo;
// }
// console.log(incrementarJuros(100,10));
// console.log(incrementarJuros(100,15));
// console.log(incrementarJuros(100,20));

// function cacularJuros(){

// }

// function main() {
//     console.log('Programa Principal');
//     calcularJuros();
// }

// main();

function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return ('Abaixo do peso')
    } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso normal')
    } else if (imc >= 25 && imc <= 30) {
        return ('Acima do peso')
    } else if (imc >= 25 && imc <= 30) {
        return ('Obeso')
    } else {
        return ('Obesidade Grave')
    }
}

(function () {
    const peso = 81;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
    console.log(calcularImc(peso, altura).toFixed(2));
})();

