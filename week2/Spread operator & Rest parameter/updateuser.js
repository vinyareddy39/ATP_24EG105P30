         const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

    //    1. Create a deep copy of order
    let order1 = structuredClone(order)

    //    2. Modify in copied object:
    order1.customer.address.city = "chennai"
    //         i. customer.address.city
    order1.items[0].price = 2344556
    //         ii. items[0].price
console.log(" copy ",order1)
    console.log("original = ",order)