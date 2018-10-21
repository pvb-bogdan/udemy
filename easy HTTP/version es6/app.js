// Jason Placeholder  - fake online Rest API

// initializate the library
const http = new EasyHTTP;

// get users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(recivedData => console.log(recivedData))
//   .catch(error => console.log(error));

// create user data
const data = {
  name: 'Bogdan',
  username: 'istoricu',
  email: 'istoricu@gmail.com'
}

// create an user and post it
// http.post('https://jsonplaceholder.typicode.com/users',data)
//   .then(recivedData => console.log(recivedData))
//   .catch(error => console.log(error));

// update an user and post it
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(recivedData => console.log(recivedData))
//   .catch(error => console.log(error));  

// delete user

// update an user and post it
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(recivedData => console.log(recivedData))
  .catch(error => console.log(error));  