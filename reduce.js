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

/* const numbers = [4, 5, 7, 10, 2, 66];

const maxNumber = numbers.reduce((previous,currentNumber) => currentNumber > previous ? currentNumber : previous,0);

console.log(maxNumber); */

// problem: 1,  [30,45,20,60,10] i want add multipy using reduce

/* const items = [30,45,20,60,10] ;

const total = items.reduce((accumulate, currentValue)=> accumulate * currentValue, 1);

console.log(total); */

// problem: 2,  [30,45,20,60,10] i want add sort using sort

const items = [30, 45, 20, 60, 10];

const sorting = items.sort((x, y) => x - y);

console.log(sorting);


// problem: 3,  [30,45,20,60,10] i want add big to small  using reduce

/* const numbers = [30, 45, 20, 60, 10];

const descending =  numbers.sort((a,b)=> b-a);

console.log(descending);


const numbers1 = [30, 45, 20, 60, 10];

const max1 =  numbers.reduce((accumulate,currentNumber)=> currentNumber > accumulate ? currentNumber : accumulate,0);

console.log(max1); */


//problems : use object and use reduce to find the total salary of all friends
const friends = [
    { name: "John", age: 25, salary: 30000 },
    { name: "Sarah", age: 28, salary: 35000 },
    { name: "Michael", age: 30, salary: 40000 },
    { name: "Emily", age: 22, salary: 28000 },
    { name: "David", age: 27, salary: 32000 }
];

const result = friends.sort((accumulate, currentValue) => accumulate.age - currentValue.age, 0);

console.log(result)



