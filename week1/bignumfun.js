// Write a function that receives 3 number args and  return the big number
 
function findMax(num1, num2 , num3 )
{
 if (num1>num2 && num1>num3){
    console.log("big number in three  ",num1)
}
else if(num2>num1 && num2>num3)
{
    console.log("big number in three  ",num2)
}
else 
{
    console.log("big number in three  ",num3)
}
}
 findMax(10,20,30)// function call 
