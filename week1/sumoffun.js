function findSum(array){
    let sum =0 ;
    
    for(let i = 0 ; i < array.length  ; i++){
sum = sum + array[i];
   
}
return sum ;
}
let result = findSum([10,20,30])// function call 
console.log(result)