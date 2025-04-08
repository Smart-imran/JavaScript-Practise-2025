// সহজ GET উদাহরণ
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // রেসপন্সকে JSON-এ রূপান্তর
    .then(data => console.log("List User:", data.length)) // ডেটা প্রিন্ট
    .catch(error => console.log("Error:", error)); // ত্রুটি ধরা


/* 
 
const url = "https://jsonplaceholder.typicode.com/users";
const options = {
method: "GET" // GET মেথড
};

fetch(url, options)
.then(response => response.json())
.then(data => console.log("ব্যবহারকারী তালিকা:", data))
.catch(error => console.log("ত্রুটি:", error))
 
*/


/* // সহজ POST উদাহরণ
const newUser = {
    name: "রাহুল",
    email: "rahul@example.com"
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST', // POST মেথড
    headers: {
        'Content-Type': 'application/json' // ডেটা JSON ফরম্যাটে
    },
    body: JSON.stringify(newUser) // নতুন ডেটা পাঠানো
})
    .then(response => response.json())
    .then(data => console.log("নতুন ব্যবহারকারী:", data))
    .catch(error => console.log("ত্রুটি:", error)); */

// সহজ POST উদাহরণ

const postUrl = "https://jsonplaceholder.typicode.com/users";
const newUser = {
    name: "rahul",
    email: "rahul@example.com"
};
const postOptions = {
    method: "POST", // POST মেথড
    headers: {
        "Content-Type": "application/json" // ডেটা JSON ফরম্যাটে
    },
    body: JSON.stringify(newUser) // নতুন ডেটা
};

fetch(postUrl, postOptions)
    .then(response => response.json())
    .then(data => console.log("new user:", data))
    .catch(error => console.log("Error:", error));


    
// সহজ PUT উদাহরণ
/* const updatedUser = {
    name: "রাহুল আপডেটেড",
    email: "rahul.updated@example.com"
};

fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT', // PUT মেথড
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
})
    .then(response => response.json())
    .then(data => console.log("আপডেটেড ব্যবহারকারী:", data))
    .catch(error => console.log("ত্রুটি:", error)); */


    // সহজ PUT উদাহরণ

    const putUrl = "https://jsonplaceholder.typicode.com/users/1";

    const updatedUser = {
        name :"Imran",
        email:"imran@gmail.com"
    };
    
    const putOptions = {
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updatedUser)
    };

    fetch(putUrl, putOptions)
    .then(res =>res.json())
    .then(data =>console.log("first user updated:", data))
    .catch(error => console.log("Error:", error));


    // সহজ PATCH উদাহরণ
/* const partialUpdate = {
    name: "রাহুল প্যাচড"
};

fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH', // PATCH মেথড
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(partialUpdate)
})
    .then(response => response.json())
    .then(data => console.log("প্যাচড ব্যবহারকারী:", data))
    .catch(error => console.log("ত্রুটি:", error)); */

    //patch উদাহরণ
    const patchUrl = "https://jsonplaceholder.typicode.com/users/1";
const partialUpdate = {
    name: "রাহুল প্যাচড"
};
const patchOptions = {
    method: "PATCH", // PATCH মেথড
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(partialUpdate)
};

fetch(patchUrl, patchOptions)
    .then(response => response.json())
    .then(data => console.log("প্যাচড ব্যবহারকারী:", data))
    .catch(error => console.log("ত্রুটি:", error));


    // সহজ DELETE উদাহরণ
/* fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE' // DELETE মেথড
})
    .then(response => {
        if (response.ok) {
            console.log("ব্যবহারকারী মুছে ফেলা হয়েছে!");
        }
    })
    .catch(error => console.log("ত্রুটি:", error)); */


    const deleteUrl = "https://jsonplaceholder.typicode.com/users/1";
const deleteOptions = {
    method: "DELETE" // DELETE মেথড
};

fetch(deleteUrl, deleteOptions)
    .then(response => {
        if (response.ok) {
            console.log("ব্যবহারকারী মুছে ফেলা হয়েছে!");
        }
    })
    .catch(error => console.log("ত্রুটি:", error));