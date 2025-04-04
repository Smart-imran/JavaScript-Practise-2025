/* const user = {
    id : 1,
    name : "John Doe",
    job : "Software Engineer",
    age : 30
};

const userJson = JSON.stringify(user);

console.log(userJson); */

const user2 = '{"id":1,"name":"John Doe","job":"Software Engineer","age":30}';

const user2Object = JSON.parse(user2);

console.log(user2Object); // { id: 1, name: 'John Doe', job: 'Software Engineer', age: 30 }