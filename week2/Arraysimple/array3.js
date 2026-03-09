
const courses = ["javascript", "react", "node", "mongodb", "express"];

    //1. filter() courses with name length > 5
    let re1 = courses.filter((element) => element.length > 5)
    console.log(re1)
    //2. map() to convert course names to uppercase
    let re2 = courses.map((element) => element.toUpperCase())
    console.log(re2)

   let  res3 = courses.reduce((accu,element) => accu.toUpperCase() + "|" + element.toUpperCase())
      console.log(res3)
    //4. find() the course "react"
    let re4 = courses.find((element) => element == "react" )
    console.log(re4)
    // 5. findIndex() of "node"
    let re5 = courses.findIndex((element) => element == "node" )
    console.log(re5)