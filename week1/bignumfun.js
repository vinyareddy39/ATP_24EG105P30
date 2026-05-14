// Write a function that receives 3 number args and  return the big number
function findMax(num1, num2 , num3 )
{
    // if num1 is greater than num2 and num1 is greater than num3 
 if (num1>num2 && num1>num3){
    console.log("big number in three  ",num1)
}
// if num2 is greater than num1 and num2 is greater than num3
else if(num2>num1 && num2>num3)
{
    console.log("big number in three  ",num2)
} 
// if num3 is greater than num1 and num3 is greater than num2
else 
{
    console.log("big number in three  ",num3)
}
}
 findMax(10,20,30)// function call 
