let arr = gets().split(''); 
let arrEmpty = []; 

for (let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 0){
    arrEmpty.unshift(arr[i])
  } else {
    arrEmpty.push(arr[i])
  }
}

print(arrEmpty)