import products from './products';

let productName = 'fanny pack';

const product = products.filter(product => product.name === productName)[0];

if (product.preOrder === true) {
  console.log("We'll let you know when your product be on its way.")
}

let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

let shippingAddress : string = "Brazil street number 7";

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("It's free shipping")
} else {
  shipping = 5;
  console.log("The shipping will cost $ 5")
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = .05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);

// in your console, type tsc to check if the code is working, then type node index.js to initialize it
