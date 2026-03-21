import {Schema,model} from 'mongoose' // imported from mongoose 
const productSchema = new Schema({
    productId:{
  type:Number,
  required:[true,"the id must be entered"]            
    },productName:{
        type:String,
        required:[true,"the name must be entered"],
        minLength:[6,"the min length is 6"]
    },price:{
        type:Number,
    },brand:{
        type:String,
        required:[true,"the brand is must "]
    }
});

export  const  productModel = model("product",productSchema) // it is name of collection  in mangoDB (product)  and  productSchema is that struture apllied to the collection  
   
   