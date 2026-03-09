const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


//  1. Use filter() to get only inStock products
  let result1 = cart.filter((element) =>  element.inStock === true )
  console.log(result1) 
    //2. Use map() to create a new array with:  { name, totalPrice } 
  //   let re5 = cart.map((element) => )  // till you nned to do 
  let newArray=cart.map((element)=>({name:element.name, totalPrice:element.price*element.quantity}))
console.log("New Array: ",newArray)
   // 3. Use reduce() to calculate grand total cart value
   let re6   = cart.reduce ((acc, element   )  => acc + element.price , 0  )
   console.log('total ',re6)
   // 4. Use find() to get details of "Mouse"
   let re3 = cart.find((element) => element.name ==  "Mouse" )
console.log(re3)
   // 5. Use findIndex() to find the position of "Keyboard"
let re4 = cart.findIndex((element) => element.name ==  "Keyboard" )
console.log(re4)