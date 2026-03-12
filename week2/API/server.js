import exp from 'express'
const app = exp() 
const port = 4000 
app.listen(port,() => {
    console.log(`the port is listening ${port}`) 
})
let products = [] 
app.use(exp.json())  

app.get('/products',(req,res)=>
{
    res.json({message:"productscreated",payLoad:products})
})

app.get('/products/:id',(req,res)=>
{
  let id = Number(req.params.id) 
  let index = products.findIndex((element) => element.id === id)
 if(index===-1)
{
    res.json({message:"products not there"})
}
  res.json({message:"the products is present ",payLoad:products})
})

app.post('/products',(req,res)=>
{
    let product = req.body  ; 
    products.push(product) 
    res.json({message:"products created"})
})
app.put('/products',(req,res) =>{
let modifyuser = req.body ; 
// let id = Number(req.params.id)
let  index = products.findIndex((element) =>{
    element.id === modifyuser.id
})
if(!index)
{
    res.json({message:"the index is not tehre"})
}
products.splice(index,1,modifyuser)
res.json({message:"the modifiyed user is "})
}
) 
app.delete('/products/:id',(req,res)=>
{
    let id = Number(req.params.id)
let index = products.findIndex((element) => element.id === id)
if(!index) 
{
    res.json({message:"not there"})
    
} 
products.splice(index,0)
res.json({message:'deleted'}) 
})
// product id , name , brand , price 
