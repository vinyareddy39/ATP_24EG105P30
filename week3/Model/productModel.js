import {Schema,model} from 'mongoose' // imported from mongoose 
const productSchema = new Schema({ 
    // the id must be entered
    productId:{
  type:Number,
  required:[true,"the id must be entered"]            
    },productName:{ 
        // the name must be entered
        type:String,
        required:[true,"the name must be entered"],
        minLength:[6,"the min length is 6"]
    },price:{
        // the price must be entered
        type:Number,
    },brand:{ 
        // the brand must be entered
        type:String,
        required:[true,"the brand is must "]
    }
});

export  const  productModel = model("product",productSchema) // it is name of collection  in mangoDB (product)  and  productSchema is that struture apllied to the collection  
   
   