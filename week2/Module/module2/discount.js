// iii. discount.js - Coupon and discount logic
// Available coupons
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists 
if(!coupons [couponCode])
{
    return "invalid"
}
// 2. Check minimum amount requirement 
if(cartTotal < coupons.minAmount){
return false
}
// 3. Check category requirement (if any)
// Return { valid: true/false, message: '...' }
if (coupons.category)
{
    let valid = cartItems.some(item => item.category === coupons.category);
if(!valid){
return false
}
}
}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
// Return discount amount
if("WELCOME10" === couponCode)
{
 return cartTotal = coupons.minAmount*0.1
}
if("ELECTRONICS20" === couponCode)
{
 return cartTotal = coupons.minAmount*0.2
}
if("FLAT500" === couponCode)
{
 return cartTotal = coupons.minAmount - 500 
}
} 
export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon 
validateCoupon()
// 2. If valid, calculate discount 
calculateDiscount()
// 3. Return final amount and discount details
// Return {
// originalTotal: ..., 
return console.log(` the total is ${cartTotal} and ${couponCode}`)
// discount: ...,
// finalTotal: ...,
// message: '...'
// }
}