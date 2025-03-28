/* const players = [75,77,80,92,95,75,63,100];

const selected = players.filter(p=> p>70);

console.log(selected); */

// string filter

/* const fruits = ["Apple", "Banana", "orange", "watermelon"];

//const selectedFood = fruits.filter(fruit => fruit[0].toLocaleLowerCase()=== 'o');

const length1 = fruits.filter(f => (f.length > 5) && (f.toLowerCase().includes('o')));

console.log(length1); */

// problem : 1,  [30,45,20,60,10] i want add 13 using map

/* const items = [30,45,20,60,10];

const addItems = items.map(item => item + 13);

console.log(addItems); */


// problem : 2 ["Messi","Maradona", "play", "ronaldo", "Zidane"]


/* const players =  ["Messi","Maradona", "play", "ronaldo", "Zidane"];

const filterring =  players.filter( player => (player.length > 5) && (player.toLowerCase().includes("on")) );

console.log(filterring); */


//problem -3 [10,15,20,25,30,35]

/* const numbers = [10,15,20,25,30,35];

const findLarge20 =  numbers.find(number => number > 20);

console.log(findLarge20); */

//  [65,70,68,72,68,73] use filter

/* const numberInch = [65, 70, 68, 72, 68, 73];

const filterInch = numberInch.filter(n => (n > 69));

console.log(filterInch); */

// problem  [7,10,15,20,25,30] use map

/* const dividedNumbers = [7,10,15,20,25,30];

const divNumm = dividedNumbers.map(d => (d/3).toFixed(2));

divNumm.forEach(result => console.log(result)); */


//  problem : 6 ["Messi","Maradona", "play", "ronaldo", "Zidane"] find 3rd number

/* 
const friends = ["Messi","Maradona", "play", "ronaldo", "Zidane"]

const result = friends.map(friend => friend[2]);

console.log(result); */

// problem: problem : 2 ["Messi","Maradona", "play", "ronaldo", "Zidane"]  use find H diea name search

const friends = ["Messi","Maradona", "play", "ronaldo", "Zidane"];

const findFriend =  friends.find(f=>f.toLowerCase().includes("n"));

console.log(findFriend);


