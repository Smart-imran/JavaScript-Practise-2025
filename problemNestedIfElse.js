// বন্ধু যদি দাওয়াত দেই, তাহলে তার পার্টি তে জাবি, র যদি না দাই তাহালে তাকে friend list থেকে  বাদ দেওয়া হবে ।আর যদি দাওয়াত দেই তাহালে চেক করতে হবে ১০০০ টাকার বেশি আছে কিনা। থাকলে  তার জন্য গিফত কিনতে হবে,না হয়ী খালি হাতেয়া যাবি 

//solution

/* const friendInvite = false;

const balance = 1500;

if (friendInvite == true) {

    if(balance > 1000){
        console.log("Buy a gift for my friend")
    }

    else{
        console.log("Go empty handed")
    }

}

else {
    console.log("Delete my friend list")
} */


//problem2 বাসাই মেহমান আসলে বলবি , চা খাবে কিনা , যদি খেতে চায় তাহলে বলবি বিস্কুট খাবে কিনা, যদি না চায় তাহলে বলবি চা, রেডি, আর যদি দুইটা না চায় তাহলে বলবি টিভি দেখেন

// solution

/* const  tea = true;
const biscuit = false;

if(tea == true){
    if(biscuit == true){
        console.log("first tea and biscuit")
    }
    else{
        console.log("Only tea")
    }

}

else{
    console.log("Watch TV")
} */


//problem Solution

const haveAccount = true;
const subscription = true;
const premium = true;

if (haveAccount == true) {

    if (subscription == true) {

        if (premium == true) {
            console.log("See Premium Features")
        }
        else {
            console.log("See Normal Features")
        }
    }
    else {
        console.log("Buy Subscription")
    }
}

else {
    console.log("Create new Account")
}