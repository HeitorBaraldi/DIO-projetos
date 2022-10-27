// 3 - Elabore um algoritmo que calcule o valor do produto de acordo com a forma de pagamento
// A vista débito - 10% - 1 = Débito
// Vista Dinheiro Pix - 15% - 2 = PIX
// Em 2 vzs - valor sem desconto - 3 = parcelado2
// Acima de 2 vezes, preço normal com juros 10% - 4 = parcelado2

function aplicarDesconto(valor,desconto){
    return (valor -(valor * (desconto/100)));
}
function aplicarJuros(valor,desconto){
    return (valor + (valor * (desconto/100)));
}

const precoEtiqueta = 100.00;
const formaPagamento = 4;

if(formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10).toFixed(2))
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15).toFixed(2))
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta.toFixed(2))
} else if (formaPagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10).toFixed(2))
}

