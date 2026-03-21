import exp from 'express'
import {productModel} from '../Model/productModel.js'
export const productApp = exp.Router()

productApp.post("/products",async(req,res)=>
{ 
const newproduct = req.body ; 
const newproductDocument = new productModel(newproduct)
const result = await newproductDocument.save()
console.log(result) 
res.status(201).json({message: "user created "}) ;
}); 
// read all users 
productApp.get("/products",async(req,res)=>{
    // read all users from db 
    const  productList = await  productModel.find()
    res.status(200).json({message:"created",payLoad:productList})
});
// read a user by object id 
productApp.put("/products/:id",async(req,res)=>  
{// get modififed user from req
    const  modifiedproduct = req.body;
    const uid = req.params.id;
   const updatedprod = await  productModel.findByIdAndUpdate(uid,{$set:{...modifiedproduct}},{new : true , runValidators:true},) ;//pervious object 
 res.status(200).json({message:"user modified",payLoad:updatedprod}) ;
})


  productApp.delete("/products/:id", async (req,res)=>{

    

        const deletedProduct = await productModel.findByIdAndDelete(req.params.id)

        res.json({
            message:"Product deleted successfully",
            payload:deletedProduct})
}) 