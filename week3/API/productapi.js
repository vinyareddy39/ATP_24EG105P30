import exp from 'express'
import {productModel} from '../models/productsModel.js'
export const productApp = exp.Router()
productApp.post("/products",async(req,res)=>
{ 
const newproduct = req.body ; 
const newproductDocument = new productModel(newproduct)
const result = await newproductDocument.save()
// console.log(result)
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
productApp.delete("/products/:id",async(req,res)=>
{
    const uid = req.params.id ; 
    const delete1 = await productModel.findByIdAndDelete({_id:uid})
    
      
      res.status(200).json({message:"deleted"}) 
      
})
productApp.get("/products/:id", async (req, res) => // by id 
{
    const uid = req.params.id
    const productObj = await productModel.findOne({ _id: uid })
    if (!productObj) // this becoz if mangodb delted then 
    {
        return res.status(404).json({ message: "user not found " })
    }
    // instead of else you can return 
    // findById(uid) object id it is easy / use find one method to read a document with non object id field // use find by id to read document with object id 
    res.status(200).json({ message: "user", payLoad:productObj})

})