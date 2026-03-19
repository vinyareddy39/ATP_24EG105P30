// Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter 
let original = function (...array)
{
 let sum =  0  
 for (let i = 0 ; i < array.length ; i++){
 sum = sum+array[i]

 }return sum
}
let result = original(1,2,3,4) 
console.log(result)