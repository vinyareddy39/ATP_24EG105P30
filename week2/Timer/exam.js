
      //   Immediately show: “Exam submitted successfully”
      console.log("Exam submitted successfully")
       // After 2 seconds → show: “Evaluating answers…”
     setTimeout(() => 
    {
console.log("Evaluating answers…")
    },5000)
      
      //   After 4 seconds → show: “Result: Pass”
        setTimeout(() => 
    {
console.log("…Result: Pass")
    },5000)