var a = 5;
var N = 20;

function somaMult (a,N) {
    mult =  N / a;
    sum = mult * (mult+1) / 2;
    ans = a * sum;
    return ans;
      
}

console.log(somaMult(a,N));
