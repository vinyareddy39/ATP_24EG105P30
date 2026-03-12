import {Schema,model} from 'mongoose' 
// create a obj 
const productSchema = new Schema({
    //  a.productId (required)
    productId:{
        type:Number,
        required:[true,"id is imp "], // is imp then otherwise 
    },
    productName:{
        type:String,
        required:[true,"name is imp "]
    },price:{
        type:Number,
        required:[true,"price is imp"],
        min:[10000,"the min price is 10000"],
        max:[50000,"the max price is 50000"]
    },brand:{
type:String,
required:[true,"enter the brand name "]
    }

    //  b.productName(required)
    //  c.price(required, min price 10000 and max price 50000)
     // d.brand(required)
})
export const productModel = model("product",productSchema) ;