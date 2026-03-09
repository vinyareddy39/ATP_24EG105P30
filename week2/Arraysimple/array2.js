const temp= [32, 35, 28, 40, 38, 30, 42];

console.log(temp)
    // 1. filter() temperatures above 35
    let re = temp.filter((element) => element>35) 
    console.log(re)

   // 2. map() to convert all temperatures from Celsius → Fahrenheit  
let re5 = temp.map((element) => element*1.8+32 )
console.log(re5)
   // 3. reduce() to calculate average temperature
   let re1 = temp.reduce((acc , element) =>  acc + element /7)
    console.log(re1)
   // 4. find() first temperature above 40 
   let re2 = temp.find((element) => element > 40  )
   console.log(re2)
    //5. findIndex() of temperature 28 
    let re3 = temp.findIndex (element => element === 28 )
    console.log(re3)