// if balance below 1000, then print add balance and if balance 1000 && 5000 then print balance ok and if balance 5000 then print balance high

//solution

const currentBalance = 200;

let message = "";

if(currentBalance < 1000){

    message = `${currentBalance} : is Low Balance ,fast add balance`;

}

else if(currentBalance >= 1000 && currentBalance <= 5000){

    message = `${currentBalance} : balance good`;

}

else{

    message = `${currentBalance} : High Balance`;

}

document.getElementById("currenBalanceAdd").innerHTML = message;