//problem : if buy 5000tk product discount 10% and if buy 10000tk product discount 20% and if buy 2000tk product discount 5%

//solution

const productPrice = 4500;

if (productPrice >= 5000) {
    const discount = (productPrice / 100) * 10;
    const pay = productPrice - discount;
    console.log("You pay:", pay);
}

else if(productPrice >= 6000){
    const discount = (productPrice / 100) * 15;
    const pay = productPrice - discount;
    console.log("You pay:", pay);
}
else {
    const discount = (productPrice / 100) * 5;
    const pay = productPrice - discount;
    console.log("You pay:", pay);
}

