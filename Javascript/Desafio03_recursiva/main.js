let n = 5;

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
       if(n == 0) {
            return 0;
      } else {
            return n + somatorio(n-1)
      }
}
console.log(somatorio(n))