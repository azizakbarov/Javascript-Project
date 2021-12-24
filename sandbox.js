const scores = [10, 30, 15, 25, 50, 40, 5];

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom ", price: 40 },
  { name: "star sell", price: 30 },
  { name: "banana skin", price: 50 },
  { name: "red shell", price: 10 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts);
