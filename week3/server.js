import exp from 'express'
import { productApp } from './API/productApi.js' 
import { connect } from 'mongoose'

const app = exp() // it create express application // hold the express function 
app.use(exp.json()) // 
app.use('/product-api',productApp) 
const port = 3000 // create of server 
// assign port number to htt4p server  
app.listen(port , () => console.log(`server listening port ${port} ...`))   

 // connnect to mangodb
 async function connectDB() {
    try {
        await connect("mongodb://localhost:27017"); // replace with ip address if localhost is not working // replace with mongoatlas database 
        console.log("db connection success")

    } catch (err) {
        console.log("error in db connection", err)
    }
}
connectDB()       // 	this function return the function 
// wait is used for promise to finish 