/* const numbers = [4, 5, 7, 1, 2, 66];


const total2 = numbers.reduce((accumulator, previousNumber) => {
    return accumulator + previousNumber
}, 0)

console.log(total2); */

/* const products = [
    { name: 'laptop', price: 3200, quantity: 1 },
    { name: 'shirt', price: 300, quantity: 8 },
    { name: 'watch', price: 800, quantity: 3 },
    { name: 'phone', price: 8000, quantity: 1 }
]

const total = products.reduce((acc,previousNumber)=> acc + previousNumber.price,0);

console.log(total); */

const numbers = [4, 5, 7, 10, 2, 66];

const maxNumber = numbers.reduce((previous,currentNumber) => currentNumber > previous ? currentNumber : previous,0);

console.log(maxNumber);
