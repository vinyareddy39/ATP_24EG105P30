function findSum(array){
    let sum =0 ;
    // find sum
    for(let i = 0 ; i < array.length  ; i++){
sum = sum + array[i];
   
}
return sum ;
} 
// function call
let result = findSum([10,20,30])// function call 
console.log(result)