// find the index of target
function findSearch (a)
{ 
    // find target 
    let target = 30;
    for(let i = 0 ; i< a.length ; i++){
    if (target == a[i]){
        console.log("the index is ")  
        return i; 
      
    }
} 
 return "not found  ";   
} 
// function call
let re = findSearch([10,20,30])// function call 
console.log(re)