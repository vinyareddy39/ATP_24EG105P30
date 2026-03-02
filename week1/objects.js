
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
console.log(" the original employee ",employees)
// 1. Insert new Emp at 2nd position 
let change = employees.splice(2,0,{eno : 103 , name : "vinya " , marks : [86 ,76,87] })
console.log(" new emp at 2nd poistion ",employees)
// 2. Remove an emp with name "Kiran" 

let index = employees.findIndex((element ) => element.name  == "Kiran")
 let removed = employees.splice(index,1)

console.log(" removed  ", employees)

//    3.Change the last mark 95 to 75 of emp  "Sneha"
// let i = employees.findIndex((element ) => element.name  == "sneha") 
for (let employee of employees){
if (employee.name == "Sneha") {
    for ( let i = 0 ; i< employee.marks.length ; i++) {
if (employee.marks[i] === 95) {
    employee.marks[i] = 75
}
    }

}
}
console.log(" changed from95 to 75  ", employees)