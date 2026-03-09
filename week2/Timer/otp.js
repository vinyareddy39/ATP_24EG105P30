console.log("OTP sent successfully!")

let second =5
let interval = setInterval(()=>
{
   second--;
   console.log(" seconds .. ",second)

   if(second===0)
   {
    console.log("resend otp ")
    clearInterval(interval)
   }
},1000);
