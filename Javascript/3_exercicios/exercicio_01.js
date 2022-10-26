

const nota1 = 7;
const nota2 = 9;
const nota3 = 7;

const media = (nota1+nota2+nota3)/3;

if(media < 5) {
    console.log(media.toFixed(1));
    console.log('Reprovação');
} else if (media >=5 && media <= 7){
    console.log(media.toFixed(1));
    console.log('Recuperação');
} else if(media > 7){
    console.log(media.toFixed(1));
    console.log('Passou de semestre');
}
