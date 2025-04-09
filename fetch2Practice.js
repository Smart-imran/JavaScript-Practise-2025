//get

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log("User Length :", data.length))
    .catch(error => console.log("This is Error:", error));

//post

const newUser = {
    name: 'imran',
    email: 'rst.imran@gmail.com'
}
fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})

    .then(res => res.json())
    .then(data => console.log('New User :', data))
    .catch(error => console.log("This is Error:", error));
