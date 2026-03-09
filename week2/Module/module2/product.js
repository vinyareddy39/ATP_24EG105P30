// Product database (simulated)
const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
// TODO: Implement these functions
export function getProductById(id) {
return products.find(element=> element.id === id);
}
export function getAllProducts() {
return  products
}
export function getProductsByCategory(category) {
// Filter products by category 
let result = products.filter((element) => element.category === category)  

return result 
}
export function searchProducts(query) {
// Search products by name (case-insensitive) 
let result1 = products.filter((element) => element.name === query) 
return result1
}
export function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false 
let find = products.find((element ) => element.id === productId)

if(find.stock >= quantity)
{
    return true
}return false 
}
export function reduceStock(productId, quantity) {
// Reduce product stock after purchase 
let find = products.find((element ) => element.id === productId)
if(find){
    find.stock = find.stock - quantity 
}
}