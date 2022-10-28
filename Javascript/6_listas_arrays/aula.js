
// // alunos.push('Heitor') - vai adicionar na última posição


// // console.log(alunos.pop()); // pop exclui a ultima posição
// //console.log(alunos.shift()); // shift exclui a primeira posição


const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);









