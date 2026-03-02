// Write a function that receives 3 number args and  return the big number
 
function findMax(array)
{
    let max  = array[0]
    for(let i = 0 ; i < array.length ; i++){
    if (max < array[i]){
 max = array[i];
    }
}
return max ;
}
let result = findMax([10,20,30])// function call 
console.log(result)