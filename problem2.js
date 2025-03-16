// if balance below 1000, then print add balance and if balance 1000 && 5000 then print balance ok and if balance 5000 then print balance high

//solution

const currentBalance = 7000;

if (currentBalance <1000) {
    console.log(`${currentBalance} : is Low Balance ,fast add balance`);
}

else if( currentBalance >=1000 && currentBalance <=5000){
    console.log("balance good");
}

else{
    console.log(`${currentBalance} : High Balance`);
}

