const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 40 },
  { name: "red shell", price: 10 },
  { name: "banana", price: 5 },
  { name: "apple", price: 50 },
];

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price}pounds`);

console.log(promos);
