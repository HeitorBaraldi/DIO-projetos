function escrevaMeuNome(nome) {
    return 'Meu nome é '+ nome
}

// escrevaMeuNome('Carlos');
// escrevaMeuNome('Heitor');

function verificaIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Carlos') + ' e sou maior de idade')
    } else {
        console.log(escrevaMeuNome('Carlos') + ' e sou menor de idade')
    }
}

verificaIdade(15);