/* const user = {
    id : 1,
    name : "John Doe",
    job : "Software Engineer",
    age : 30
};

const userJson = JSON.stringify(user);

console.log(userJson); */

/* const user2 = '{"id":1,"name":"John Doe","job":"Software Engineer","age":30}';

const user2Object = JSON.parse(user2);

console.log(user2Object); */ // { id: 1, name: 'John Doe', job: 'Software Engineer', age: 30 }

const getUsers = new Promise((resolve, reject) => {

    const usersAvailable = true;

    const users = [
        { id: 1, name: "John Doe", job: "Software Engineer", age: 30 },
        { id: 2, name: "Jane Smith", job: "Data Scientist", age: 28 },
        { id: 3, name: "Alice Johnson", job: "Web Developer", age: 25 }
    ];

    if (usersAvailable) {
        resolve(users);
    }

    else {
        reject("No users available");
    }

});

getUsers
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error)
    });


