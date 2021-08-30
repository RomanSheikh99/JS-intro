// using filter and find method

let numbers = [4,27,2,87,6,67,7,26,32];

let filterNumber = numbers.filter(num => num < 10);
let findNumber = numbers.find(num => num > 10);

console.log(filterNumber,findNumber);


let products = [
    {name: 'gigabute 81 pc', price: 6600, color: 'black'},
    {name: 'HP monitor', price: 10000, color: 'white'},
    {name: 'intex i4 porcesor', price: 3100, color: 'silver'},
    {name: 'a4tch mouse', price: 350, color: 'black'},
    {name: 'a4tch keyboard', price: 650, color: 'black'},
]

let filterProduct = products.filter(pro => pro.price > 1000);
let findProduct = products.find(pro => pro.price < 1000);

console.log(filterProduct,findProduct.name);