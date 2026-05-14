let marks = [23,24,25,26,21]
let min = marks[0] 
// find smallest element 
for (let array of marks  )
{ 
    // console.log(array) 
         // if min is greater than array
    if(min > array)
    {
        min = array
    }
}
console.log("small number in array of 23 24 25 26 21  is  ",min )
