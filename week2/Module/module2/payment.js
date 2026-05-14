// iv. payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
// TODO: Implement these functions
export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
const total = getCartTotal(); 
// Apply discount if applicable
if (paymentMethod === "cod" || paymentMethod === "upi" || paymentMethod === "card") {
return false 
}
items.forEach(i => reduceStock(i.productId, i.quantity));
clearCart();
return {
orderId: "ord" + Date.now(),
total: total,
paymentMethod: method,
status: "success"
};
} 
// Validate payment method
export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod) 
  if(method =="card" || method === "upi" || method === "cod")
  {
    return true 
  }
}
// Generate order ID
function generateOrderId() {
  
  return 'ORD' + Date.now();
}