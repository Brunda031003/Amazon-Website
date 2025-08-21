export const cart = [{//deduplicating/normalizing the data from the cart.js file
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId: 'b1c2d3e4-f5a6-7b8c-9d0e-f1a2b3c4d5e6',
  quantity: 1
},
];

export function addToCart(productId){
  let matchingItem;
      cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingItem = cartItem;
        }
        });
        
      if(matchingItem) {
        matchingItem.quantity++;
        } 
        else {
        cart.push({
        productId:productId, 
        quantity:1
      });      
     }

}