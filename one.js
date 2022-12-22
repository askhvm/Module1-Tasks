const arr = [
  { name: "Milk", price: 20, amount: 15 },
  { name: "Coffee", price: 30, amount: 17 },
  { name: "Tea", price: 10, amount: 14 },
];

const result = arr.map((obj) => ({
  name: obj.name,
  total: obj.price * obj.amount,
}));
console.log(result);
