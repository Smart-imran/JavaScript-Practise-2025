// 🔹 GET (All Users)
const getUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      console.log('🔹 GET Users');
      console.log('(await) User Length:', users.length); // Length দেখানোর জন্য
      console.log('(await) First User Name:', users[0].name);
    } catch (err) {
      console.log('GET Error:', err);
    }
  }
  
  // 🔹 POST (New User)
  const createUser = async () => {
    try {
      const newUser = { name: 'Async Imran', email: 'async@example.com' };
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      const data = await res.json();
      console.log('(await) POST New User:', data);
    } catch (err) {
      console.log('POST Error:', err);
    }
  }
  
  // 🔹 PUT (Update user ID 1)
  const updateUser = async () => {
    try {
      const updatedUser = { name: 'Async Updated', email: 'async-up@example.com' };
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser)
      });
      const data = await res.json();
      console.log('(await) PUT Updated User:', data);
    } catch (err) {
      console.log('PUT Error:', err);
    }
  }
  
  // 🔹 DELETE (Delete user ID 1)
  const deleteUser = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE'
      });
      if (res.ok) {
        console.log('(await) DELETE Success: User ID 1 deleted');
      }
    } catch (err) {
      console.log('DELETE Error:', err);
    }
  }
  
  // 🔥 Call all functions
  getUsers();
  createUser();
  updateUser();
  deleteUser();
  