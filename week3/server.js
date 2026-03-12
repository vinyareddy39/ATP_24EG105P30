import exp from 'express';
import { connect } from 'mongoose';

import { productApp } from './API/productapi.js';
import cookieParser from 'cookie-parser';

const app = exp()
const port = 4000
app.use(exp.json())
app.use(cookieParser())

app.use("/product-api", productApp)
app.listen(4000, () => console.log("server on port ..."))
// connect().then().catch()  connect to db server another way 
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017"); // replace with ip address if localhost is not working 
        console.log("db connection success")

    } catch (err) {
        console.log("error in db connection", err)
    }
}
connectDB()