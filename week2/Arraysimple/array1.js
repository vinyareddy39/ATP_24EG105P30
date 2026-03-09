
const marks = [78, 92, 35, 88, 40, 67];

   // 1. filter() marks ≥ 40 (pass marks)
   let re1 = marks.filter((element )=> element >= 40)
console.log(re1)
    //2. map() to add 5 grace marks to each student
    let re2 = marks.map((element )=> element + 5 )
console.log(re2)
    //3. reduce() to find highest mark 
     let ree = marks.reduce((acc,element )=> 
    {
       
        if(acc < element)
        {
            acc = element 
        }
        return acc 
    } )
console.log("highest ",ree)
    //4. find() first mark below 40
     let re4 = marks.find((element )=> element < 40 )
console.log(re4)
    // 5. findIndex() of mark 92
     let re5 = marks.findInde((element )=> element == 92 )
console.log(re5)