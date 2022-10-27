// 3 - Elabore um algoritmo que calcule o valor do produto de acordo com a forma de pagamento
// A vista débito - 10% - 1 = Débito
// Vista Dinheiro Pix - 15% - 2 = PIX
// Em 2 vzs - valor sem desconto - 3 = parcelado2
// Acima de 2 vezes, preço normal com juros 10% - 4 = parcelado2

const precoEtiqueta = 100.00;
const formaPagamento = 1;

if(formaPagamento === 1) {
    valorPagar = precoEtiqueta * 0.9
    console.log('R$ '+valorPagar.toFixed(2))
} else if (formaPagamento === 2) {
    valorPagar = precoEtiqueta * 0.85
    console.log('R$ '+valorPagar.toFixed(2))
} else if (formaPagamento === 3) {
    valorPagar = precoEtiqueta 
    console.log('R$ '+valorPagar.toFixed(2))
} else if (formaPagamento === 4) {
    valorPagar = precoEtiqueta * 1.1
    console.log('R$ '+valorPagar.toFixed(2))
}
