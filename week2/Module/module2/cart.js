// ii. cart.js - Shopping cart operations
import { getProductById, checkStock, getAllProducts } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {

if(!checkStock(productId, quantity)){
return "not enough stock";
}

let item = cartItems.find(i => i.productId === productId);

if(item){
item.quantity += quantity;
}else{
cartItems.push({ productId, quantity });
}

return "added to cart";
}
export function removeFromCart(productId) {
let index = cartItems.findIndex(i => i.productId === productId);

if(index !== -1){
cartItems.splice(index,1);
return "item removed";
}

}
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart 
let item = cartItems.find(i => i.productId === productId);

if(item){
item.quantity = newQuantity;
return "quantity"
}

return " not found";
}

export function getCartItems() {
return cartItems
}
export function getCartTotal() {
// Calculate total price of all items in cart 
let total = 0;

for (let v of cartItems){

let product = getProductById(v.productId);

if(product){
total += product.price * v.quantity;
}

}

return total;
}



export function clearCart() {
cartItems = [] 
}