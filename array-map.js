
// array map method
const numbers = [34,45,56,46,34,23,];

let output = numbers.map(x => x*x);
// console.log(output);

// applying map in string array 

let favFriend = ['bikas','akas','batas', 'fitas','mutas','bilkis', 'sundorni '];

let asolFrnd = favFriend.map(x => {
    let a = x.length+2;
    let b = a*a;
    let result = (b/100)*10
    return result;
})

// console.log(asolFrnd);

// applying map in array object

let product = [
    {name: 'gigabute 81 pc', price: 6600, color: 'black'},
    {name: 'HP monitor', price: 10000, color: 'white'},
    {name: 'intex i4 porcesor', price: 3100, color: 'silver'},
    {name: 'a4tch mouse', price: 350, color: 'black'},
    {name: 'a4tch keyboard', price: 650, color: 'black'},
]


product.forEach(x => console.log(x.name));