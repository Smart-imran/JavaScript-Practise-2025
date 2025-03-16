//problem:1 write a function

/* function testFun(){
    console.log("This is Function")
}

testFun();
 */

//problem:2 write a function with parameter
/* 
function number(a,b){
    const double = (a*b) * 2;
    console.log(double)
}

number(2,2); */

//problem:3 function k variable r madomea call kora

/* function difference(num1,num2){
    const diff = num1 - num2 ;
    console.log(`This difference is :${num1} - ${num2} = ${diff}`);
}

const fatherAge = 40;
const sonAge= 20;
difference(fatherAge,sonAge);
 */

//problem 4. return and arguments
/* 
function addNumber(a,b){
    console.log(arguments);
    const result = a+b;

    return result;
}

const sum = addNumber(5,9,8,3);

console.log(sum); */

//problem:5 now arguments  work use for of loop
/* 
function addNumber(a,b){
    let sum = 0;

    for (const arg of arguments) {
        sum = sum + arg            
    }

    console.log(sum);
}

addNumber(5,8,9,6); */

//problem:6 function if else condition

/* function isEven(num){
    if(num%2 ===0 ){
        return true;
    }

    else{
        return false
    }
}

const a = 5;

const b= 6;

const result1 = isEven((a));
const result2 = isEven((b));


console.log(result1,result2) */

// extraProblem
/* 
let totalTk = 60;
let totalPerCost = 15;
let numberOfCost = totalTk/totalPerCost;
let remainBalance = totalTk - (numberOfCost*totalPerCost);

console.log(`Reaming Balance : ${remainBalance} and Number Of Cost Cycle : ${numberOfCost}`); */

// unique Problem : amon akta function likte hobe jano ami jai string likhi seta even or odd check korbo
// step-1

/* function evenString(str){
    console.log(str);
} */

//evenString("Dhaka");

//step-2

/* function evenString(str){
    const length = str.length;
    console.log(str,length);
}
evenString("Dhaka");  */

//step-3

/* function evenString(str) {
    const length = str.length;
    if (length % 2 === 0) {
        console.log("Even ")
    }
    else{
        console.log("Odd")
    }
}

evenString("Rajshahi"); */

//problem: two parameter one number and other boolean , if boolean true number are double retun and if boolean false number triple return

function doubleOrTripple(number, boolean) {

    if(boolean ==true){
        const result = number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
    
}

const put = doubleOrTripple(5,true);
const put2 = doubleOrTripple(15,false);

console.log(`first result: ${put}`)
console.log(`Second result: ${put2}`)



