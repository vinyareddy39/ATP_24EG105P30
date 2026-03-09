const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

  //  1. filter() students who passed (marks ≥ 40) // condition 
  let result1 = students.filter((element) => element.marks >=40) 
   console.log(result1) 
   // 2. map() to add a grade field  ≥90 → A  ≥75 → B  ≥60 → C  else → D
     let result2  = students.map((element  ) => { 
        if(element.marks > 90)
        {
            return "A"
        }
        else if (element.marks < 90 && element.marks > 75 )
        {
            return "B"
        }
         else if (element.marks < 75  && element.marks > 60 )
        {
            return "C"
        }
        else 
        {
            return "D"
        }
     })
     console.log(result2)
 //  3. reduce() to calculate average marks
 let result3 = students.reduce((accu   , ele   ) =>   accu  +ele.marks / 5 , 0  )
    console.log(result3)
 //  4. find() the student who scored 92
 let result4 = students.find((element) => element.marks  === 92)
 console.log(result4)
  // 5. findIndex() of student "Kiran"
  let result5 = students.findIndex((element) => element.name  === "Kiran")
 console.log(result5)